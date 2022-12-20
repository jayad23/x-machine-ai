import React, { useState } from "react"
import { toast } from 'react-toastify'
export const useGetHandlenames = () => {
    const [namesOfPassengers, setNamesOfPassengers] = useState({})
    const handleNames = (e) => {
        const keys = e.target.name;
        const inputValue = e.target.value;
        setNamesOfPassengers(prevState => ({ ...prevState, [keys]: inputValue }));
    }

    return { namesOfPassengers, handleNames }
}

export const useHandleNextSteps = (state, send, destination, namesOfPassengers, dates) => {

    const handleNextStep = () => {
        if (state.value.search === "success" && destination)
        {
            send("CONTINUE", { selectedCountry: destination })
            toast("Selection added successfully")
        };
        if (state.matches("tickets"))
        {
            if (dates)
            {
                send("FINISH", { dates })
            } else
            {
                toast.error("You must select dates to continue")
            }
        };
        if (state.matches("passengers"))
        {
            console.log(namesOfPassengers)
            if (namesOfPassengers)
            {
                const namesKeys = Object.keys(namesOfPassengers);
                send("BUY", { names: namesKeys.map(key => ({ [key]: namesOfPassengers[key] })) })
            } else
            {
                toast.error("Include names of the passengers")
            }
        };
        if (state.value === "success") send("REFRESH")
    }

    const handleBack = () => {
        send("BACK")
    }

    return { handleNextStep, handleBack }
}

export const useGetTitle = (state) => {
    const RenderTitle = () => {
        if (state.matches("search")) return "What's your destination?"
        if (state.matches("tickets")) return "When do you wanna travel?"
        if (state.matches("passengers")) return "Select the number of passengers"
        if (state.matches("success")) return "CONGRATULATIONS!"
    };
    const titleFlex = state.matches("success") ?
        "d-flex justify-content-center" :
        "d-flex justify-content-between";
    return { RenderTitle, titleFlex }
}