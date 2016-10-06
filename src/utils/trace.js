import R from 'ramda'

export default trace = R.curry(function(tag, x) {
  console.log(tag, x)
  return x
});