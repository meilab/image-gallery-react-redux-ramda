import "babel-polyfill"
import { take, put, call } from 'redux-saga/effects'
import Types from '../actions/Types'
import Actions from '../actions/Creators'
import { fetchImages } from '../api/flickr'
import R from 'ramda'


export function * requestImages(keyWord) {
  const images = yield call(fetchImages, keyWord);
  const selectedImage = images[0];

  yield put(Actions.receiveImage(images));
  yield put(Actions.selectImage(selectedImage))
}

export function * watchRequestImages() {
  while (true) {
    const action = yield take(Types.IMAGE_REQUEST);
    const { keyWord } = action

    yield call(requestImages, keyWord);
  }
}