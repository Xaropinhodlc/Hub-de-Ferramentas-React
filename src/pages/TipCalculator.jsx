// src/pages/TipCalculator.jsx
import React, { useState, useCallback, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useLocalStorage } from '../hooks/useLocalStorage';

// --- DEFINIÇÕES E CONSTANTES ---
const DEFAULT_TIP_PERCENTAGES = [10, 15, 20];

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

const BaseCard = styled.div`
    background-color: ${props => props.theme.bgCard};
    color: ${props => props.theme.textPrimary};
    padding: 25px;
    border-radius: 8px;
    box-shadow: ${props => props.theme.shadow};
`;

const FormCard = styled(BaseCard)`
    flex: 1;
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

const StyledInput = styled.input`
    padding: 12px;
    border: 1px solid ${props => props.theme.border};
    border-radius: 6px;
    font-size: 1.1em;
    background-color: ${props => props.theme.bgInput};
    color: ${props => props.theme.textPrimary};
    transition: border-color 0.2s;
    text-align: right;
    
    &:focus {
        border-color: ${props => props.theme.primary};
        outline: none;
        box-shadow: 0 0 0 2px ${props => props.theme.primary}50;
    }
`;

const PercentageButtons = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
`;

const PercentageButton = styled.button`
    flex: 1;
    padding: 10px;
    border: 1px solid ${props => props.theme.border};
    border-radius: 6px;
    background-color: ${props => props.active ? props.theme.primary : props.theme.bgInput};
    color: ${props => props.active ? props.theme.textOnPrimary : props.theme.textPrimary};
    cursor: pointer;
    font-weight: ${props => props.active ? 'bold' : 'normal'};
    transition: all 0.2s;
    
    &:hover {
        background-color: ${props => props.active ? props.theme.primary : props.theme.historyBg};
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

const ResultCard = styled(BaseCard)`
    border-left: 5px solid ${props => props.theme.primary};
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    
    h3 {
        color: ${props => props.theme.primary};
        font-size: 1.5em;
        margin-bottom: 5px;
    }
`;

const ResultItem = styled.div`
    background-color: ${props => props.theme.historyBg};
    padding: 10px 15px;
    border-radius: 6px;
    
    span {
        font-size: 0.9em;
        color: ${props => props.theme.textSecondary};
    }
    p {
        font-size: 1.5em;
        font-weight: bold;
        color: ${props => props.theme.textPrimary};
    }
`;

// --- ESTILOS DO HISTÓRICO --- (Reutilizados)

const HistoryPanelStyled = styled(BaseCard)`
    flex: 1; 
    min-width: 280px;
    max-height: 700px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
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

export default function TipCalculator() {
    // Estados
    const [billAmount, setBillAmount] = useState('');
    const [tipPercentage, setTipPercentage] = useState(15);
    const [numberOfPeople, setNumberOfPeople] = useState(1);
    const [result, setResult] = useState(null);
    const [history, setHistory] = useLocalStorage('history-tip-calculator', []);

    // Helper para formatação em moeda BRL
    const formatCurrency = (value) => {
        // Garante que o valor seja um número válido antes de formatar
        const num = parseFloat(value);
        if (isNaN(num)) return 'R$ 0,00';
        return num.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    // Função Principal de Cálculo
    const calculateTip = useCallback(() => {
        const bill = parseFloat(billAmount.replace(',', '.'));
        const people = parseInt(numberOfPeople, 10);
        const tipP = parseFloat(tipPercentage);

        if (isNaN(bill) || bill <= 0 || isNaN(people) || people <= 0 || isNaN(tipP) || tipP < 0) {
            setResult(null);
            return;
        }

        // 1. Cálculo da Gorjeta Total
        const totalTip = (bill * tipP) / 100;
        
        // 2. Cálculo do Total Geral (Conta + Gorjeta)
        const totalWithTip = bill + totalTip;

        // 3. Cálculo por Pessoa
        const tipPerPerson = totalTip / people;
        const totalPerPerson = totalWithTip / people;

        const resultData = {
            tipPercentage: tipP,
            billAmount: bill,
            totalTip: totalTip,
            totalWithTip: totalWithTip,
            tipPerPerson: tipPerPerson,
            totalPerPerson: totalPerPerson,
            people: people
        };
        
        setResult(resultData);

        // 4. Adicionar ao Histórico
        const historyOperation = `R$${billAmount} + ${tipP}% de Gorjeta (por ${people} pessoas):`;
        const historyResult = `Gorjeta Total: ${formatCurrency(totalTip)} | Total por Pessoa: ${formatCurrency(totalPerPerson)}`;
            
        const newHistoryItem = {
            operation: historyOperation,
            result: historyResult,
            date: new Date().toLocaleTimeString('pt-BR'),
        };
        setHistory(prevHistory => [newHistoryItem, ...prevHistory.slice(0, 49)]);

    }, [billAmount, tipPercentage, numberOfPeople, setHistory]);

    // Lógica do Teclado Físico (Enter)
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                if (parseFloat(billAmount) > 0 && parseInt(numberOfPeople) > 0) {
                    calculateTip();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [billAmount, numberOfPeople, calculateTip]);
    
    // Componente de Histórico
    const HistoryPanel = () => (
        <HistoryPanelStyled>
            <h3>Histórico de Gorjetas</h3>
            <div className="history-list">
                {history.length === 0 ? (
                    <p style={{color: 'inherit'}}>Nenhum cálculo registrado.</p>
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
                <Label htmlFor="billAmount">Valor da Conta (R$):</Label>
                <StyledInput
                    id="billAmount"
                    type="number"
                    inputMode="decimal"
                    value={billAmount}
                    onChange={(e) => setBillAmount(e.target.value)}
                    placeholder="Ex: 85.50"
                    min="0"
                />
            </InputGroup>

            <InputGroup>
                <Label>Selecione a Porcentagem da Gorjeta:</Label>
                <PercentageButtons>
                    {DEFAULT_TIP_PERCENTAGES.map(p => (
                        <PercentageButton 
                            key={p} 
                            active={tipPercentage === p}
                            onClick={() => setTipPercentage(p)}
                        >
                            {p}%
                        </PercentageButton>
                    ))}
                    <StyledInput
                        type="number"
                        inputMode="numeric"
                        value={tipPercentage}
                        onChange={(e) => setTipPercentage(e.target.value)}
                        placeholder="Outra %"
                        style={{ flex: 1.5, textAlign: 'center' }}
                        min="0"
                    />
                </PercentageButtons>
            </InputGroup>
            
            <InputGroup>
                <Label htmlFor="numberOfPeople">Número de Pessoas:</Label>
                <StyledInput
                    id="numberOfPeople"
                    type="number"
                    inputMode="numeric"
                    value={numberOfPeople}
                    onChange={(e) => setNumberOfPeople(e.target.value)}
                    placeholder="1"
                    min="1"
                />
            </InputGroup>
            
            <SubmitButton 
                onClick={calculateTip}
                disabled={!billAmount || parseFloat(billAmount) <= 0 || parseInt(numberOfPeople) <= 0}
            >
                Calcular Gorjeta (Enter)
            </SubmitButton>
        </FormCard>
    );

    // Renderização dos Resultados
    const renderResults = () => (
        <ResultCard>
            <h3>Resumo da Conta ({result.tipPercentage}% Gorjeta)</h3>
            
            <ResultItem>
                <span>Gorjeta por Pessoa:</span>
                <p>{formatCurrency(result.tipPerPerson)}</p>
            </ResultItem>
            
            <ResultItem>
                <span>Total (Conta + Gorjeta) por Pessoa:</span>
                <p>{formatCurrency(result.totalPerPerson)}</p>
            </ResultItem>

            <ResultItem style={{ backgroundColor: props => props.theme.primary + '20' }}>
                <span>Gorjeta Total ({result.tipPercentage}%):</span>
                <p style={{ color: props => props.theme.primary }}>{formatCurrency(result.totalTip)}</p>
            </ResultItem>
            
            <ResultItem style={{ backgroundColor: props => props.theme.primary + '20' }}>
                <span>Total Geral (Conta + Gorjeta):</span>
                <p style={{ color: props => props.theme.primary }}>{formatCurrency(result.totalWithTip)}</p>
            </ResultItem>
        </ResultCard>
    );

    return (
        <div id="tip-calculator">
            <h2>🧾 Calculadora de Gorjeta e Divisão de Conta</h2>
            <ToolContainer>
                
                {/* Lado Esquerdo: Inputs e Resultados */}
                <ToolHub>
                    {renderForm()}
                    
                    {result && renderResults()}

                    {!result && (
                        <p style={{ color: props => props.theme.textSecondary, textAlign: 'center', marginTop: '20px' }}>
                            Insira os valores da conta para calcular a gorjeta e a divisão.
                        </p>
                    )}
                </ToolHub>
                
                {/* Lado Direito: Histórico */}
                <HistoryPanel />
            </ToolContainer>
        </div>
    );
}