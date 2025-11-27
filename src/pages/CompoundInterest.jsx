// src/pages/CompoundInterestCalculator.jsx
import React, { useState, useCallback, useEffect } from 'react';
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
    gap: 18px;
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
const CurrencySymbol = styled.span`
    padding: 12px;
    border: 1px solid ${props => props.theme.border};
    border-right: none;
    border-radius: 6px 0 0 6px;
    background-color: ${props => props.theme.bgInput};
    color: ${props => props.theme.textSecondary};
    font-size: 1.1em;
`;
const StyledInput = styled.input`
    flex: 1;
    padding: 12px;
    border: 1px solid ${props => props.theme.border};
    border-radius: ${props => props.isCurrency ? '0 6px 6px 0' : '6px'};
    font-size: 1.1em;
    background-color: ${props => props.theme.bgInput};
    color: ${props => props.theme.textPrimary};
    transition: border-color 0.2s;
    text-align: right;
    
    &:focus {
        border-color: ${props => props.theme.primary};
        outline: none;
        box-shadow: 0 0 0 2px ${props => props.theme.primary}50;
        z-index: 1;
        /* Garante que o foco cubra a borda do span de moeda */
    }
`;
const PercentSymbol = styled(CurrencySymbol)`
    border-left: none;
    border-right: 1px solid ${props => props.theme.border};
    border-radius: 0 6px 6px 0;
`;

const StyledSelect = styled.select`
    flex: 0.5;
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
    margin-top: 10px;
    
    &:hover:not(:disabled) {
        opacity: 0.9;
    }
    &:disabled { // <--- ESTILO PARA QUANDO ESTIVER DESABILITADO
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
    .main-result {
        color: ${props => props.theme.primary};
    }
`;

// --- ESTILOS DO HISTÓRICO --- (Reutilizados)

const HistoryPanelStyled = styled(BaseCard)`
    flex: 1; 
    min-width: 280px;
    max-height: 600px;
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

export default function CompoundInterestCalculator() {
    // Estados
    const [principal, setPrincipal] = useState(''); // Capital Inicial
    const [rate, setRate] = useState(''); // Taxa de juros anual (%)
    const [years, setYears] = useState(''); // Período em anos
    const [monthlyContribution, setMonthlyContribution] = useState(''); // Aporte Mensal (Opcional)
    const [result, setResult] = useState(null);
    const [history, setHistory] = useLocalStorage('history-compound-interest', []);
    
    // Helper para formatação em moeda BRL
    const formatCurrency = (value) => {
        const num = parseFloat(value);
        if (isNaN(num)) return 'R$ 0,00';
        return num.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };
    const parseValue = (value) => parseFloat(String(value).replace(',', '.'));

    // Função Principal de Cálculo
    const calculateInterest = useCallback(() => {
        // As validações de vazio são feitas no botão, aqui validamos números.
        const P = parseValue(principal) || 0; // Principal
        const i_yearly = parseValue(rate) / 100; // Taxa de juros anual (decimal)
        const n_years = parseValue(years) || 0; // Período em anos
        const PMT = parseValue(monthlyContribution) || 0; // Aporte Mensal
        
        // Se as validações básicas no botão falharem, esta função nem é chamada.
        // Apenas para garantir que anos seja > 0 no cálculo, se o usuário burlar o min="1"
        if (n_years <= 0) {
            alert('O período de aplicação deve ser de pelo menos 1 ano.');
            setResult(null);
            return;
        }

        // Converter para períodos e taxas mensais
        const n_months = n_years * 12; // Número total de meses
        const i_monthly = i_yearly / 12; // Taxa de juros mensal (decimal)

        
        let finalAmount = 0;
        let totalInvested = P;

        // Montante (Futuro) do Principal: P * (1 + i)^n
        const principalFutureValue = P * Math.pow((1 + i_monthly), n_months);
        finalAmount += principalFutureValue;

        // Montante (Futuro) dos Aportes (Série de Pagamentos - Anuidade)
        if (PMT > 0 && i_monthly > 0) {
            // Formula para anuidade futura: PMT * [ ((1 + i)^n - 1) / i ]
            const contributionFutureValue = PMT * ((Math.pow((1 + i_monthly), n_months) - 1) / i_monthly);
            finalAmount += contributionFutureValue;
            totalInvested += PMT * n_months;
        } else if (PMT > 0 && i_monthly === 0) {
            // Caso especial: juros zero, apenas soma os aportes
            finalAmount += PMT * n_months;
            totalInvested += PMT * n_months;
        }
        
        // Juros Total = Montante Final - Total Investido (Principal + Aportes)
        const totalInterest = finalAmount - totalInvested;
        const resultData = {
            finalAmount: finalAmount,
            totalInvested: totalInvested,
            totalInterest: totalInterest,
            rate: parseValue(rate),
            years: n_years,
            contributions: PMT,
        };
        setResult(resultData);

        // 4. Adicionar ao Histórico
        const historyOperation = `Capital Inicial: ${formatCurrency(P)} | ${resultData.rate}% por ${resultData.years} anos`;
        const historyResult = `Montante Final: ${formatCurrency(finalAmount)} (Juros: ${formatCurrency(totalInterest)})`;
        const newHistoryItem = {
            operation: historyOperation,
            result: historyResult,
            date: new Date().toLocaleTimeString('pt-BR'),
        };
        setHistory(prevHistory => [newHistoryItem, ...prevHistory.slice(0, 49)]);

    }, [principal, rate, years, monthlyContribution, setHistory]);
    
    // Lógica do Teclado Físico (Enter)
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                // Verifica se os campos obrigatórios estão preenchidos antes de calcular
                if (principal && rate && years) {
                    calculateInterest();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [principal, rate, years, calculateInterest]); // Depende dos estados para atualizar a verificação
    
    // Componente de Histórico
    const HistoryPanel = () => (
        <HistoryPanelStyled>
            <h3 style={{fontSize: '1.1em'}}>Histórico de Juros</h3>
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
                <Label htmlFor="principal">Capital Inicial (R$):</Label>
                <InputRow>
                    <CurrencySymbol>R$</CurrencySymbol>
                    <StyledInput
                        id="principal"
                        type="number"
                        inputMode="decimal"
                        value={principal}
                        onChange={(e) => setPrincipal(e.target.value)}
                        placeholder="Ex: 10000"
                        min="0"
                        isCurrency
                    />
                </InputRow>
            </InputGroup>

            <InputGroup>
                <Label htmlFor="rate">Taxa de Juros Anual (%):</Label>
                <InputRow>
                    <StyledInput
                        id="rate"
                        type="number"
                        inputMode="decimal"
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                        placeholder="Ex: 12.0"
                        min="0"
                    />
                    <PercentSymbol>%</PercentSymbol>
                </InputRow>
            </InputGroup>
            
            <InputGroup>
                <Label htmlFor="years">Período de Aplicação (Anos):</Label>
                <StyledInput
                    id="years"
                    type="number"
                    inputMode="numeric"
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                    placeholder="Ex: 5"
                    min="1"
                />
            </InputGroup>
            
            <InputGroup>
                <Label htmlFor="monthlyContribution">Aporte Mensal (R$, Opcional):</Label>
                <InputRow>
                    <CurrencySymbol>R$</CurrencySymbol>
                    <StyledInput
                        id="monthlyContribution"
                        type="number"
                        inputMode="decimal"
                        value={monthlyContribution}
                        onChange={(e) => setMonthlyContribution(e.target.value)}
                        placeholder="Ex: 500"
                        min="0"
                        isCurrency
                    />
                </InputRow>
            </InputGroup>
            
            <SubmitButton 
                onClick={calculateInterest}
                // ADICIONADO: Desabilita se principal, rate OU years estiverem vazios
                disabled={!principal || !rate || !years}
            >
                Calcular Juros Compostos (Enter)
            </SubmitButton>
        </FormCard>
    );
    
    // Renderização dos Resultados
    const renderResults = () => (
        <ResultCard>
            <h3 style={{ fontSize: '1.2em', color: props => props.theme.textPrimary }}>
                Resultados Finais em {result.years} Anos
            </h3>
            
            <ResultItem>
                <span>Montante Final (Capital + Juros):</span>
                <p className="main-result">{formatCurrency(result.finalAmount)}</p>
            </ResultItem>
            
            <ResultItem>
                <span>Total de Juros Ganhos:</span>
                <p style={{ color: result.totalInterest > 0 ? '#2ecc71' : props => props.theme.textPrimary }}>
                    {formatCurrency(result.totalInterest)}
                </p>
            </ResultItem>

            <ResultItem>
                <span>Total Investido (Capital + Aportes):</span>
                <p>{formatCurrency(result.totalInvested)}</p>
            </ResultItem>
        </ResultCard>
    );
    
    return (
        <div id="compound-interest">
            <h2>📈 Calculadora de Juros Compostos</h2>
            <ToolContainer>
                
                {/* Lado Esquerdo: Inputs e Resultados */}
                <ToolHub>
                    {renderForm()}
                    
                    {result && renderResults()}

                    {!result && (
                        <p style={{ color: props => props.theme.textSecondary, textAlign: 'center', marginTop: '20px' }}>
                            Insira os dados do seu investimento para simular o crescimento.
                        </p>
                    )}
                </ToolHub>
                
                {/* Lado Direito: Histórico */}
                <HistoryPanel />
            </ToolContainer>
        </div>
    );
}