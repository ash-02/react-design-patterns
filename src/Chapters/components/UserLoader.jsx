import axios from "axios";
import React, { useEffect, useState } from "react"

export const UserLoader = ({ children }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get('/current-user');
            setUser(response.data);
            console.log(response.data)
        })();
    }, []);

    return (
        <>
        <h1>
            Current User:
        </h1>
        {React.Children.map(children, child => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, { user });
            }
            
            return child;
        })}
        </>
    );

}