
const fetchSinToken = (endpoint, data, method = "GET") => {

    const url = `${process.env.REACT_APP_API_URL}${endpoint}`;

    console.log(url)
    if (method === "GET") {
        return fetch(url);
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
    }
}


const fetchConToken = (endpoint, data, method = "GET") => {

    const url = `${process.env.REACT_APP_API_URL}${endpoint}`;

    console.log(url)
    if (method === "GET") {
        return fetch(url, {
            headers: {
                'x-token': localStorage.getItem('token')
            }
        });
    } else {
        return fetch(url, {
            method,
            headers: {
                'x-token': localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
    }
}


export {
    fetchSinToken,
    fetchConToken
}