import { Component } from 'react'
import { string, object } from 'prop-types'

class ProgressiveImage extends Component {
  static propTypes = {
    placeholder: string.isRequired,
    src: string.isRequired,
    alt: string,
    style: object,
  }

  static defaultProps = {
    alt: '',
    style: {},
  }

  state = {
    image: this.props.placeholder,
    loading: true,
  }

  componentDidMount() {
    this.fetchImage(this.props.src)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.src !== this.props.src) {
      this.setState({ image: nextProps.placeholder, loading: true }, () => {
        this.fetchImage(nextProps.src)
      })
    }
  }

  componentWillUnmount() {
    if (this.image) {
      this.image.onload = null
    }
  }

  onLoad = () => {
    this.setState({
      image: this.image.src,
      loading: false,
    })
  }

  fetchImage = (src) => {
    if (this.image) {
      this.image.onload = null
    }
    const image = new Image()
    this.image = image
    image.onload = this.onLoad
    image.onerror = this.onError
    image.src = src
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
    const { image, loading } = this.state
    const { alt } = this.props
    return <img style={this.style(loading)} className="burger-image" src={image} alt={alt} />
  }
}

export default ProgressiveImage
