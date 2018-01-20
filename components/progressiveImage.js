import { Component } from 'react'
import PropTypes from 'prop-types'

class ProgressiveImage extends Component {
    state = {
        currentImage: this.props.placeholder,
        loading: true
    }

    componentDidMount() {
        this.fetchImage(this.props.image)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.image !== this.props.image) {
            this.setState(
                { currentImage: nextProps.placeholder, loading: true },
                () => {
                    this.fetchImage(nextProps.image)
                }
            )
        }
    }

    componentWillUnmount() {
        if (this.loadingImage) {
            this.loadingImage.onload = null
        }
    }

    fetchImage = src => {
        if (this.loadingImage) {
            this.loadingImage.onload = null
        }

        const image = new Image()
        image.onload = () =>
            this.setState({
                currentImage: this.loadingImage.src,
                loading: false
            })
        image.src = src
        this.loadingImage = image
    }

    style = loading => {
        const { style } = this.props
        const { filter } = style
        return {
            transition: '0.5s filter linear',
            ...style,
            filter: `${filter || ''} ${loading ? 'blur(50px)' : ''}`
        }
    }

    render() {
        const { currentImage, loading } = this.state
        const { alt } = this.props
        return <img style={this.style(loading)} src={currentImage} alt={alt} />
    }
}

ProgressiveImage.propTypes = {
    placeholder: PropTypes.string.isRequired,
    image: PropTypes.string,
    alt: PropTypes.string,
    style: PropTypes.object
}

ProgressiveImage.defaultProps = {
    alt: '',
    style: {}
}

export default ProgressiveImage
