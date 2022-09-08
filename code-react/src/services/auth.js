import axios from 'axios'

const process = async (metodo,link,data,token) => {
    if (!token)
    {
        token='0'
    }
    let config = {
        method: metodo,
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`,
        },
        mode: "cors",
      };

      if (data !== "") {
        config = { ...config, body: JSON.stringify(data) };
      }

      return await fetch(`http://127.0.0.1:8000/` + link, { ...config })
        .then(res => res.json())
        .catch(error => console.error("Error:", error));
} 
export const listProcess = async (token) => {
  let data = '';
  return await process('GET','users/list', data, token);
}

export const loginProcess = async (data) => {
  return await process('POST','admins/login', data);
}

