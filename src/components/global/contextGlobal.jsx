import axios from "axios"
import { createContext, useState } from "react"
import { BASE_URL } from "../../constant/BASE_URL"

export const ContextGlobal = createContext()

export default function LabedditProvider({ children }) {
    const [isLogged, setIsLogged] = useState(false)
    const [reload, setReload] = useState(false)


    const LoginAPI = async (body) => {
        const PATH = BASE_URL + "/users/login"
        await axios.post(PATH, body)
            .then(response => {
                setToken(response.data.token)
                setIsLogged(true)
            })
            .catch(error => {
                //fazer um modal
            })

    }

    const SignupAPI = async (body) => {
        const PATH = BASE_URL + "/users/signup"
        await axios.post(PATH, body)
            .then(response => {
                setToken(response.data.token)
                setIsLogged(true)
            })
            .catch(error => {
                console.log(error);
            })

    }


    const getToken = () => {
        return localStorage.getItem("token")
    }

    const setToken = (token) => {
        localStorage.setItem("token", token)
    }

    const deleteToken = () => {
        localStorage.removeItem("token")
    }


    const context = {
        isLogged,
        setIsLogged,
        getToken,
        setToken,
        deleteToken,
        LoginAPI,
        SignupAPI,
        reload,
        setReload
    }

    return (
        <ContextGlobal.Provider value={context}>
            {children}
        </ContextGlobal.Provider>
    )
}
