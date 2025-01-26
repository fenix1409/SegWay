"use client"
import React, { ReactNode, SetStateAction } from 'react'
import { CloseIcon } from '../assets/Icons'

interface ModalType {
    isOpen: boolean
    setIsOpen: React.Dispatch<SetStateAction<boolean>>
    width: number
    children: ReactNode
    extraStyle?:string
}
const Modal: React.FC<ModalType> = ({ isOpen, setIsOpen, width, children, extraStyle }) => {
    return (
        <div onClick={(e) => (e.target as HTMLDivElement).id == "wrapper" ? setIsOpen(false) : ""} id='wrapper' className={`${extraStyle} absolute z-10 inset-0 backdrop-blur bg-[#00000029] flex items-center justify-center ${!isOpen && "scale-0"}`}>
            <div style={{ width: `${width}px` }} className="absolute p-5 bg-white rounded-md">
                <button onClick={() => setIsOpen(false)} className='absolute top-[20px] right-3'><CloseIcon /></button>
                {children}
            </div>
        </div>
    )
}

export default Modal