import axios from "axios";
const API = {
    async createUser(data) {
        return await axios.post('http://127.0.0.1:8000/api/createUser', data, { headers: {'Access-Control-Allow-Origin': "*"}}).then(res => res)
    },
    async startSession(data) {
        return await axios.post('http://127.0.0.1:8000/api/startSession', data, { headers: {'Access-Control-Allow-Origin': "*"}}).then(res => res)
    },
    async getUser(data) {
        return await axios.post('http://127.0.0.1:8000/api/getUser', data, { headers: {'Access-Control-Allow-Origin': "*"}}).then(res => res)
    },
    async getAllMovies(data) {
        return await axios.post('http://127.0.0.1:8000/api/getAllMovies', data, { headers: {'Access-Control-Allow-Origin': "*"}}).then(res => res)
    },
    async getAllGenres(data) {
        return await axios.post('http://127.0.0.1:8000/api/getAllGenres', data, { headers: {'Access-Control-Allow-Origin': "*"}}).then(res => res)
    },
    async addToBasket(data) {
        return await axios.post('http://127.0.0.1:8000/api/addToBasket', data, { headers: {'Access-Control-Allow-Origin': "*"}}).then(res => res)
    },
    async getBasketItem(data) {
        return await axios.post('http://127.0.0.1:8000/api/getBasketItem', data, { headers: {'Access-Control-Allow-Origin': "*"}}).then(res => res)
    },
    async changeCountValue(data) {
        return await axios.post('http://127.0.0.1:8000/api/changeCountValue', data, { headers: {'Access-Control-Allow-Origin': "*"}}).then(res => res)
    },
    async deleteBasketItem(data) {
        return await axios.post('http://127.0.0.1:8000/api/deleteBasketItem', data, { headers: {'Access-Control-Allow-Origin': "*"}}).then(res => res)
    },
    async createRequest(data) {
        return await axios.post('http://127.0.0.1:8000/api/createRequest', data, { headers: {'Access-Control-Allow-Origin': "*"}}).then(res => res)
    },
    async getAllUserRequests(data) {
        return await axios.post('http://127.0.0.1:8000/api/getAllUserRequests', data, { headers: {'Access-Control-Allow-Origin': "*"}}).then(res => res)
    },
    async deleteUserRequest(data) {
        return await axios.post('http://127.0.0.1:8000/api/deleteUserRequest', data, { headers: {'Access-Control-Allow-Origin': "*"}}).then(res => res)
    },
    async CreateNewMovie(data) {
        return await axios.post('http://127.0.0.1:8000/api/CreateNewMovie', data, { headers: {'Access-Control-Allow-Origin': "*"}}).then(res => res)
    },
    async updateMovie(data) {
        return await axios.post('http://127.0.0.1:8000/api/updateMovie', data, { headers: {'Access-Control-Allow-Origin': "*"}}).then(res => res)
    },
    async deleteMovie(data) {
        return await axios.post('http://127.0.0.1:8000/api/deleteMovie', data, { headers: {'Access-Control-Allow-Origin': "*"}}).then(res => res)
    },
    async createGenre(data) {
        return await axios.post('http://127.0.0.1:8000/api/createGenre', data, { headers: {'Access-Control-Allow-Origin': "*"}}).then(res => res)
    },
    async deleteGenre(data) {
        return await axios.post('http://127.0.0.1:8000/api/deleteGenre', data, { headers: {'Access-Control-Allow-Origin': "*"}}).then(res => res)
    },
    async getAllRequests(data) {
        return await axios.post('http://127.0.0.1:8000/api/getAllRequests', data, { headers: {'Access-Control-Allow-Origin': "*"}}).then(res => res)
    },
    async changeStatus(data) {
        return await axios.post('http://127.0.0.1:8000/api/changeStatus', data, { headers: {'Access-Control-Allow-Origin': "*"}}).then(res => res)
    }
}

export default API