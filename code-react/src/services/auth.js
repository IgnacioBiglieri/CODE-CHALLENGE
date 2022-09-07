const process = async (link,data,token) => {
    if (!token)
    {
        token='0'
    }
    let body = {
        method: "POST",
        headers: {
          "Content-Type": "text/javascript",
          'Authorization': `Bearer ${token}`,
        },
        mode: "cors",
      };
      if (data !== "") {
        body = { ...body, body: JSON.stringify(data) };
      }
      return await fetch(`http://127.0.0.1:8000/` + link, { ...body })
        .then(res => res.json())
        .catch(error => console.error("Error:", error));
}

module.exports = {
    loginProcess: async (data) => {
        return await process('admins/login', data);
    },
    listProcess: async (token) => {
        let data = '';
        return await process('users/list', data, token);
    },
    registerProcess: async (data) => {
        return await process('users/register', data);
    }
}