import Types from '../actions/Types'
import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import R from 'ramda'

export const INITIAL_STATE = Immutable({
  images:null,
  selectedImage:null,
  fetching: null,
  keyWord:null,
  error: null
})

const requestImage = (state, action) =>
  state.merge({
    fetching:true,
    keyWord: action.keyWord
  })

const receiveImage = (state, action) =>
  state.merge({
    fetching: false,
    images: action.images,
    error: null
  })

const failure = (state, action) =>
  state.merge({
    fetching: false,
    error:true,
    images: null
  })

const selectImage = (state, action) =>
  state.merge({
    selectedImage:action.image
  })

const ACTION_HANDLERS = {
  [Types.IMAGE_REQUEST]: requestImage,
  [Types.IMAGE_SELECT]: selectImage,
  [Types.IMAGE_RECEIVE]: receiveImage,
  [Types.IMAGE_FAILURE]: failure
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
