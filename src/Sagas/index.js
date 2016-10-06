import "babel-polyfill"
import { fork } from 'redux-saga/effects'
import { watchRequestImages } from './ImageSaga'
import { watchStartup } from './Startup'

// start the daemons
export default function * root () {
  yield fork(watchStartup)
  yield fork(watchRequestImages)
}
