import Axios from "axios";

const API_KEY = `AIzaSyCP8bLTXq8d4o175cLxorMRVCTOB65588s`

const URL = `https://www.googleapis.com/books/v1`

const getBooks = async query => {
  return await Axios
    .get(`${URL + query}&key=${API_KEY}`)
    .then(response => {
      console.log(response)
    })
    .catch(error => console.log(error))
}

const HttpRequests = {
  getBooks
}

export default HttpRequests