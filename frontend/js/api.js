const API_URL = "http://localhost:5000/api";


// Get Token

function getToken(){

    return localStorage.getItem("token");

}




// Common API Request

async function apiRequest(url, method="GET", body=null){


    const options = {

        method,

        headers:{
            "Content-Type":"application/json",
            "Authorization":
            `Bearer ${getToken()}`
        }

    };



    if(body){

        options.body =
        JSON.stringify(body);

    }



    const response =
    await fetch(
        API_URL + url,
        options
    );



    const data =
    await response.json();



    // Token expired / unauthorized

    if(response.status === 401){

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        window.location.href="login.html";

    }



    return data;

}