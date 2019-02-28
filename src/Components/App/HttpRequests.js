import Axios from "axios";

const API_KEY = `AIzaSyCP8bLTXq8d4o175cLxorMRVCTOB65588s`

const URL = `https://www.googleapis.com/books/v1/volumes?q=`

const getBooks = async query => {
  const constructedQueryURL = `${URL + query}&maxResults=15&key=${API_KEY}`
  return await Axios
    .get(constructedQueryURL)
    .then(response => response.data.items)
    .catch(error => error)
}

const HttpRequests = {
  getBooks
}

export default HttpRequests