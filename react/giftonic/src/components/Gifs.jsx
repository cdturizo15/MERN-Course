import PropTypes from 'prop-types'
export const Gifs = ({title, url}) => (
    <div className='card' >
            <img className='img-card' src={url} />            
    </div>
)

Gifs.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}