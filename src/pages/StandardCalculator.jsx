// src/pages/StandardCalculator.jsx
import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useLocalStorage } from '../hooks/useLocalStorage';

// --- ÍCONE DE BACKSPACE (SVG Inline) ---
const BackspaceIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
        <line x1="18" y1="9" x2="12" y2="15"></line>
        <line x1="12" y1="9" x2="18" y2="15"></line>
    </svg>
);

// --- ESTILOS GERAIS ---

const ToolContainer = styled.div`
    display: flex;
    gap: 40px; /* Mais espaçamento entre calculadora e histórico */
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    padding-top: 20px;

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }
`;

const CalculatorCard = styled.div`
    background-color: ${props => props.theme.bgCard};
    padding: 20px;
    border-radius: 20px; /* Bordas bem arredondadas como na foto */
    box-shadow: ${props => props.theme.shadow};
    width: 100%;
    max-width: 360px;
`;

const Screen = styled.div`
    width: 100%;
    height: 80px;
    background-color: ${props => props.theme.bgInput}; /* Fundo cinza/escuro do input */
    border-radius: 12px;
    margin-bottom: 20px;
    padding: 15px;
    text-align: right;
    color: ${props => props.theme.textPrimary};
    font-size: 2.5rem;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    overflow-x: auto;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: 1px solid ${props => props.theme.border};
    
    /* Esconde a barra de rolagem */
    &::-webkit-scrollbar {
        display: none;
    }
`;

const Keypad = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px; /* Espaçamento entre os botões */
`;

const Key = styled.button`
    height: 60px;
    border-radius: 12px; /* Quadrado arredondado */
    border: none;
    font-size: 1.4rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    
    /* Cores baseadas no tema */
    background-color: ${props => props.theme.name === 'dark' ? '#333333' : '#f0f2f5'};
    color: ${props => props.theme.textPrimary};
    
    /* Sombra suave para dar volume */
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);

    &:hover {
        filter: brightness(0.9);
        transform: translateY(-1px);
    }

    &:active {
        transform: translateY(1px);
    }

    /* Estilos específicos para tipos de tecla */
    ${props => props.$type === 'operator' && `
        color: ${props.theme.primary};
        background-color: ${props.theme.name === 'dark' ? '#3a3a3a' : '#e6e9ec'};
    `}

    ${props => props.$type === 'equal' && `
        background-color: ${props.theme.primary};
        color: ${props.theme.textOnPrimary || 'white'};
    `}
`;

// --- ESTILOS DO HISTÓRICO (IDÊNTICO À FOTO) ---

const HistoryContainer = styled.div`
    background-color: ${props => props.theme.bgCard};
    border-radius: 20px;
    box-shadow: ${props => props.theme.shadow};
    width: 100%;
    max-width: 400px;
    padding: 30px;
    min-height: 450px;
    display: flex;
    flex-direction: column;
`;

const HistoryTitle = styled.h3`
    margin-top: 0;
    margin-bottom: 20px;
    color: ${props => props.theme.textPrimary};
    font-size: 1.3rem;
`;

const HistoryList = styled.div`
    flex: 1;
    overflow-y: auto;
    margin-bottom: 20px;
    
    /* Estilização da rolagem */
    &::-webkit-scrollbar {
        width: 6px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.border};
        border-radius: 4px;
    }
`;

const HistoryItem = styled.div`
    padding: 10px 0;
    border-bottom: 1px solid ${props => props.theme.border};
    color: ${props => props.theme.textSecondary};
    font-size: 0.95rem;
    
    .math {
        display: block;
        margin-bottom: 4px;
    }
    .res {
        display: block;
        font-weight: bold;
        color: ${props => props.theme.primary};
        font-size: 1.1rem;
        text-align: right;
    }
`;

const EmptyMessage = styled.p`
    text-align: center;
    color: ${props => props.theme.textSecondary};
    margin-top: 50px;
`;

const ClearHistoryButton = styled.button`
    background-color: #dc3545; /* Vermelho da foto */
    color: white;
    border: none;
    padding: 12px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    width: 100%;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.9;
    }
`;

// --- COMPONENTE PRINCIPAL ---

export default function StandardCalculator() {
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState('');
    const [history, setHistory] = useLocalStorage('history-padrao', []);

    // Função segura para avaliar a expressão matemática
    const evaluateExpression = (exp) => {
        try {
            // Substitui os símbolos visuais pelos operadores JS
            let sanitized = exp.replace(/×/g, '*').replace(/÷/g, '/').replace(/,/g, '.');
            // eslint-disable-next-line no-new-func
            const evalResult = new Function('return ' + sanitized)();
            
            if (!isFinite(evalResult) || isNaN(evalResult)) return 'Erro';
            
            // Formata para remover decimais desnecessários
            return parseFloat(evalResult.toFixed(8)).toString().replace('.', ',');
        } catch (error) {
            return 'Erro';
        }
    };

    const handlePress = useCallback((val) => {
        if (result !== '' && !['+', '-', '×', '÷'].includes(val)) {
            // Se já tem resultado e digita número, começa nova conta
            setExpression(val);
            setResult('');
        } else if (result !== '' && ['+', '-', '×', '÷'].includes(val)) {
            // Se tem resultado e digita operador, continua a conta
            setExpression(result + val);
            setResult('');
        } else {
            setExpression(prev => prev + val);
        }
    }, [result]);

    const handleClear = () => {
        setExpression('');
        setResult('');
    };

    const handleBackspace = () => {
        if (result !== '') {
            setExpression('');
            setResult('');
        } else {
            setExpression(prev => prev.slice(0, -1));
        }
    };

    const handleEqual = () => {
        if (!expression) return;
        
        const finalResult = evaluateExpression(expression);
        setResult(finalResult);
        
        if (finalResult !== 'Erro') {
            const newItem = {
                calc: expression,
                res: finalResult,
                date: new Date().toLocaleString()
            };
            setHistory(prev => [newItem, ...prev]);
        }
    };

    // --- MAPA DE TECLAS (LAYOUT DA FOTO) ---
    const keys = [
        { label: 'C', type: 'func', action: handleClear },
        { label: '(', type: 'func', action: () => handlePress('(') },
        { label: ')', type: 'func', action: () => handlePress(')') },
        { label: '÷', type: 'operator', action: () => handlePress('÷') },
        
        { label: '7', type: 'num', action: () => handlePress('7') },
        { label: '8', type: 'num', action: () => handlePress('8') },
        { label: '9', type: 'num', action: () => handlePress('9') },
        { label: '×', type: 'operator', action: () => handlePress('×') },
        
        { label: '4', type: 'num', action: () => handlePress('4') },
        { label: '5', type: 'num', action: () => handlePress('5') },
        { label: '6', type: 'num', action: () => handlePress('6') },
        { label: '-', type: 'operator', action: () => handlePress('-') },
        
        { label: '1', type: 'num', action: () => handlePress('1') },
        { label: '2', type: 'num', action: () => handlePress('2') },
        { label: '3', type: 'num', action: () => handlePress('3') },
        { label: '+', type: 'operator', action: () => handlePress('+') },
        
        { label: '0', type: 'num', action: () => handlePress('0') },
        { label: ',', type: 'num', action: () => handlePress(',') },
        { label: 'back', type: 'func', icon: <BackspaceIcon />, action: handleBackspace },
        { label: '=', type: 'equal', action: handleEqual }, // Botão de igual (pode ser colorido se quiser)
    ];

    // --- TECLADO FÍSICO ---
    useEffect(() => {
        const handleKeyDown = (e) => {
            const key = e.key;
            if (/[0-9]/.test(key)) handlePress(key);
            if (key === ',') handlePress(',');
            if (key === '.') handlePress(',');
            if (key === '+') handlePress('+');
            if (key === '-') handlePress('-');
            if (key === '*') handlePress('×');
            if (key === '/') handlePress('÷');
            if (key === '(') handlePress('(');
            if (key === ')') handlePress(')');
            if (key === 'Enter') { e.preventDefault(); handleEqual(); }
            if (key === 'Backspace') handleBackspace();
            if (key === 'Escape') handleClear();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handlePress, handleBackspace, handleEqual]); // Deps atualizadas

    return (
        <div id="padrao">
            <h2>🧮 Calculadora Padrão</h2>
            
            <ToolContainer>
                {/* ESQUERDA: CALCULADORA */}
                <CalculatorCard>
                    <Screen>
                        {result !== '' ? result : (expression || '0')}
                    </Screen>
                    
                    <Keypad>
                        {keys.map((btn, i) => (
                            <Key 
                                key={i} 
                                onClick={btn.action}
                                $type={btn.type}
                            >
                                {btn.icon || btn.label}
                            </Key>
                        ))}
                    </Keypad>
                </CalculatorCard>

                {/* DIREITA: HISTÓRICO */}
                <HistoryContainer>
                    <HistoryTitle>Histórico de Cálculos</HistoryTitle>
                    
                    <HistoryList>
                        {history.length === 0 ? (
                            <EmptyMessage>Nenhum cálculo registrado.</EmptyMessage>
                        ) : (
                            history.map((item, idx) => (
                                <HistoryItem key={idx}>
                                    <span className="math">{item.calc} =</span>
                                    <span className="res">{item.res}</span>
                                </HistoryItem>
                            ))
                        )}
                    </HistoryList>
                    
                    <ClearHistoryButton onClick={() => setHistory([])}>
                        Limpar Histórico
                    </ClearHistoryButton>
                </HistoryContainer>
            </ToolContainer>
        </div>
    );
}