import axios from 'axios'
const baseURL = 'https://jsonplaceholder.typicode.com/users'; 

const userLsit = [
    {
        id: 1,
        name: "shrouk", 
        email: "sh@sh.com"
    },
    {
        id: 2,
        name: "khaled", 
        email: "sh@sh.com"
    },
    {
        id: 1,
        name: "shalaby", 
        email: "sh@sh.com"
    }
]

export async function getUsers(){

    let users = [];

    try{
        const response = await axios.get(baseURL);
        users = response.data;
    }catch(error){
        console.log(error)
    }

    
    return{
        type: 'USER_LIST',
        payload: users
    }
}

export async function getUserDetails(id){
    let userDetails = {};

    try{
        const response = await axios.get(`${baseURL}/${id}`);
        userDetails = response.data;
    }catch(error){
        console.log(error)
    }

    
    return{
        type: 'USER_DETAILS',
        payload: userDetails
    }
}

export function clearDetails(){
    return{
        type: "DETAILS_CLEAR"
    }
}