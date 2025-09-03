import { createContext, useEffect, useState } from "react";

export const themeContext = createContext()

const ThemeProvider = ({children})=> {
    const [mode, setMode] = useState()

    useEffect(()=>{
        const savedTheme = localStorage.getItem("theme")
        if (savedTheme) {
            setMode(savedTheme)
        }else{
            const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            console.log(preferDark);
            
            setMode(preferDark ? "dark" : "light")
        }
    },[])

    //find the current mode of the user device

    const toggleMode = () => {
        setMode (prev => prev == "light" ? "dark" : "light")
        savedTheme()
    }

    const savedTheme = ()=> {
        localStorage.setItem("theme", mode == "light" ? "dark" : "light")
    }

    const value = {
        mode, 
        toggleMode
    }
    return(
        <themeContext.Provider value={value}>{children}</themeContext.Provider>
    )
}

export default ThemeProvider