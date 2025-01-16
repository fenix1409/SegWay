import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { ScooterType } from "../service/Scooters";
import { AccessoryType } from "../service/Accessory";

interface SaveContextProps {
    savedScooters: ScooterType[]
    savedAccessories: AccessoryType[]
    saveScooter: (scooter: ScooterType) => void
    saveAccessory: (accessory: AccessoryType) => void
}
const SaveContext = createContext<SaveContextProps | undefined>(undefined)

const loadState = () => {
    try {
        const serializedState = localStorage.getItem("saveState")
        if (serializedState === null) {
            return { savedScooters: [], savedAccessories: [] }
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return { savedScooters: [], savedAccessories: [] }
    }
}

const saveState = (state: { savedScooters: ScooterType[], savedAccessories: AccessoryType[] }) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem("saveState", serializedState)
    } catch (err) {
        // Ignore write errors
    }
};

export const SaveProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [savedScooters, setSavedScooters] = useState<ScooterType[]>(loadState().savedScooters)
    const [savedAccessories, setSavedAccessories] = useState<AccessoryType[]>(loadState().savedAccessories)

    useEffect(() => {
        saveState({ savedScooters, savedAccessories })
    }, [savedScooters, savedAccessories])

    const saveScooter = (scooter: ScooterType) => {
        setSavedScooters((prev) => {
            const index = prev.findIndex((item) => item.id === scooter.id)
            if (index === -1) {
                return [...prev, scooter]
            } else {
                const newScooters = [...prev]
                newScooters[index] = scooter
                return newScooters
            }
        });
    };

    const saveAccessory = (accessory: AccessoryType) => {
        setSavedAccessories((prev) => {
            const index = prev.findIndex((item) => item.id === accessory.id)
            if (index === -1) {
                return [...prev, accessory]
            } else {
                const newAccessories = [...prev]
                newAccessories[index] = accessory
                return newAccessories
            }
        });
    };

    return (
        <SaveContext.Provider value={{ savedScooters, savedAccessories, saveScooter, saveAccessory }}>{children}</SaveContext.Provider>
    )
}

export const useSaveContext = () => {
    const context = useContext(SaveContext)
    if (context === undefined) {
        throw new Error("useSaveContext must be used within a SaveProvider")
    }
    return context
}