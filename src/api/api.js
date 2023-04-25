import axios from "axios";

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

const token = localStorage.getItem("token");
if(token){
    headers['Authorization'] = `Bearer ${token}`;
}

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000' ,
    headers,
});



export default api;