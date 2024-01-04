import React, { PropsWithChildren } from 'react';


export const SearchContext = React.createContext({
    search: 'lemoncode',
    setSearch: (value) => {},
});

export const SearchContextProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [search, setSearch] = React.useState<string>('lemoncode');
    const value = { search, setSearch };

    return (
        <SearchContext.Provider value={{...value}}>
            {children}
        </SearchContext.Provider>
    );
}