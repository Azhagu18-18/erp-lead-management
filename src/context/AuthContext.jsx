import { createContext, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const user = {
        name: "Admin",
        role: "Administrator",
        avatar: "https://ui-avatars.com/api/?name=Admin&background=0D6EFD&color=fff"
    };

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);