// src/pages/DateCalculator.jsx
import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useLocalStorage } from '../hooks/useLocalStorage';

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

const FormRow = styled.div`
    display: flex;
    gap: 20px;
    @media (min-width: 768px) {
        flex-direction: row; 
    }
    @media (max-width: 767px) {
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

const InputCard = styled(BaseCard)`
    flex: 1; 
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const ResultCard = styled(BaseCard)`
    flex: 1;
    border-left: 5px solid ${props => props.theme.primary};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    /* Garante fundo do input consistente */
    background-color: ${props => props.theme.bgInput}; 
    color: ${props => props.theme.textPrimary};
    transition: border-color 0.2s;
    
    &:focus {
        border-color: ${props => props.theme.primary};
        outline: none;
        box-shadow: 0 0 0 2px ${props => props.theme.primary}50;
    }
    
    /* CORREÇÃO ROBUSTA FINAL: Garante que o ícone do calendário seja visível */
    &[type="date"]::-webkit-calendar-picker-indicator {
        /* Inverte o ícone de preto para branco no modo escuro */
        filter: ${props => props.theme.name === 'dark' ? 'invert(1)' : 'none'};
        cursor: pointer;
        /* Força a cor de fundo do ícone a ser a mesma do input, garantindo o contraste */
        background-color: ${props => props.theme.bgInput}; 
        /* Para navegadores que suportam customização da cor do ícone */
        color: ${props => props.theme.textPrimary};
        padding: 2px;
        border-radius: 4px;
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

const ResultTitle = styled.h4`
    color: ${props => props.theme.textSecondary};
    font-size: 1em;
    margin-bottom: 8px;
    border-bottom: 1px solid ${props => props.theme.border};
    padding-bottom: 5px;
`;

const ResultValue = styled.p`
    font-size: 1.2em;
    font-weight: bold;
    color: ${props => props.theme.textPrimary};
    margin-bottom: 5px;
`;

// --- ESTILOS DO HISTÓRICO ---

const HistoryPanelStyled = styled(BaseCard)`
    flex: 1; 
    min-width: 280px;
    max-height: 700px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
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
    background-color: #e74c3c;
    margin-top: 20px;
    &:hover:not(:disabled) {
        background-color: #c0392b;
    }
`;

// --- LÓGICA E COMPONENTE PRINCIPAL ---

export default function DateCalculator() {
    // Estados
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [result, setResult] = useState(null);
    const [history, setHistory] = useLocalStorage('history-date-difference', []);

    // Helpers
    const formatDate = (dateInput) => {
        const date = (typeof dateInput === 'string' && dateInput) 
            ? new Date(dateInput + 'T00:00:00') 
            : dateInput;
            
        if (isNaN(date.getTime())) return 'Data Inválida';
        
        return date.toLocaleDateString('pt-BR', { year: 'numeric', month: '2-digit', day: '2-digit' });
    };
    
    // Funções de Cálculo 
    const calculateDifference = useCallback(() => {
        const start = new Date(startDate + 'T00:00:00');
        const end = new Date(endDate + 'T00:00:00');

        if (isNaN(start.getTime()) || isNaN(end.getTime())) {
            setResult(null);
            return;
        }

        const initialTime = start.getTime();
        const finalTime = end.getTime();

        const diffTime = Math.abs(finalTime - initialTime);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

        let tempStart = new Date(start.getTime());
        let tempEnd = new Date(end.getTime());
        
        if (tempStart > tempEnd) {
            [tempStart, tempEnd] = [tempEnd, tempStart];
        }

        let diffYears = tempEnd.getFullYear() - tempStart.getFullYear();
        let diffMonths = tempEnd.getMonth() - tempStart.getMonth();
        let diffDates = tempEnd.getDate() - tempStart.getDate();

        // Ajusta meses e dias
        if (diffDates < 0) {
            diffMonths--;
            const daysInPreviousMonth = new Date(tempEnd.getFullYear(), tempEnd.getMonth(), 0).getDate();
            diffDates += daysInPreviousMonth;
        }
        
        // Ajusta anos e meses
        if (diffMonths < 0) {
            diffYears--;
            diffMonths += 12;
        }
        
        const totalMonthsApprox = diffTime / (1000 * 60 * 60 * 24 * 30.4375); 
        
        const calculationResult = `Intervalo de ${formatDate(start)} até ${formatDate(end)}:`;
        const resultFormatted = `${diffYears} Anos, ${diffMonths} Meses, ${diffDates} Dias`;

        const newResult = {
            title: calculationResult,
            complete: resultFormatted,
            totalDays: diffDays.toLocaleString('pt-BR'),
            totalMonthsApprox: totalMonthsApprox.toFixed(2).replace('.', ',') + ' Meses',
        };
        setResult(newResult);
        
        const newHistoryItem = {
            operation: calculationResult,
            result: resultFormatted,
            date: new Date().toLocaleTimeString('pt-BR'),
        };
        setHistory(prevHistory => [newHistoryItem, ...prevHistory.slice(0, 49)]);

    }, [startDate, endDate, setHistory]);

    // --- LÓGICA DO TECLADO FÍSICO --- (Mantida)
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                if (startDate && endDate) {
                    calculateDifference();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [startDate, endDate, calculateDifference]);
    
    // Componente de Histórico (Reutilizado)
    const HistoryPanel = () => (
        <HistoryPanelStyled>
            <h3>Histórico de Datas</h3>
            <div className="history-list">
                {history.length === 0 ? (
                    <p style={{color: 'inherit'}}>Nenhum cálculo registrado.</p>
                ) : (
                    history.map((item, index) => (
                        <HistoryItem key={index}>
                            <small>{item.date}</small>
                            <p style={{margin: '5px 0'}}>
                                <span style={{fontWeight: 'normal'}}>{item.operation}</span>
                            </p>
                            <p style={{ fontWeight: 'bold' }}>
                                ➡️ {item.result}
                            </p>
                        </HistoryItem>
                    ))
                )}
            </div>
            <ClearButton onClick={() => setHistory([])}>
                Limpar Histórico
            </ClearButton>
        </HistoryPanelStyled>
    );
    

    return (
        <div id="data">
            <h2> 📅 Calculadora de Diferença de Datas e Idade</h2>
            <ToolContainer>
                
                {/* Lado Esquerdo: Ferramenta (Inputs + Resultados Lado a Lado) */}
                <ToolHub>
                    
                    <FormRow>
                        {/* 1. CARD INPUTS: Intervalo de Datas */}
                        <InputCard>
                            <ResultTitle>Intervalo de Datas</ResultTitle>
                            <InputGroup>
                                <Label htmlFor="startDate">Data de Início:</Label>
                                <StyledInput
                                    id="startDate"
                                    type="date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                />
                            </InputGroup>
                            <InputGroup>
                                <Label htmlFor="endDate">Data Final:</Label>
                                <StyledInput
                                    id="endDate"
                                    type="date"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                />
                            </InputGroup>
                            <SubmitButton 
                                onClick={calculateDifference}
                                disabled={!startDate || !endDate}
                                style={{ marginTop: 'auto' }}
                            >
                                Calcular Diferença (Enter)
                            </SubmitButton>
                        </InputCard>

                        {/* 2. CARD RESULTADO: Resultados */}
                        <ResultCard>
                            <ResultTitle>Resultados</ResultTitle>
                            {result ? (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                    
                                    <div>
                                        <Label>Diferença Completa:</Label>
                                        <ResultValue>{result.complete}</ResultValue>
                                    </div>
                                    
                                    <div>
                                        <Label>Total em Dias:</Label>
                                        <ResultValue>{result.totalDays} Dias</ResultValue>
                                    </div>
                                    
                                    <div>
                                        <Label>Total em Meses (Aprox.):</Label>
                                        <ResultValue>{result.totalMonthsApprox}</ResultValue>
                                    </div>

                                </div>
                            ) : (
                                <p style={{ color: props => props.theme.textSecondary }}>Insira as datas para calcular.</p>
                            )}
                        </ResultCard>
                    </FormRow>

                    {/* 3. CARD HISTÓRICO: Abaixo dos Cards Principais */}
                    <div style={{ marginTop: '10px' }}> 
                        <HistoryPanel />
                    </div>
                </ToolHub>
            </ToolContainer>
        </div>
    );
}