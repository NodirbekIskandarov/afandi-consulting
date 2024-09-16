import axios from "axios";

export const getRequest = (url) => {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            // headers: headerConfig(), // baseUrl da interceptors orqali auth qilinmaganda ishlatiladi
            // "Accept-Language": 
        }).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        })
    })
}


export const postRequest = (url, data) => {
    return new Promise((resolve, reject) => {
        axios.post(
            url,
            data,
            {
                // headers: headerConfig(), // baseUrl da interceptors orqali auth qilinmaganda ishlatiladi
            }
        ).then((response) => {
            resolve(response)
        })
        .catch((error) => {
            reject(error)
        });
    })
}