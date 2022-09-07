import axios from 'axios'

const process = async (link,data,token) => {
    if (!token)
    {
        token='0'
    }
    let config = {
        /* method: "POST", */
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`,
        },
        mode: "cors",
      };
      console.log(data)
      /* if (data !== "") {
        body = { ...body, body: data };
      } */
       try {
        return await axios.post(`http://127.0.0.1:8000/` + link, data, config)
      }
      catch(error){
        console.error("Error:", error)
      }
      /* return await fetch(`http://127.0.0.1:8000/` + link, { ...body })
        .then(res => res.json())
        .catch(error => console.error("Error:", error)); */
} 
export const listProcess = async (token) => {
  let data = '';
  return await process('users/list', data, token);
}

export const loginProcess = async (data) => {
  return await process('admins/login', data);
}

