import Types from './Types'

const selectImage = image => 
  ({ type: Types.IMAGE_SELECT, image })
  
const requestImage = (keyWord) =>
  ({ type: Types.IMAGE_REQUEST, keyWord })
  
const receiveImage = images =>
  ({ type: Types.IMAGE_RECEIVE, images})

const receiveImageFailure = () => ({ type: Types.IMAGE_FAILURE})

const startup = () => ({ type: Types.STARTUP })

export default{
  selectImage,
  requestImage,
  receiveImage,
  receiveImageFailure,
  
  startup
}