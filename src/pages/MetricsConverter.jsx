// src/pages/MetricConverter.jsx
import React, { useState, useCallback, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useLocalStorage } from '../hooks/useLocalStorage';

// --- DEFINIÇÃO DAS UNIDADES E TAXAS DE CONVERSÃO (Comprimento) ---
// Base: Meter (m)
const CONVERSION_RATES = {
    // Comprimento (Base: metro)
    meter: {
        label: 'Metro (m)',
        toBase: 1,
    },
    kilometer: {
        label: 'Quilômetro (km)',
        toBase: 1000,
    },
    centimeter: {
        label: 'Centímetro (cm)',
        toBase: 0.01,
    },
    millimeter: {
        label: 'Milímetro (mm)',
        toBase: 0.001,
    },
    inch: {
        label: 'Polegada (in)',
        toBase: 0.0254, // 1 in = 0.0254 m
    },
    foot: {
        label: 'Pé (ft)',
        toBase: 0.3048, // 1 ft = 0.3048 m
    },
    yard: {
        label: 'Jarda (yd)',
        toBase: 0.9144, // 1 yd = 0.9144 m
    },
    mile: {
        label: 'Milha (mi)',
        toBase: 1609.34, // 1 mi = 1609.34 m
    },
};

// --- ESTILOS REUSÁVEIS ---

const ToolContainer = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    @media (max-width: 1024px) {
        flex-direction: column;
    }
`;

const ToolHub = styled.div`
    flex: 3;
    max-width: 650px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const FormCard = styled.div`
    flex: 1;
    background-color: ${props => props.theme.bgCard};
    color: ${props => props.theme.textPrimary};
    padding: 25px;
    border-radius: 8px;
    box-shadow: ${props => props.theme.shadow};
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    margin-bottom: 6px;
    font-weight: 600;
    font-size: 0.95em;
    color: ${props => props.theme.textSecondary};
`;

const InputRow = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

const StyledInput = styled.input`
    flex: 2;
    padding: 12px;
    border: 1px solid ${props => props.theme.border};
    border-radius: 6px;
    font-size: 1.1em;
    background-color: ${props => props.theme.bgInput};
    color: ${props => props.theme.textPrimary};
    transition: border-color 0.2s;
    
    &:focus {
        border-color: ${props => props.theme.primary};
        outline: none;
        box-shadow: 0 0 0 2px ${props => props.theme.primary}50;
    }
`;

const StyledSelect = styled.select`
    flex: 1;
    padding: 12px;
    border: 1px solid ${props => props.theme.border};
    border-radius: 6px;
    font-size: 1.1em;
    background-color: ${props => props.theme.bgInput};
    color: ${props => props.theme.textPrimary};
    transition: border-color 0.2s;
    
    &:focus {
        border-color: ${props => props.theme.primary};
        outline: none;
        box-shadow: 0 0 0 2px ${props => props.theme.primary}50;
    }

    /* CORREÇÃO DE BUG VISUAL: Garante cores visíveis para o dropdown no modo escuro */
    option {
        background-color: ${props => props.theme.bgCard}; 
        color: ${props => props.theme.textPrimary};     
    }
`;

const SubmitButton = styled.button`
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.textOnPrimary || 'white'};
    padding: 12px 20px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1.1em;
    font-weight: 600;
    transition: background-color 0.3s ease;
    
    &:hover:not(:disabled) {
        opacity: 0.9;
    }
    &:disabled {
        background-color: ${props => props.theme.textSecondary}70;
        cursor: not-allowed;
    }
`;

const ResultCard = styled(FormCard)`
    border-left: 5px solid ${props => props.theme.primary};
    padding: 20px;
`;

const ResultTitle = styled.h3`
    color: ${props => props.theme.textPrimary};
    font-size: 1.5em;
    margin-bottom: 8px;
`;

const ResultItem = styled.div`
    padding: 10px;
    background-color: ${props => props.theme.historyBg};
    border-radius: 6px;
    margin-bottom: 10px;
    
    p {
        font-size: 1.1em;
        font-weight: bold;
        color: ${props => props.theme.primary};
    }
    span {
        font-size: 0.9em;
        color: ${props => props.theme.textSecondary};
    }
`;

// --- ESTILOS DO HISTÓRICO --- (Reutilizados)

const HistoryPanelStyled = styled(FormCard)`
    flex: 1; 
    min-width: 280px;
    max-height: 700px;
    overflow-y: auto;
`;

const HistoryItemStyled = styled.div`
    padding: 10px;
    margin-bottom: 8px;
    border-radius: 6px;
    background-color: ${props => props.theme.historyBg}; 
    font-size: 0.9em;
    border-left: 5px solid ${props => props.theme.primary};
    word-break: break-all;
    
    small {
        color: ${props => props.theme.textSecondary};
    }
`;

const ClearButton = styled(SubmitButton)`
    background-color: ${props => props.theme.textSecondary};
    margin-top: 20px;
    &:hover:not(:disabled) {
        background-color: ${props => props.theme.name === 'light' ? '#6c757d' : '#8d8d8d'};
    }
`;

// --- LÓGICA E COMPONENTE PRINCIPAL ---

export default function MetricConverter() {
    // Estados
    const [inputValue, setInputValue] = useState('');
    const [fromUnit, setFromUnit] = useState('meter');
    const [result, setResult] = useState(null);
    const [history, setHistory] = useLocalStorage('history-metric-converter', []);

    // Função Principal de Conversão
    const convert = useCallback(() => {
        const value = parseFloat(inputValue);

        if (isNaN(value) || value <= 0) {
            setResult(null);
            return;
        }

        const fromRate = CONVERSION_RATES[fromUnit].toBase;
        // 1. Converter o valor de entrada para a unidade base (metro)
        const baseValue = value * fromRate;

        // 2. Calcular os resultados para todas as outras unidades
        const conversionResults = Object.keys(CONVERSION_RATES)
            .filter(key => key !== fromUnit)
            .map(key => {
                const toRate = CONVERSION_RATES[key].toBase;
                // Converter da unidade base para a unidade de destino
                const resultValue = baseValue / toRate;
                
                return {
                    unit: key,
                    label: CONVERSION_RATES[key].label,
                    value: resultValue.toLocaleString('pt-BR', { maximumFractionDigits: 6 }),
                };
            });
            
        // 3. Organizar o resultado para exibição e histórico
        const resultData = {
            input: `${value.toLocaleString('pt-BR')} ${CONVERSION_RATES[fromUnit].label}`,
            results: conversionResults,
        };
        
        setResult(resultData);

        // 4. Adicionar ao Histórico
        const historyOperation = `Converter ${resultData.input}`;
        const historyResult = conversionResults
            .map(r => `${r.value} ${r.label.split(' ')[0]}`) // Ex: 1,5 km
            .join(' | ');
            
        const newHistoryItem = {
            operation: historyOperation,
            result: historyResult,
            date: new Date().toLocaleTimeString('pt-BR'),
        };
        setHistory(prevHistory => [newHistoryItem, ...prevHistory.slice(0, 49)]);

    }, [inputValue, fromUnit, setHistory]);

    // Lógica do Teclado Físico (Enter)
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                if (parseFloat(inputValue) > 0) {
                    convert();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [inputValue, convert]);
    
    // Componente de Histórico
    const HistoryPanel = () => (
        <HistoryPanelStyled>
            <h3>Histórico de Conversões</h3>
            <div className="history-list">
                {history.length === 0 ? (
                    <p style={{color: 'inherit'}}>Nenhuma conversão registrada.</p>
                ) : (
                    history.map((item, index) => (
                        <HistoryItemStyled key={index}>
                            <small>{item.date}</small>
                            <p style={{margin: '5px 0'}}>
                                <span style={{fontWeight: 'normal'}}>{item.operation}</span>
                            </p>
                            <p style={{ fontWeight: 'bold' }}>
                                ➡️ {item.result}
                            </p>
                        </HistoryItemStyled>
                    ))
                )}
            </div>
            <ClearButton onClick={() => setHistory([])}>
                Limpar Histórico
            </ClearButton>
        </HistoryPanelStyled>
    );

    // Renderização do Formulário
    const renderForm = () => (
        <FormCard>
            <InputGroup>
                <Label htmlFor="inputValue">Valor a Converter:</Label>
                <InputRow>
                    <StyledInput
                        id="inputValue"
                        type="number"
                        inputMode="decimal"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Ex: 100"
                        min="0"
                    />
                    <StyledSelect 
                        value={fromUnit} 
                        onChange={(e) => setFromUnit(e.target.value)}
                    >
                        {Object.keys(CONVERSION_RATES).map(key => (
                            <option key={key} value={key}>
                                {CONVERSION_RATES[key].label}
                            </option>
                        ))}
                    </StyledSelect>
                </InputRow>
            </InputGroup>
            
            <SubmitButton 
                onClick={convert}
                disabled={!inputValue || parseFloat(inputValue) <= 0}
            >
                Converter (Enter)
            </SubmitButton>
        </FormCard>
    );

    // Renderização dos Resultados
    const renderResults = () => (
        <ResultCard>
            <ResultTitle>
                Resultados para: {result.input}
            </ResultTitle>
            
            <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                {result.results.map(item => (
                    <ResultItem key={item.unit}>
                        <span>{item.label}:</span>
                        <p>{item.value}</p>
                    </ResultItem>
                ))}
            </div>
        </ResultCard>
    );

    return (
        <div id="metric-converter">
            <h2> 📏 Conversor de Métricas (Comprimento)</h2>
            <ToolContainer>
                
                {/* Lado Esquerdo: Inputs e Resultados */}
                <ToolHub>
                    {renderForm()}
                    
                    {result && renderResults()}

                    {!result && (
                        <p style={{ color: props => props.theme.textSecondary, textAlign: 'center', marginTop: '20px' }}>
                            Insira um valor e a unidade para começar a conversão.
                        </p>
                    )}
                </ToolHub>
                
                {/* Lado Direito: Histórico */}
                <HistoryPanel />
            </ToolContainer>
        </div>
    );
}