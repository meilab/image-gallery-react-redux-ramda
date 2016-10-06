import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Actions from '../actions/Creators'
import R from 'ramda'

class Gallery extends Component {
  renderGallery( images, selectedImage, selectImage ) {
    return (
      <div className="image-gallery">
        <div className="gallery-image">
          <img src={selectedImage}/>
        </div>
        <div className="image-scroller">
          {
            images.map((image, index) => (
              <div key = {index}
                onClick={() => selectImage(image)}
              >
                <img src={image}/>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
  render() {
    const { images, selectedImage, requestImage, selectImage } = this.props;

    return (images ? this.renderGallery(images, selectedImage, selectImage): null
    )
  }
}

const mapStateToProps = R.pick(['images','selectedImage'])

const mapDispatchToProps = dispatch => {
  return {
    requestImage: keyWord => dispatch(Actions.requestImage(keyWord)),
    selectImage: image => dispatch(Actions.selectImage(image))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)