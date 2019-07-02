import axios from "axios";

const URL = "http://localhost:4000/message";

export function getList() {
    return axios
        .get(URL)
        .catch(function (error) {
            console.log(error);
        })
}

export function postList(data) {
    return axios
        .post(URL + "/add", data)
        .catch(function (error) {
            console.log(error);
        })
}

export function deleteList() {
    return axios
        .delete(URL)
        .catch(function(error){
            console.log(error);
        })
}