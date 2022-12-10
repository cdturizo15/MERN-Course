import PropTypes from 'prop-types';
import { useState } from 'react';



const CounterApp = ({ value }) => {
    const handleSum = () => setCounter( counter + 1 )
    const handleReset = () => setCounter( value )
    const handleSubstract = () => setCounter ( counter - 1 )
    const [ counter, setCounter ] = useState( value );
    return (
    <div>
        <h1>Contador</h1>
        <h2 data-testid='value'>Valor: { counter }</h2>
        <button onClick={ handleSum }>+1</button>
        <button onClick={ handleSubstract }>-1</button>
        <button onClick={ handleReset }>Reset</button>
    </div>)
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;