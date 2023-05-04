import axios from "axios";
const Base_Url = "https://fakestoreapi.com/"
const ApiService = async (url) => {
  const {data} = await axios.get(`${Base_Url}${url}`)
  return data;
}

export default ApiService;