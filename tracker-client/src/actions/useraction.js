// sending user creation / login data to backend

import axios from "axios"

const server = "http://localhost:8000";



/*
userData: Form data from signup.jsx page
passwords should be checked by this point
*/

export const CreateUser = async(userData) => {
    try {
        const url = server + "/user/createAccount";
        console.log(url)

        const res = await axios.post(
            url, {
                email: userData.email,
                password: userData.pw
            }

        );
        console.log(res);

    } catch (e) {
        console.error("Failed to send create account request.");
        throw e;
    }
}

/*
userData: Form data from signup.jsx page
passwords should be checked by this point
*/

export const LoginUser = async(userData) => {
    try {
        const url = server + "/user/login";
        console.log(url)

        const res = await axios.post(
            url, {
                email: userData.email,
                password: userData.pw
            }

        );
        console.log(res);

    } catch (e) {
        console.error("Failed to send login request.");
        throw e;
    }
}