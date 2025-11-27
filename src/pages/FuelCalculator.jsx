// src/pages/FuelCalculator.jsx
import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useLocalStorage } from '../hooks/useLocalStorage';

// --- ESTILOS REUSÁVEIS (Adaptados do StandardCalculator) ---

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
    max-width: 500px;
    margin: 0 auto;
`;

const BaseCard = styled.div`
    background-color: ${props => props.theme.bgCard};
    color: ${props => props.theme.textPrimary};
    padding: 25px;
    border-radius: 8px;
    box-shadow: ${props => props.theme.shadow};
`;

const FormCard = styled(BaseCard)`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
`;

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    margin-bottom: 8px;
    font-weight: 600;
    color: ${props => props.theme.textPrimary};
`;

const Input = styled.input`
    padding: 12px;
    border: 1px solid ${props => props.theme.border};
    border-radius: 6px;
    font-size: 1em;
    background-color: ${props => props.theme.bgInput};
    color: ${props => props.theme.textPrimary};
    transition: border-color 0.2s;

    &:focus {
        border-color: ${props => props.theme.primary};
        outline: none;
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
        background-color: ${props => props.theme.textSecondary};
        cursor: not-allowed;
    }
`;

// --- ESTILOS DE RESULTADO ---

const ResultCard = styled(BaseCard)`
    padding: 20px;
    border-left: 5px solid ${props => props.color};
    text-align: center;
    
    h3 {
        color: ${props => props.color};
        font-size: 1.5em;
        margin-bottom: 10px;
    }
`;

const ResultValue = styled.p`
    font-size: 2.5em;
    font-weight: bold;
    color: ${props => props.theme.textPrimary};
    margin-top: 5px;
`;

const Tip = styled.p`
    font-size: 1em;
    color: ${props => props.theme.textSecondary};
    margin-top: 10px;
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
    background-color: ${props => props.theme.textSecondary};
    margin-top: 20px;
    &:hover:not(:disabled) {
        background-color: ${props => props.theme.name === 'light' ? '#6c757d' : '#8d8d8d'};
    }
`;

// --- COMPONENTE PRINCIPAL ---

export default function FuelCalculator() {
    // 1. Estados e Histórico
    const [gasPrice, setGasPrice] = useState('');
    const [alcPrice, setAlcPrice] = useState('');
    const [gasConsumption, setGasConsumption] = useState('');
    const [alcConsumption, setAlcConsumption] = useState('');
    const [result, setResult] = useState(null);
    const [history, setHistory] = useLocalStorage('history-combustivel', []);
    
    // Função utilitária para formatar valores monetários
    const formatCurrency = (value) => {
        return parseFloat(value).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };

    // Lógica de Cálculo
    const calculateFuel = useCallback(() => {
        const pGas = parseFloat(gasPrice.replace(',', '.'));
        const pAlc = parseFloat(alcPrice.replace(',', '.'));
        const cGas = parseFloat(gasConsumption.replace(',', '.'));
        const cAlc = parseFloat(alcConsumption.replace(',', '.'));

        if (!pGas || !pAlc || !cGas || !cAlc || pGas <= 0 || pAlc <= 0 || cGas <= 0 || cAlc <= 0) {
            setResult(null);
            return;
        }
        
        // 1. Custo por km:
        const costPerKmGas = pGas / cGas;
        const costPerKmAlc = pAlc / cAlc;
        
        // 2. Razão Custo-Eficiência:
        const ratio = costPerKmAlc / costPerKmGas;
        
        let decision;
        let color;
        let tip;

        if (ratio < 0.7) {
            decision = 'Álcool é mais vantajoso!';
            color = '#2ecc71'; // Verde (Sucesso)
            tip = `A economia é de ${formatCurrency((1 - ratio) * 100)}% em relação à Gasolina.`;
        } else if (ratio >= 0.7 && ratio <= 1.0) {
            decision = 'Gasolina é mais vantajosa!';
            color = '#f39c12'; // Amarelo (Atenção)
            tip = `O custo do Álcool é equivalente a ${formatCurrency(ratio * 100)}% do custo da Gasolina.`;
        } else {
            decision = 'Gasolina é a melhor opção!';
            color = '#e74c3c'; // Vermelho (Alerta)
            tip = `O custo do Álcool é muito maior em comparação.`;
        }
        
        const newResult = {
            decision,
            ratio: ratio.toFixed(3).replace('.', ','),
            color,
            tip,
            data: { pGas, pAlc, cGas, cAlc }
        };

        setResult(newResult);

        // 3. Adiciona ao Histórico
        const newHistoryItem = {
            input: `G: R$${formatCurrency(pGas)}/${formatCurrency(cGas)}km - A: R$${formatCurrency(pAlc)}/${formatCurrency(cAlc)}km`,
            result: decision,
            ratio: newResult.ratio,
            date: new Date().toLocaleTimeString('pt-BR'),
            color: color
        };
        setHistory(prevHistory => [newHistoryItem, ...prevHistory.slice(0, 49)]);
    }, [gasPrice, alcPrice, gasConsumption, alcConsumption, setHistory]);

    // Função unificada para manipular mudanças de input
    const handleInputChange = useCallback((setter, value) => {
        // Permite apenas números, vírgula e ponto (para formatação)
        const cleanedValue = value.replace(/[^0-9,.]/g, ''); 
        // Substitui a vírgula por ponto para cálculo (se o usuário digitar ponto)
        setter(cleanedValue.replace('.', ',')); 
    }, []);

    // --- LÓGICA DO TECLADO FÍSICO ---
    const inputRefs = {
        gasPrice: React.useRef(null),
        alcPrice: React.useRef(null),
        gasConsumption: React.useRef(null),
        alcConsumption: React.useRef(null),
    };
    const focusableInputs = [
        inputRefs.gasPrice, 
        inputRefs.alcPrice, 
        inputRefs.gasConsumption, 
        inputRefs.alcConsumption
    ];

    useEffect(() => {
        const handleKeyDown = (event) => {
            // Ação principal: Calcular ao pressionar Enter
            if (event.key === 'Enter') {
                event.preventDefault();
                calculateFuel();
            }
            // Ação de navegação: Tab para focar o próximo campo
            else if (event.key === 'Tab') {
                 // Deixa o comportamento padrão do Tab (navegar entre elementos focáveis)
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [calculateFuel]); // Depende da função de cálculo

    // Componente de Histórico (Reutilizado)
    const HistoryPanel = () => (
        <HistoryPanelStyled>
            <h3>Histórico de Abastecimento</h3>
            <div className="history-list">
                {history.length === 0 ? (
                    <p style={{color: 'inherit'}}>Nenhum cálculo registrado.</p>
                ) : (
                    history.map((item, index) => (
                        <HistoryItem key={index} style={{ borderLeftColor: item.color }}>
                            <small>{item.date}</small>
                            <p style={{margin: '5px 0'}}>
                                Dados: {item.input}
                            </p>
                            <p>
                                Razão: <strong>{item.ratio}</strong>
                            </p>
                            <p style={{ fontWeight: 'bold', color: item.color }}>
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
    
    const isFormValid = gasPrice && alcPrice && gasConsumption && alcConsumption;

    return (
        <div id="combustivel">
            <h2>⛽ Calculadora de Combustível</h2>
            <ToolContainer>
                {/* Lado Esquerdo: Formulário e Resultado */}
                <ToolHub>
                    <FormCard>
                        {/* Preço Gasolina */}
                        <InputGroup>
                            <Label htmlFor="gasPrice">Preço da Gasolina (R$/Litro)</Label>
                            <Input
                                id="gasPrice"
                                type="text"
                                inputMode="decimal"
                                value={gasPrice}
                                onChange={(e) => handleInputChange(setGasPrice, e.target.value)}
                                placeholder="Ex: 5,50"
                                ref={inputRefs.gasPrice}
                            />
                        </InputGroup>
                        
                        {/* Preço Álcool */}
                        <InputGroup>
                            <Label htmlFor="alcPrice">Preço do Álcool (R$/Litro)</Label>
                            <Input
                                id="alcPrice"
                                type="text"
                                inputMode="decimal"
                                value={alcPrice}
                                onChange={(e) => handleInputChange(setAlcPrice, e.target.value)}
                                placeholder="Ex: 3,80"
                                ref={inputRefs.alcPrice}
                            />
                        </InputGroup>
                        
                        {/* Consumo Gasolina */}
                        <InputGroup>
                            <Label htmlFor="gasConsumption">Consumo Gasolina (Km/Litro)</Label>
                            <Input
                                id="gasConsumption"
                                type="text"
                                inputMode="decimal"
                                value={gasConsumption}
                                onChange={(e) => handleInputChange(setGasConsumption, e.target.value)}
                                placeholder="Ex: 12,5"
                                ref={inputRefs.gasConsumption}
                            />
                        </InputGroup>
                        
                        {/* Consumo Álcool */}
                        <InputGroup>
                            <Label htmlFor="alcConsumption">Consumo Álcool (Km/Litro)</Label>
                            <Input
                                id="alcConsumption"
                                type="text"
                                inputMode="decimal"
                                value={alcConsumption}
                                onChange={(e) => handleInputChange(setAlcConsumption, e.target.value)}
                                placeholder="Ex: 9,0"
                                ref={inputRefs.alcConsumption}
                            />
                        </InputGroup>
                        
                        <SubmitButton 
                            onClick={calculateFuel} 
                            disabled={!isFormValid}
                        >
                            Calcular Vantagem (Enter)
                        </SubmitButton>
                    </FormCard>
                    
                    {/* Resultado */}
                    {result && (
                        <ResultCard color={result.color}>
                            <h3 style={{ color: result.color }}>{result.decision}</h3>
                            <p>Razão Custo-Eficiência:</p>
                            <ResultValue>{result.ratio}</ResultValue>
                            <Tip>{result.tip}</Tip>
                        </ResultCard>
                    )}
                </ToolHub>
                
                {/* Lado Direito: Histórico */}
                <HistoryPanel />
            </ToolContainer>
        </div>
    );
}