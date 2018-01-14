import { PureComponent } from 'react'
import { number } from 'prop-types'

class Map extends PureComponent {
  render() {
    const { lat, long } = this.props
    return (
      <div>
        {lat}
        {long}
      </div>
    )
  }
}

Map.propTypes = {
  lat: number.isRequired,
  long: number.isRequired,
}

export default Map
