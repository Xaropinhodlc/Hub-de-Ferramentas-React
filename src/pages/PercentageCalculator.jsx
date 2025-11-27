// src/pages/PercentageCalculator.jsx
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useLocalStorage } from '../hooks/useLocalStorage';

// --- ESTILOS REUSÁVEIS ---

const ToolContainer = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    align-items: flex-start;
    @media (max-width: 1024px) {
        flex-direction: column;
    }
`;
const ToolHub = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
// Container para os dois cards ficarem lado a lado
const CardsRow = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
const BaseCard = styled.div`
    background-color: ${props => props.theme.bgCard};
    color: ${props => props.theme.textPrimary};
    padding: 25px;
    border-radius: 8px;
    box-shadow: ${props => props.theme.shadow};
`;

const CalcCard = styled(BaseCard)`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const Title = styled.h3`
    color: ${props => props.theme.textPrimary};
    font-size: 1.2em;
    margin-bottom: 10px;
    font-weight: 600;
`;
const InlineInputGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
`;
const TextSpan = styled.span`
    font-weight: 500;
    color: ${props => props.theme.textSecondary};
    white-space: nowrap;
`;
const StyledInput = styled.input`
    width: 100%;
    padding: 12px;
    border: 1px solid ${props => props.theme.border};
    border-radius: 6px;
    font-size: 1.1em;
    background-color: ${props => props.theme.bgInput}; /* Fundo cinza claro no light, escuro no dark */
    color: ${props => props.theme.textPrimary};
    /* Texto escuro no light, branco no dark */
    transition: border-color 0.2s;
    text-align: center;
    &:focus {
        border-color: ${props => props.theme.primary};
        outline: none;
        box-shadow: 0 0 0 2px ${props => props.theme.primary}50;
    }
    
    &::placeholder {
        color: ${props => props.theme.textSecondary};
        opacity: 0.7;
    }
`;

const SubmitButton = styled.button`
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.textOnPrimary || 'white'};
    padding: 12px 20px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1em;
    font-weight: 600;
    width: 100%;
    transition: background-color 0.3s ease;
    &:hover:not(:disabled) {
        opacity: 0.9;
    }
    &:disabled { // <--- ESTILO PARA QUANDO ESTIVER DESABILITADO
        background-color: ${props => props.theme.textSecondary}70;
        cursor: not-allowed;
    }
`;
const ResultArea = styled.div`
    margin-top: 10px;
    padding: 15px;
    background-color: ${props => props.theme.bgInput};
    /* Fundo sutil para o resultado */
    border-radius: 6px;
    text-align: center;
    p {
        font-size: 0.9em;
        color: ${props => props.theme.textSecondary};
        margin-bottom: 5px;
    }
    
    strong {
        font-size: 1.8em;
        color: ${props => props.theme.primary};
        display: block;
    }
`;

// --- ESTILOS DO HISTÓRICO ---

const HistoryPanelStyled = styled(BaseCard)`
    flex: 1;
    min-width: 280px;
    max-height: 600px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
`;

const HistoryList = styled.div`
    flex-grow: 1;
    overflow-y: auto;
    margin-top: 15px;
`;

const HistoryItem = styled.div`
    padding: 10px;
    margin-bottom: 8px;
    border-radius: 6px;
    background-color: ${props => props.theme.historyBg}; 
    font-size: 0.9em;
    border-left: 5px solid ${props => props.theme.primary};
    word-break: break-all;
`;
const ClearButton = styled(SubmitButton)`
    background-color: #dc3545; /* Vermelho conforme a foto */
    margin-top: 20px;
    &:hover:not(:disabled) {
        background-color: #c82333;
    }
`;
// --- COMPONENTE PRINCIPAL ---

export default function PercentageCalculator() {
    // --- ESTADOS CARD 1: Quanto é X% de Y? ---
    const [val1_X, setVal1_X] = useState('');
    const [val1_Y, setVal1_Y] = useState('');
    const [result1, setResult1] = useState(null);
    // --- ESTADOS CARD 2: X é qual % de Y? ---
    const [val2_X, setVal2_X] = useState('');
    const [val2_Y, setVal2_Y] = useState('');
    const [result2, setResult2] = useState(null);

    const [history, setHistory] = useLocalStorage('history-percentage', []);
    // Helper de formatação
    const formatNumber = (num) => {
        return parseFloat(num).toLocaleString('pt-BR', { maximumFractionDigits: 2 });
    };

    // --- CÁLCULO 1: X% de Y ---
    const calculateType1 = useCallback(() => {
        const x = parseFloat(val1_X.replace(',', '.'));
        const y = parseFloat(val1_Y.replace(',', '.'));

        if (isNaN(x) || isNaN(y)) return;

        const res = (x / 100) * y;
        const resFormatted = formatNumber(res);
        setResult1(resFormatted);

        // Adicionar ao histórico
        const historyItem = {
            equation: `${x}% de ${y}`,
            result: resFormatted,
            date: new Date().toLocaleTimeString('pt-BR')
        };
        setHistory(prev => [historyItem, ...prev.slice(0, 49)]);
    }, [val1_X, val1_Y, setHistory]);
    // --- CÁLCULO 2: X é que % de Y? ---
    const calculateType2 = useCallback(() => {
        const x = parseFloat(val2_X.replace(',', '.'));
        const y = parseFloat(val2_Y.replace(',', '.'));

        if (isNaN(x) || isNaN(y) || y === 0) return;

        const res = (x / y) * 100;
        const resFormatted = formatNumber(res) + '%';
        setResult2(resFormatted);

        // Adicionar ao histórico
        const historyItem = {
            equation: `${x} é qual % de ${y}?`,
            result: resFormatted,
            date: new Date().toLocaleTimeString('pt-BR')
        };
        setHistory(prev => [historyItem, ...prev.slice(0, 49)]);
    }, [val2_X, val2_Y, setHistory]);
    // --- TECLADO FÍSICO (ENTER) ---
    const handleKeyDown1 = (e) => {
        // Checa se o botão não está desabilitado antes de calcular
        if (e.key === 'Enter' && val1_X && val1_Y) calculateType1();
    };

    const handleKeyDown2 = (e) => {
        // Checa se o botão não está desabilitado antes de calcular
        if (e.key === 'Enter' && val2_X && val2_Y) calculateType2();
    };
    // --- COMPONENTE DE HISTÓRICO ---
    const HistoryPanel = () => (
        <HistoryPanelStyled>
            <h3 style={{fontSize: '1.1em'}}>Histórico de Porcentagem</h3>
            <HistoryList>
                {history.length === 0 ? (
                    <p style={{color: 'inherit', textAlign: 'center', marginTop: '20px', fontSize: '0.9em'}}>
                        Nenhum cálculo registrado.
                    </p>
                ) : (
                    history.map((item, index) => (
                        <HistoryItem key={index}>
                            <small style={{color: 'inherit', opacity: 0.7}}>{item.date}</small>
                            <p style={{margin: '5px 0'}}>
                                <span style={{fontWeight: 'normal'}}>{item.equation}</span>
                            </p>
                            <p style={{ fontWeight: 'bold' }}>
                                = {item.result}
                            </p>
                        </HistoryItem>
                    ))
                )}
            </HistoryList>
            <ClearButton onClick={() => setHistory([])}>
                Limpar Histórico
            </ClearButton>
        </HistoryPanelStyled>
    );
    return (
        <div id="percentage">
            <h2 style={{ marginBottom: '20px' }}> 📊 Calculadora de Porcentagem</h2>
            <ToolContainer>
                
                {/* Lado Esquerdo: Cards de Cálculo */}
                <ToolHub>
                    <CardsRow>
                        {/* --- CARD 1 --- */}
                        <CalcCard>
                            <Title>Quanto é X% de Y?</Title>
                            <InlineInputGroup>
                                <StyledInput 
                                    type="text" 
                                    inputMode="decimal"
                                    placeholder="X" 
                                    value={val1_X}
                                    onChange={(e) => setVal1_X(e.target.value)}
                                    onKeyDown={handleKeyDown1}
                                />
                                <TextSpan>% de</TextSpan>
                                <StyledInput 
                                    type="text" 
                                    inputMode="decimal"
                                    placeholder="Y" 
                                    value={val1_Y}
                                    onChange={(e) => setVal1_Y(e.target.value)}
                                    onKeyDown={handleKeyDown1}
                                />
                            </InlineInputGroup>
                            
                            <SubmitButton 
                                onClick={calculateType1}
                                // DESABILITA se X ou Y estiverem vazios
                                disabled={!val1_X || !val1_Y} 
                            >
                                Calcular (Enter)
                            </SubmitButton>

                            {result1 && (
                                <ResultArea>
                                    <p>Resultado:</p>
                                    <strong>{result1}</strong>
                                </ResultArea>
                            )}
                        </CalcCard>

                        {/* --- CARD 2 --- */}
                        <CalcCard>
                            <Title>X é qual porcentagem de Y?</Title>
                            <InlineInputGroup>
                                <StyledInput 
                                    type="text" 
                                    inputMode="decimal"
                                    placeholder="X" 
                                    value={val2_X}
                                    onChange={(e) => setVal2_X(e.target.value)}
                                    onKeyDown={handleKeyDown2}
                                />
                                <TextSpan>é qual % de</TextSpan>
                                <StyledInput 
                                    type="text" 
                                    inputMode="decimal"
                                    placeholder="Y" 
                                    value={val2_Y}
                                    onChange={(e) => setVal2_Y(e.target.value)}
                                    onKeyDown={handleKeyDown2}
                                />
                            </InlineInputGroup>
                            
                            <SubmitButton 
                                onClick={calculateType2}
                                // DESABILITA se X ou Y estiverem vazios
                                disabled={!val2_X || !val2_Y} 
                            >
                                Calcular (Enter)
                            </SubmitButton>

                            {result2 && (
                                <ResultArea>
                                    <p>Resultado:</p>
                                    <strong>{result2}</strong>
                                </ResultArea>
                            )}
                        </CalcCard>
                    </CardsRow>
                </ToolHub>
                
                {/* Lado Direito: Histórico */}
                <HistoryPanel />
            </ToolContainer>
        </div>
    );
}