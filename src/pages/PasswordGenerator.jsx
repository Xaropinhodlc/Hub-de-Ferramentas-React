// src/pages/PasswordGenerator.jsx
import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useLocalStorage } from '../hooks/useLocalStorage';

// --- DEFINIÇÕES E CONSTANTES ---
const CHARS = {
    LOWER: 'abcdefghijklmnopqrstuvwxyz',
    UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    NUMBERS: '0123456789',
    SYMBOLS: '!@#$%^&*()_+-=[]{}|;:",./<>?'
};

// --- ÍCONES ---
const CopyIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
);

// --- ESTILOS (MANTIDOS) ---

const ToolContainer = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    align-items: flex-start;
    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
    }
`;

const ToolHub = styled.div`
    flex: 3;
    max-width: 650px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;
`;

const StyledInput = styled.input`
    flex: 1;
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

// --- ESTILOS ESPECÍFICOS DO GERADOR (MANTIDOS) ---

const PasswordDisplayContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    width: 100%;

    ${StyledInput} {
        flex-grow: 1; 
        min-width: 0;
        font-family: monospace;
        font-size: 1.3em;
        text-align: left;
        overflow-x: auto;
        white-space: nowrap;
        user-select: all;
    }
`;

const CopyButton = styled.button`
    background: none;
    border: 1px solid ${props => props.theme.primary};
    color: ${props => props.theme.primary};
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    flex-shrink: 0;
    width: auto; 
    min-width: 100px;

    &:hover {
        background-color: ${props => props.theme.primary};
        color: ${props => props.theme.textOnPrimary || 'white'};
    }
`;

const OptionsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 15px;
    margin-top: 15px;
`;

const CheckboxGroup = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    padding: 8px;
    border-radius: 4px;
    background-color: ${props => props.theme.historyBg};
    
    input[type="checkbox"] {
        margin-right: 10px;
        appearance: none;
        width: 18px;
        height: 18px;
        border: 2px solid ${props => props.theme.primary};
        border-radius: 3px;
        position: relative;
        cursor: pointer;
        
        &:checked {
            background-color: ${props => props.theme.primary};
            &::after {
                content: '✓';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: ${props => props.theme.textOnPrimary || 'white'};
                font-size: 14px;
                font-weight: bold;
            }
        }
    }
    
    span {
        font-weight: 500;
        color: ${props => props.theme.textPrimary};
    }
`;

const LengthSlider = styled.input`
    width: 100%;
    margin-top: 10px;
    &[type=range] {
        -webkit-appearance: none;
        width: 100%;
        height: 8px;
        background: ${props => props.theme.border};
        border-radius: 5px;
        cursor: pointer;
        margin-top: 15px;
    }

    &[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: ${props => props.theme.primary};
        cursor: pointer;
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
    margin-top: 20px;
    
    &:hover:not(:disabled) {
        opacity: 0.9;
    }
    &:disabled {
        background-color: ${props => props.theme.textSecondary}70;
        cursor: not-allowed;
    }
`;

// --- ESTILOS DO HISTÓRICO (MANTIDOS) ---

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
        font-size: 0.8em;
    }
    .password-text {
        font-family: monospace;
        font-size: 1.1em;
        font-weight: bold;
        color: ${props => props.theme.textPrimary};
        margin-top: 5px;
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

export default function PasswordGenerator() {
    // Estados
    const [length, setLength] = useState(12);
    const [includeUpper, setIncludeUpper] = useState(true);
    const [includeLower, setIncludeLower] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(false);
    const [password, setPassword] = useState(''); // Estado inicial é vazio, não há senha pré-gerada.
    const [copied, setCopied] = useState(false);
    const [history, setHistory] = useLocalStorage('history-pass-gen', []);

    // Função de Geração (MANTIDA)
    const generatePassword = useCallback(() => {
        let characterPool = '';
        
        if (includeLower) characterPool += CHARS.LOWER;
        if (includeUpper) characterPool += CHARS.UPPER;
        if (includeNumbers) characterPool += CHARS.NUMBERS;
        if (includeSymbols) characterPool += CHARS.SYMBOLS;

        if (characterPool.length === 0) {
            setPassword('Selecione pelo menos uma opção.');
            return;
        }

        let generatedPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characterPool.length);
            generatedPassword += characterPool[randomIndex];
        }
        
        setPassword(generatedPassword);
        setCopied(false);
        
        // Adicionar ao Histórico (MANTIDO)
        const newHistoryItem = {
            password: generatedPassword,
            options: `Tam: ${length} | Maiúsculas: ${includeUpper ? 'Sim' : 'Não'} | Símbolos: ${includeSymbols ? 'Sim' : 'Não'}`,
            date: new Date().toLocaleTimeString('pt-BR'),
        };
        setHistory(prevHistory => [newHistoryItem, ...prevHistory.slice(0, 49)]);

    }, [length, includeUpper, includeLower, includeNumbers, includeSymbols, setHistory]);

    // O BLOCO QUE CAUSAVA O BUG FOI REMOVIDO!
    // NÃO HÁ MAIS:
    /* useEffect(() => {
        if (!password) { 
             generatePassword();
        }
    }, [password, generatePassword]); 
    */
    
    // Função de Copiar (MANTIDA)
    const handleCopy = () => {
        if (password && password !== 'Selecione pelo menos uma opção.') {
            navigator.clipboard.writeText(password);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };
    
    // Lógica do Teclado Físico (Enter) (MANTIDA)
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                generatePassword();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [generatePassword]);

    // Componente de Histórico (MANTIDO)
    const HistoryPanel = () => (
        <HistoryPanelStyled>
            <h3 style={{fontSize: '1.1em'}}>Histórico de Senhas</h3>
            <div className="history-list">
                {history.length === 0 ? (
                    <p style={{color: 'inherit'}}>Nenhuma senha gerada.</p>
                ) : (
                    history.map((item, index) => (
                        <HistoryItemStyled key={index}>
                            <small>{item.date}</small>
                            <p className="password-text">{item.password}</p>
                            <small>{item.options}</small>
                        </HistoryItemStyled>
                    ))
                )}
            </div>
            <ClearButton onClick={() => setHistory([])}>
                Limpar Histórico
            </ClearButton>
        </HistoryPanelStyled>
    );

    // Renderização do Formulário (MANTIDA)
    const renderForm = () => (
        <FormCard>
            {/* 1. VISOR DA SENHA */}
            <InputGroup>
                <Label>Senha Gerada:</Label>
                <PasswordDisplayContainer>
                    <StyledInput
                        type="text"
                        value={password}
                        readOnly
                        onClick={handleCopy}
                        title="Clique para copiar"
                        placeholder="Clique em 'Gerar Nova Senha' para começar"
                    />
                    <CopyButton onClick={handleCopy} title="Copiar senha">
                        {copied ? 'Copiado!' : <CopyIcon />}
                    </CopyButton>
                </PasswordDisplayContainer>
            </InputGroup>

            {/* 2. SLIDER DE COMPRIMENTO */}
            <InputGroup>
                <Label htmlFor="length">
                    Comprimento da Senha:
                    <span style={{ color: props => props.theme.primary, fontWeight: 'bold' }}>{length}</span>
                </Label>
                <LengthSlider
                    id="length"
                    type="range"
                    min="6"
                    max="40"
                    value={length}
                    onChange={(e) => setLength(parseInt(e.target.value))}
                />
            </InputGroup>

            {/* 3. OPÇÕES DE CARACTERES */}
            <h3 style={{ fontSize: '1em', color: props => props.theme.textPrimary, marginBottom: '0' }}>Incluir:</h3>
            <OptionsGrid>
                <CheckboxGroup onClick={() => setIncludeLower(p => !p)}>
                    <input 
                        type="checkbox" 
                        checked={includeLower}
                        onChange={() => {}}
                    />
                    <span>Letras Minúsculas (a-z)</span>
                </CheckboxGroup>
                
                <CheckboxGroup onClick={() => setIncludeUpper(p => !p)}>
                    <input 
                        type="checkbox" 
                        checked={includeUpper}
                        onChange={() => {}}
                    />
                    <span>Letras Maiúsculas (A-Z)</span>
                </CheckboxGroup>
                
                <CheckboxGroup onClick={() => setIncludeNumbers(p => !p)}>
                    <input 
                        type="checkbox" 
                        checked={includeNumbers}
                        onChange={() => {}}
                    />
                    <span>Números (0-9)</span>
                </CheckboxGroup>
                
                <CheckboxGroup onClick={() => setIncludeSymbols(p => !p)}>
                    <input 
                        type="checkbox" 
                        checked={includeSymbols}
                        onChange={() => {}}
                    />
                    <span>Símbolos (!@#$)</span>
                </CheckboxGroup>
            </OptionsGrid>
            
            <SubmitButton 
                onClick={generatePassword}
                disabled={!(includeLower || includeUpper || includeNumbers || includeSymbols)}
            >
                Gerar Nova Senha (Enter)
            </SubmitButton>
        </FormCard>
    );

    return (
        <div id="password-generator">
            <h2>🔐 Gerador de Senhas Seguras</h2>
            <ToolContainer>
                
                {/* Lado Esquerdo: Inputs e Resultados */}
                <ToolHub>
                    {renderForm()}
                </ToolHub>
                
                {/* Lado Direito: Histórico */}
                <HistoryPanel />
            </ToolContainer>
        </div>
    );
}