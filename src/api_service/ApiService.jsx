import axios from "axios";
const Base_Url = "https://market-api-xr09.onrender.com/"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWE5ZWIzNjgwZjc4OTNhYTlkMGMyNjUiLCJpYXQiOjE3MDY0OTg4OTQsImV4cCI6MTcwNjU0MjA5NH0.RSb8d3H1ao6ieyfSDQ_8FcMmjPH9y70uAtWPctMCgZ0"
const ApiService = async (url) => {
  const {data} = await axios.get(`${Base_Url}${url}`,
    {headers: {
      'Authorization' :`Bearer ${token}`
      }}
  )
  return data;
}
export default ApiService;