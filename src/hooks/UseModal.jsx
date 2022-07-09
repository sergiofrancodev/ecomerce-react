import { useState } from 'react';
import {useNavigate} from 'react-router-dom'


export const UseModal = (initialValue = false) => {

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(initialValue);

    const openModal = () => {

        const token = localStorage.getItem("token")


        if(token){
            setIsOpen(true)
        }else{
            alert('You need to register to access this option');

           navigate("/");
        }

    };




    const closeModal = () => {setIsOpen(false)};

    return [isOpen, openModal, closeModal];
};




