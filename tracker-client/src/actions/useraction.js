// sending user creation / login data to backend

import axios from "axios"
const server = "http://localhost:8000";



/*
userData: Form data from signup.jsx page
passwords should be checked by this point
*/

export const CreateUser = async(userData) => {
    try {

        if (userData.conf !== userData.pw) {
            alert("Passwords must match!")
            return
        }

        const url = server + "/user/createAccount";
        const res = await axios.post(
            url, {
                username: userData.username,
                email: userData.email,
                password: userData.pw
            }
        )
        if (res.data === 'response: User already exist') {
            alert("Email already in use.")
            return
        }

        alert("Account created!")
        


        .catch(function (err) {
            alert("Error: " + err.response.status + "\nMessage: " + err.response.data.message)
        })



    } catch (e) {
        console.error(e.message);
        throw e;
    }
}

/*
userData: Form data from login page
*/

export const LoginUser = async(userData) => {
    try {
        const url = server + "/user/login";
        let status = true;

        const data = await axios.post(
            url, {
                username: userData.username,
                password: userData.pw
            },
            {
                withCredentials: true
            }
        )
        .catch(function (err) {
            // Make a check for error 401 => Incorrect password / user
            console.log(err)
            alert("Error: " + err.response.status + "\nMessage: " + err.response.data.message)
            status = false
        })
        return status

    } catch (e) {
        console.error(e);
        throw e;
    }
}


export const LoginUserTest = async(userData) => {
    try {
        const url = server + "/user/login";
        const data = await axios.post(
            url, {
                username: userData.username,
                password: userData.pw
            },
            {
                withCredentials: true
            }
        )
        console.log(data)
        return true;
    } 
    catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            alert("Error: " + error.response.status + "\nMessage: " + error.response.data.message)
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config);      
    }
}

// Used to check if a users JWT token is valid for a route
export const CheckAuth = async(route) => {
    try {
        const url = server + route;
        let auth = true
        await axios.get(url)
        .catch(function (err) {
            console.log("Error: " + err.response.status + "\nMessage: " + err.response.data.message)
            auth = false
        })
        return auth

    } catch (e) {
        console.error(e);
        throw e;
    }
}