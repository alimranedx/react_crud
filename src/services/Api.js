import axios from 'axios';
let api_url = 'http://127.0.0.1:3002/users';
export const addUser = async(data) => {
    try {
        return await axios.post(api_url, data);
    } catch (error) {
        console.log(error);
    }

}

export const getUser = async(data) => {
    try {
        return await axios.get(api_url);
    } catch (error) {
        console.log(error);
    }

}
export const getSingleUser = async(id) => {
    try {
        return await axios.get(`${api_url}/${id}`);
    } catch (error) {
        console.log(error);
    }

}
export const editUser = async(data, id) => {
    try {
        return await axios.put(`${api_url}/${id}`, data);
    } catch (error) {
        console.log(error);
    }

}
export const deleteUser = async(id) => {
    try {
        return await axios.delete(`${api_url}/${id}`);
    } catch (error) {
        console.log(error);
    }

}