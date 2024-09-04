import { useState } from 'react';

function SectionTitle(props: any){
   const [binNumber, setBinNumber] = useState(props.SectionNumber)
    function changeBinNumber(number: string){
        switch(number){
            case "001": {setBinNumber("1"); break;};
            case "1": {setBinNumber("001"); break;};
            case "010": {setBinNumber("2"); break;};
            case "2": {setBinNumber("010"); break;};
        }
    }

    return (
        <>
            <h2><span className='title_numbering'
                onClick={() => changeBinNumber(binNumber)}>{binNumber}</span> - {props.SectionName}</h2>
        </>
    )
}

export default SectionTitle
