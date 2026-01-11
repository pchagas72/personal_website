import { useState } from 'react';

function SectionTitle(props: any){
    // Mapeamento simples para o display inicial (Decimal)
    const getDecimal = (binary: string) => {
        switch(binary){
            case "001": return "01";
            case "010": return "02";
            case "011": return "03";
            case "100": return "04";
            default: return binary;
        }
    }

    const [isBinary, setIsBinary] = useState(false);
    
    // O valor original (props.SectionNumber) é o binário "001", "010" vindo do pai.
    const displayValue = isBinary ? props.SectionNumber : getDecimal(props.SectionNumber);

    return (
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span 
                className='title_numbering'
                onClick={() => setIsBinary(!isBinary)}
                title="Click to toggle Binary/Decimal"
            >
                {displayValue}
            </span> 
            <span style={{color: 'var(--text-highlight)', fontFamily: 'Rajdhani', textTransform: 'uppercase'}}>
                // {props.SectionName}
            </span>
        </h2>
    )
}

export default SectionTitle
