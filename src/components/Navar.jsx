import React, { useEffect } from 'react';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import { Link, useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { Modals } from '../components/';
import { useDispatch, useSelector } from 'react-redux';
import {getCart} from '../store/slices/cart.slices'

const Navar = () => {

const navigate = useNavigate();    
const isLogin = localStorage.getItem("token");

const dispatch = useDispatch();


const cart = useSelector(state => state.cart)

    const logOut = () =>{

        localStorage.setItem("token", "")
        localStorage.setItem("name", "")
        localStorage.setItem("lastName", "")
        alert("sesion cerrada con exito")
        navigate("/")
    }

    useEffect(() =>{
        dispatch(getCart())
    },[dispatch]);

console.log(cart);
    return (
        <div className='top-navar'>
          

        
              <Link to="/"> <div className='logo'> Techno<span>Shop</span> </div></Link>
              
             

          
            <ul className='menu'>
                {
                    isLogin ?
                    <li><Link to="/user"><PersonOutlineOutlinedIcon /> </Link></li> :
                    <li><Link to="/login"><PersonOutlineOutlinedIcon /> </Link></li>

                }
                
               
                <li><Link to="/purchases"><Inventory2OutlinedIcon /></Link></li>
            
                <li><Modals cart={cart} isLogin={isLogin}/></li>
{
    isLogin ?
    <li onClick={logOut}><LogoutIcon/></li>
    :
    <></>
}

                



                
            </ul>
        </div>
    );
};

export default Navar;