// sending user creation / login data to backend
import { useUser } from "../UserContext";
import axios from "axios"
const server = "http://localhost:8000";
axios.defaults.withCredentials = true;

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
        .catch(function (err) {
            alert("Error: " + err.response.status + "\nMessage: " + err.response.data.message)
        })

        if (res.data === 'response: User already exist') {
            alert("Email already in use.")
            return
        }

        alert("Account created!")
        
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

        const response = await axios.post(
            url, {
                username: userData.username,
                password: userData.pw
            },
            {
                withCredentials: true
            }
        )
        .then(res => {
            return(res.status === 200 ? res.data.payload : false);
        })
        .catch(function (err) {
            // Make a check for error 401 => Incorrect password / user
            console.log(err)
            alert("Error: " + err.response.status + "\nMessage: " + err.response.data.message)
        })

        return response

    } catch (e) {
        console.error(e);
        throw e;
    }
}

export const LogoutUser = async() => {
    try {
        const url = server + "/user/logout";
        const response = await axios.post(url);
        console.log(response)
        return
    } catch (e) {
        console.error(e);
        throw e;
    }
}

// Used to check if a users JWT token is valid for a route
export const CheckAuth = async(route) => {
    try {
        const url = server + route;
        let auth = true;
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

//retrieve user info on page refresh
export const getUser = async() => {
    try {
        const url = server + "/user/userInfo" 
        const { data } = await axios.get(url)
        return data.payload
    }
    catch (error) {
        return {
            username: "",
            uid: -1
        }
    }
}