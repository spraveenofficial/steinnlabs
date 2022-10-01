import axios from "axios";


const onRequest = (config) => {
    console.info(`[request] [${JSON.stringify(config)}]`);
    return config;
}

const onRequestError = (error) => {
    // console.error(`[request error] [${JSON.stringify(error)}]`);
    return Promise.reject(error);
}

const onResponse = (response) => {
    // console.info(`[response] [${JSON.stringify(response)}]`);
    return response;
}

const onResponseError = (error) => {
    // console.error(`[response error] [${JSON.stringify(error)}]`);
    return Promise.reject(error);
}

export function setupInterceptorsTo(axiosInstance) {
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);
    return axiosInstance;
}

const instance = setupInterceptorsTo(axios.create({
    baseURL: "https://api.spotify.com/v1/",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
}))


instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}
)

export default instance;