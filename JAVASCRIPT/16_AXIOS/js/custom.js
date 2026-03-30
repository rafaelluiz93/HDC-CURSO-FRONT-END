// 7 - CUSTOM INSTANCE
const postsFetch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        Accept: "aplication/json",
        Authorization: "novo_token"
    }
})