// import axios from 'axios';

// const URL = "/apiFake.json";

// const getData = async (idPost) => {
//     try {

//        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`) 
//        const data = await response.json()

//        const responseUser = await fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`)  
//        const dataUser = await responseUser.json()

//         console.log(dataUser)
       
//     } catch (error) {
        
//     }
// }

// getData(80);

const getDataAxios = async (idPost) => {
    try {

       const response = await axios(`https://jsonplaceholder.typicode.com/posts/${idPost}`) 

    //    const data = await response.json()

       const responseUser = await axios(`https://jsonplaceholder.typicode.com/users/${response.data.userId}`)  
    //    const dataUser = await responseUser.json()

        console.log(responseUser.data.name)
       
    } catch (error) {
        
    }
}

getDataAxios(80);