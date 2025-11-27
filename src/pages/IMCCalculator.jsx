// src/pages/IMCCalculator.jsx
import React, { useState, useCallback, useMemo, useEffect } from 'react'; // Adicionado useEffect
import styled, { keyframes } from 'styled-components';
import { useLocalStorage } from '../hooks/useLocalStorage';

// --- TABELA DE CLASSIFICAÇÃO ---
const IMC_CLASSIFICATIONS = [
    { max: 18.5, classification: 'Abaixo do peso', colorKey: 'warning' },
    { max: 24.9, classification: 'Peso normal', colorKey: 'success' },
    { max: 29.9, classification: 'Sobrepeso', colorKey: 'warning' },
    { max: 34.9, classification: 'Obesidade Grau I', colorKey: 'error' },
    { max: 39.9, classification: 'Obesidade Grau II', colorKey: 'critical' },
    { max: Infinity, classification: 'Obesidade Grau III (Mórbida)', colorKey: 'critical' },
];

const getClassification = (imc) => {
    if (isNaN(imc) || imc <= 0) {
        return { classification: 'Aguardando dados', colorKey: 'textSecondary' };
    }
    return IMC_CLASSIFICATIONS.find(item => imc < item.max);
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
    input {
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

// --- ESTILOS ESPECÍFICOS DO IMC ---

const ResultCard = styled(ToolCard)`
    border: 1px solid ${props => props.theme.primary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-color: ${props => props.theme[props.color] || props.theme.border};
`;
const pulse = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.05);
    }
    100% { transform: scale(1); }
`;

const ResultValue = styled.p`
    font-size: 2.5em;
    font-weight: 700;
    margin: 10px 0 20px;
    color: ${props => props.theme[props.color] || props.theme.textPrimary};
    animation: ${props => props.animate ? pulse : 'none'} 0.5s ease-in-out;
`;

const ResultLabel = styled.p`
    color: ${props => props.theme.textSecondary};
    font-weight: 500;
    margin-top: 15px;
`;
const TableCard = styled(BaseCard)`
    flex: 1 1 100%;
    min-width: unset;
    padding: 0;
    overflow: hidden;
    table {
        width: 100%;
        border-collapse: collapse;
        th, td {
            padding: 12px 20px;
            text-align: left;
            border-bottom: 1px solid ${props => props.theme.border};
        }
        th {
            background-color: ${props => props.theme.bgInput};
            font-weight: 600;
        }
        tr:last-child td {
            border-bottom: none;
        }
    }
`;

const TableRow = styled.tr`
    background-color: ${props => props.isactive ? props.theme.historyBg : 'transparent'};
    color: ${props => props.isactive ? props.theme[props.color] : props.theme.textPrimary};
    font-weight: ${props => props.isactive ? 600 : 400};
    border-left: 5px solid ${props => props.theme[props.color] || 'transparent'};
    
    td:last-child {
        color: ${props => props.theme[props.color] ||
            props.theme.textSecondary};
        font-weight: ${props => props.isactive ? 700 : 500};
    }
`;
// --- COMPONENTE FILHO: Tabela ---

const ClassificationTable = ({ activeImc }) => {
    return (
        <TableCard>
            <table>
                <thead>
                    <tr>
                        <th>IMC (kg/m²)</th>
                        <th>Classificação</th>
                    </tr>
                </thead>
                <tbody>
                    <TableRow isactive={activeImc < 18.5} color={IMC_CLASSIFICATIONS[0].colorKey}>
                        <td>Menor que 18,5</td>
                        <td>{IMC_CLASSIFICATIONS[0].classification}</td>
                    </TableRow>
                    <TableRow isactive={activeImc >= 18.5 && activeImc < 24.9} color={IMC_CLASSIFICATIONS[1].colorKey}>
                        <td>18,5 a 24,9</td>
                        <td>{IMC_CLASSIFICATIONS[1].classification}</td>
                    </TableRow>
                    <TableRow isactive={activeImc >= 25.0 && activeImc < 29.9} color={IMC_CLASSIFICATIONS[2].colorKey}>
                        <td>25,0 a 29,9</td>
                        <td>{IMC_CLASSIFICATIONS[2].classification}</td>
                    </TableRow>
                    <TableRow isactive={activeImc >= 30.0 && activeImc < 34.9} color={IMC_CLASSIFICATIONS[3].colorKey}>
                        <td>30,0 a 34,9</td>
                        <td>{IMC_CLASSIFICATIONS[3].classification}</td>
                    </TableRow>
                    <TableRow isactive={activeImc >= 35.0 && activeImc < 39.9} color={IMC_CLASSIFICATIONS[4].colorKey}>
                        <td>35,0 a 39,9</td>
                        <td>{IMC_CLASSIFICATIONS[4].classification}</td>
                    </TableRow>
                    <TableRow isactive={activeImc >= 40.0} color={IMC_CLASSIFICATIONS[5].colorKey}>
                        <td>Maior que 40,0</td>
                        <td>{IMC_CLASSIFICATIONS[5].classification}</td>
                    </TableRow>
                </tbody>
            </table>
        </TableCard>
    );
};


// --- COMPONENTE PRINCIPAL ---

export default function IMCCalculator() {
    const [weight, setWeight] = useState('');
    // Peso em kg
    const [height, setHeight] = useState('');
    // Altura em metros
    const [imcResult, setImcResult] = useState(null);
    const [animate, setAnimate] = useState(false);
    const [history, setHistory] = useLocalStorage('history-imc', []);

    const currentClassification = useMemo(() => getClassification(imcResult), [imcResult]);
    const calculateIMC = useCallback(() => {
        const w = parseFloat(String(weight).replace(',', '.'));
        const h = parseFloat(String(height).replace(',', '.'));

        if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
            alert('Por favor, insira valores válidos (Peso em kg, Altura em metros).');
            setImcResult(null);
            return;
        }

        const imc = w / (h * h);
        const imcFormatted = imc.toFixed(2);
        
        setImcResult(imcFormatted);
        setAnimate(true);
        setTimeout(() => setAnimate(false), 500);

        // Adiciona ao histórico
        const classification = getClassification(imc).classification;
        const newHistoryItem = {
            weight: w,
            height: h,
            imc: imcFormatted,
            classification: classification,
            date: new Date().toLocaleTimeString('pt-BR'),
        };
        setHistory(prevHistory => [newHistoryItem, ...prevHistory.slice(0, 49)]);
    }, [weight, height, setHistory]);

    // --- NOVO BLOCO ADICIONADO PARA SUPORTE AO ENTER (IMPERATIVO) ---
    useEffect(() => {
        const handleKeyDown = (event) => {
            // Verifica se a tecla pressionada é 'Enter'
            if (event.key === 'Enter') {
                // Previne a ação padrão (como submeter um formulário)
                event.preventDefault(); 
                // Chama a função de cálculo
                calculateIMC();
            }
        };

        // Adiciona o listener ao objeto global window
        window.addEventListener('keydown', handleKeyDown);

        // Função de limpeza: remove o listener ao desmontar o componente
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [calculateIMC]); 
    // FIM DO NOVO BLOCO
    
    // Formata o histórico para exibição
    const HistoryPanel = () => (
        <HistoryPanelStyled>
            <h3>Histórico de Cálculos</h3>
            <div className="history-list">
                {history.length === 0 ? (
                    <p style={{color: 'inherit'}}>Nenhum cálculo registrado.</p>
                ) : (
                    history.map((item, index) => (
                        <HistoryItem key={index} style={{ borderLeftColor: getClassification(parseFloat(item.imc)).colorKey ? ({theme}) => theme[getClassification(parseFloat(item.imc)).colorKey] : 'inherit' }}>
                            <small>{item.date}</small>
                            <p style={{margin: '5px 0'}}>
                                IMC: <strong>{item.imc}</strong> - {item.classification}
                            </p>
                            <small>({item.weight} kg / {item.height} m)</small>
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
        <div id="imc" style={{display: 'block'}}>
            <h2>⚖️ Calculadora de Índice de Massa Corporal (IMC)</h2>
            <ToolContainer>
                <ToolHub>
                    {/* CARD INPUTS */}
                    <ToolCard>
                        <h3>Dados Pessoais</h3>
                        <FormGroup>
                            <label htmlFor="peso">Peso (kg):</label>
                            <input 
                                id="peso"
                                type="number" 
                                placeholder="Ex: 75.5" 
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                min="1"
                                // O GlobalStyles.js garante a cor do texto
                            />
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="altura">Altura (m):</label>
                            <input 
                                id="altura"
                                type="number" 
                                placeholder="Ex: 1.75" 
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                min="0.1"
                                step="0.01"
                                // O GlobalStyles.js garante a cor do texto
                            />
                        </FormGroup>
                        <SubmitButton onClick={calculateIMC} disabled={!weight || !height}>
                            Calcular IMC (Enter)
                        </SubmitButton>
                    </ToolCard>
                    
                    {/* CARD RESULTADO */}
                    <ResultCard color={currentClassification.colorKey}>
                        <h3>Seu Resultado</h3>
                        
                        <ResultLabel>IMC Calculado:</ResultLabel>
                        <ResultValue animate={animate} color={currentClassification.colorKey}>
                            {imcResult || '0.00'}
                        </ResultValue>
                        
                        <ResultLabel>Classificação:</ResultLabel>
                        <p style={{ fontWeight: 600, fontSize: '1.2em' }}>
                            {currentClassification.classification}
                        </p>
                    </ResultCard>

                    {/* TABELA DE CLASSIFICAÇÃO */}
                    <ClassificationTable activeImc={imcResult} />
                </ToolHub>
                
                <HistoryPanel />
            </ToolContainer>
        </div>
    );
}