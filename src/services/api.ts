import axios from "axios";

const ipLucio = '192.168.15.14'
const ipLucioP = '192.168.106.229'
const ipJulio = '192.168.0.46'
const ipKarol = '192.168.15.145'

const baseUrl = `http://${ipLucio}:8000/`;
const api = axios.create({
	baseURL: baseUrl
})

export default api;
