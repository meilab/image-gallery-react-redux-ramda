import R from 'ramda'

const trace = R.curry(function(tag,x ) {
  console.log(tag, x);
  
  return x;
})

const API_KEY = 'a46a979f39c49975dbdd23b378e6d3d5';
const API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${API_KEY}&format=json&nojsoncallback=1&per_page=5`;

const url = keyWord => {
    return 'https://api.flickr.com/services/feeds/photos_public.gne?tags=' + 
      keyWord + '&format=json&nojsoncallback=1';
}

// need to install below chrome extension to enable CORS
//https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en-US
//

const imgUrl = ({farm, server, id, secret}) => `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`

export const fetchImages = keyWord => {
  const requestUrl = url(keyWord)
  
  const images = fetch(API_ENDPOINT)
    .then((resp)=> resp.json())
    .then( R.compose(R.map(imgUrl), R.path(['photos','photo'])))

   return images
}
