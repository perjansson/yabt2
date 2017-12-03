import { Component } from 'react'
import { string, object } from 'prop-types'

class ProgressiveImage extends Component {
  static propTypes = {
    placeholder: string.isRequired,
    image: string.isRequired,
    alt: string,
    style: object,
  }

  static defaultProps = {
    alt: '',
    style: {},
  }

  state = {
    currentImage: this.props.placeholder,
    loading: true,
  }

  componentDidMount() {
    this.fetchImage(this.props.image)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.image !== this.props.image) {
      this.setState({ currentImage: nextProps.placeholder, loading: true }, () => {
        this.fetchImage(nextProps.image)
      })
    }
  }

  componentWillUnmount() {
    if (this.loadingImage) {
      this.loadingImage.onload = null
    }
  }

  onLoad = () => {
    this.setState({
      currentImage: this.loadingImage.src,
      loading: false,
    })
  }

  fetchImage = (src) => {
    if (this.loadingImage) {
      this.loadingImage.onload = null
    }
    const image = new Image()
    image.onload = this.onLoad
    image.onerror = this.onError
    image.src = src
    this.loadingImage = image
  }

  style = (loading) => {
    const { style } = this.props
    const { filter } = style
    return {
      transition: '0.5s filter linear',
      ...style,
      filter: `${filter || ''} ${loading ? 'blur(50px)' : ''}`,
    }
  }

  render() {
    const { currentImage, loading } = this.state
    const { alt } = this.props
    return <img style={this.style(loading)} className="burger-image" src={currentImage} alt={alt} />
  }
}

export default ProgressiveImage
