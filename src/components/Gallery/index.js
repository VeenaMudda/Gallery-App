// Write your code here.
import {Component} from 'react'

import ThumbnailItem from '../ThumbnailItem'

import './index.css'

class Gallery extends Component {
  state = {
    selectedThumbnailId: 0,
  }

  updateSelectedImageUrl = id => {
    this.setState({
      selectedThumbnailId: id,
    })
  }

  renderSelectedImage = () => {
    const {photosData} = this.props
    const {selectedThumbnailId} = this.state
    const {imageUrl, imageAltText} = photosData[selectedThumbnailId]

    return <img src={imageUrl} className="selected-image" alt={imageAltText} />
  }

  render() {
    const {photosData} = this.props
    const {selectedThumbnailId} = this.state

    return (
      <div className="app-container">
        <div className="gallery-container">
          {this.renderSelectedImage()}
          <ThumbnailItem
            photosData={photosData}
            selectedThumbnailId={selectedThumbnailId}
            onClickThumbnailImage={this.updateSelectedImageUrl}
          />
        </div>
      </div>
    )
  }
}

export default Gallery
