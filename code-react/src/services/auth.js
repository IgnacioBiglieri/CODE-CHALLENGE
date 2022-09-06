const process = async (link,data,token) => {
    if (!token)
    {
        token='0'
    }
    let body = {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
    }
    if (data!=='')
    {
        body={...body,body: JSON.stringify(data)}
    }
    return await fetch(`http://127.0.0.1:8000/admins/login`, {...body}).then(res => res.json())
      .catch(error => console.error('Error:', error))
}

module.exports = {
    loginProcess: async (data) => {
        return await process('login', data);
    },
    listProcess: async (token) => {
        let data = '';
        return await process('list', data, token);
    },
    registerProcess: async (data) => {
        return await process('register', data);
    }
}