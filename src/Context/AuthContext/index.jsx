import { createContext, useState } from "react"

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [isAuthenticate, setAuthenticate] = useState({
        auth: !!localStorage?.getItem("token"),
    })

    return (
        <AuthContext.Provider value={{ isAuthenticate, setAuthenticate }}>
            {children}
        </AuthContext.Provider>
    )
}