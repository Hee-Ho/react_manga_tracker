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
                email: userData.email,
                password: userData.pw
            }

        )
        .catch(function (err) {
            alert("Error: " + err.response.status)
        })

        if (res.data === 'response: User already exist') {
            alert("Email already in use.")
            return
        }

        alert("Account created!")
        return

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

        await axios.post(
            url, {
                email: userData.email,
                password: userData.pw
            }

        )
        .catch(function (err) {
            // Make a check for error 401 => Incorrect password / user
            alert("Error: " + err.response.status)
        })
        .finally(function () {
            
            // Probably put a redirect here
            return
        });

    } catch (e) {
        console.error(e);
        throw e;
    }
}