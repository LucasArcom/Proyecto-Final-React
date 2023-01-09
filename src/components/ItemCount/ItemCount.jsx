import {useState} from 'react';

const ItemCount = () => {
    const [numero, setNumero] = useState(0);
    const sumar = () => setNumero(numero+1);
    return (
        <div>
            <button onClick = {() => sumar()}>+</button>
            {numero}
        </div>
    );
}

export default ItemCount;
