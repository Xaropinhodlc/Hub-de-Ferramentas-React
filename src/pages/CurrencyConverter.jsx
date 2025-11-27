// src/pages/CurrencyConverter.jsx
import React, { useState, useCallback, useMemo, useEffect } from 'react'; // Adicionado useEffect
import styled, { keyframes } from 'styled-components';
import { useLocalStorage } from '../hooks/useLocalStorage';

// --- FUNÇÕES DE UTILIDADE ---

const formatCurrency = (value) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
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
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: flex-start;
`;
const BaseCard = styled.div`
    background-color: ${props => props.theme.bgCard};
    color: ${props => props.theme.textPrimary};
    padding: 25px;
    border-radius: 8px;
    box-shadow: ${props => props.theme.shadow};
`;

const ToolCard = styled(BaseCard)`
    flex: 1 1 45%; 
    min-width: 300px;
`;
const FormGroup = styled.div`
    margin-bottom: 20px;
    label {
        color: ${props => props.theme.textPrimary};
        display: block;
        font-weight: 500;
        margin-bottom: 5px;
    }
    input, select {
        margin-top: 5px;
    }
`;

const SubmitButton = styled.button`
    background-color: ${props => props.theme.primary};
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;
    font-weight: 600;
    width: 100%;
    transition: background-color 0.3s ease;
    margin-top: 10px;
    &:disabled {
        background-color: ${props => props.theme.textSecondary};
        cursor: not-allowed;
    }

    &:hover:not(:disabled) {
        background-color: ${props => props.theme.name === 'light' ?
            '#0056b3' : '#64b5f6'};
    }
    &.loading {
        background-color: ${props => props.theme.accent};
    }
`;

const ClearButton = styled(SubmitButton)`
    background-color: ${props => props.theme.textSecondary};
    margin-top: 20px;
    &:hover:not(:disabled) {
        background-color: ${props => props.theme.name === 'light' ? '#6c757d' : '#8d8d8d'};
    }
`;
const HistoryPanelStyled = styled(BaseCard)`
    flex: 1; 
    min-width: 280px;
    max-height: 500px;
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


// --- ESTILOS ESPECÍFICOS ---

const ResultCard = styled(ToolCard)`
    border: 1px solid ${props => props.theme.primary};
`;

const ResultLabel = styled.p`
    color: ${props => props.theme.textSecondary};
    font-weight: 500;
    margin-top: 15px;
`;
const pulse = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.03);
    }
    100% { transform: scale(1); }
`;

const ResultValue = styled.p`
    font-size: ${props => props.large ?
        '2.5em' : '1.3em'};
    font-weight: 700;
    margin: ${props => props.large ? '5px 0 0' : '5px 0'};
    color: ${props => props.primary ? props.theme.primary : props.theme.textPrimary};
    animation: ${props => props.animate ? pulse : 'none'} 0.5s ease-in-out;
`;
const InfoText = styled.p`
    font-size: 0.85em;
    color: ${props => props.theme.textSecondary};
    margin-top: 10px;
    text-align: center;
`;
// --- OPÇÕES DE MOEDA ---

const CURRENCY_OPTIONS = [
    { value: 'USD', label: 'Dólar Americano (USD)' },
    { value: 'EUR', label: 'Euro (EUR)' },
    { value: 'GBP', label: 'Libra Esterlina (GBP)' },
    { value: 'JPY', label: 'Iene Japonês (JPY)' },
    { value: 'CAD', label: 'Dólar Canadense (CAD)' },
    { value: 'ARS', label: 'Peso Argentino (ARS)' },
];
// --- COMPONENTE PRINCIPAL ---

export default function CurrencyConverter() {
    const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [resultAmount, setResultAmount] = useState('R$ 0,00');
    const [resultSource, setResultSource] = useState('0.00 USD');
    const [loading, setLoading] = useState(false);
    const [animate, setAnimate] = useState(false);
    const [history, setHistory] = useLocalStorage('history-moedas', []);
    
    const currencyLabel = useMemo(() => {
        return CURRENCY_OPTIONS.find(opt => opt.value === fromCurrency)?.label || fromCurrency;
    }, [fromCurrency]);
    
    const convertCurrency = useCallback(async () => {
        const value = parseFloat(String(amount).replace(',', '.'));
        
        if (isNaN(value) || value <= 0) {
            alert('Por favor, insira um valor válido para conversão.');
            setResultAmount('R$ 0,00');
            setResultSource(`0.00 ${fromCurrency}`);
            return;
        }

        setLoading(true);

        try {
            // Lógica de chamada à API AwesomeAPI
            const response = await fetch(`https://economia.awesomeapi.com.br/last/${fromCurrency}-BRL`);
            
            if (!response.ok) {
                throw new Error('Falha na requisição da cotação');
            }

            const data = await response.json();
            const key = `${fromCurrency}BRL`;
            const taxa = parseFloat(data[key].bid); // 'bid' é o valor de compra
            
            if (isNaN(taxa) || taxa === 0) {
                throw new Error('Taxa de câmbio inválida recebida.');
            }

            const valorBRL = value * taxa;
            const valorBRLFormatted = formatCurrency(valorBRL);

            // EXIBIÇÃO
            setResultSource(`${value.toFixed(2).toLocaleString('pt-BR')} ${fromCurrency}`);
            setResultAmount(valorBRLFormatted);
            setAnimate(true);
            setTimeout(() => setAnimate(false), 500);

            // HISTÓRICO
            const newHistoryItem = {
                amount: value.toFixed(2),
                currency: fromCurrency,
                result: valorBRLFormatted,
                rate: taxa.toFixed(4),
                date: new Date().toLocaleTimeString('pt-BR'),
            };
            setHistory(prevHistory => [newHistoryItem, ...prevHistory.slice(0, 49)]);

        } catch (error) {
            console.error("Erro ao buscar cotação:", error);
            alert("Não foi possível obter a cotação atualizada. Verifique sua internet ou tente outra moeda.");
            setResultAmount('R$ 0,00');
        } finally {
            setLoading(false);
        }
    }, [amount, fromCurrency, setHistory]);

    // --- CÓDIGO ADICIONADO PARA SUPORTE AO ENTER ---
    useEffect(() => {
        const handleKeyDown = (event) => {
            // Verifica se a tecla pressionada é 'Enter' (ou 'Return')
            if (event.key === 'Enter') {
                // Previne a ação padrão (como submeter um formulário)
                event.preventDefault(); 
                convertCurrency(); // Chama a função de conversão
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        // Limpa o listener ao desmontar o componente
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [convertCurrency]); 
    // FIM DO CÓDIGO ADICIONADO

    const HistoryPanel = () => (
        <HistoryPanelStyled>
            <h3>Histórico de Câmbio</h3>
            <div className="history-list">
                {history.length === 0 ? (
                    <p style={{color: 'inherit'}}>Nenhum cálculo registrado.</p>
                ) : (
                    history.map((item, index) => (
                        <HistoryItem key={index}> 
                            <small>{item.date} - Taxa: {item.rate}</small>
                            <p style={{margin: '5px 0'}}>
                                <strong>{item.amount} {item.currency}</strong> = {item.result}
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
        <div id="moedas" style={{display: 'block'}}>
            <h2>💵 Conversor de Moedas</h2>
            <ToolContainer>
                <ToolHub>
                    {/* CARD INPUTS */}
                    <ToolCard>
                        <h3>Configurar Conversão</h3>
                        
                        <FormGroup>
                            <label htmlFor="moeda-valor">Valor a Converter:</label>
                            <input 
                                id="moeda-valor"
                                type="number" 
                                placeholder="Ex: 100.00" 
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                min="0.01"
                                // O GlobalStyles.js garante a cor do texto
                            />
                        </FormGroup>
                        
                        <FormGroup>
                            <label htmlFor="moeda-origem">Moeda de Origem:</label>
                            <select 
                                id="moeda-origem"
                                value={fromCurrency}
                                onChange={(e) => setFromCurrency(e.target.value)}
                                // O GlobalStyles.js garante a cor do texto
                            >
                                {CURRENCY_OPTIONS.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </FormGroup>

                        <SubmitButton 
                            onClick={convertCurrency} 
                            disabled={!amount || loading}
                            className={loading ? 'loading' : ''}
                        >
                            {loading ? 'Buscando...' : 'Buscar Cotação e Converter (Enter)'}
                        </SubmitButton>
                        
                        <InfoText>*Cotação atualizada em tempo real via AwesomeAPI.</InfoText>
                        
                    </ToolCard>
                    
                    {/* CARD RESULTADO */}
                    <ResultCard>
                        <h3>Resultado da Conversão</h3>
                        
                        <ResultLabel>Moeda de Origem:</ResultLabel>
                        <ResultValue>{resultSource}</ResultValue>
                        
                        <ResultLabel>Valor Convertido (BRL):</ResultLabel>
                        <ResultValue primary large animate={animate}>
                            {resultAmount}
                        </ResultValue>
                    </ResultCard>
                </ToolHub>
                
                <HistoryPanel />
            </ToolContainer>
        </div>
    );
}