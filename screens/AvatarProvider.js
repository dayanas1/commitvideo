import React, { createContext, useContext, useState } from 'react';

const AvatarContext = createContext();

export const useAvatar = () => {
    return useContext(AvatarContext);
};

export const AvatarProvider = ({ children }) => {
    const [selectedAvatar, setSelectedAvatar] = useState(null);

    return (
        <AvatarContext.Provider value={{ selectedAvatar, setSelectedAvatar }}>
            {children}
        </AvatarContext.Provider>
    );
};

export default AvatarProvider;
