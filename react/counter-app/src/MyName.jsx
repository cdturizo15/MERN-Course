import { Fragment } from "react"
import PropTypes from 'prop-types'

// No se pueden renderizar objetos
// Las promesas son objetos
const MyName = ({name, description}) => {

    return (
    <div>
        <h1 data-testid='test-title'>My name is {name}</h1>
        <p>Soy un {description}</p>
    </div>      
  )
}

MyName.propTypes = {
  description: PropTypes.string.isRequired
}

MyName.defaultProps = {
  description: 'No hay descripcion'
}
export default MyName