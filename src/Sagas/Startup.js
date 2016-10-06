import "babel-polyfill"
import { take, put } from 'redux-saga/effects'
import Types from '../actions/Types'
import Actions from '../actions/Creators'

export function *watchStartup() {
  yield take(Types.STARTUP)
  
  yield put(Actions.requestImage('cat'))
}