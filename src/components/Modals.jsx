import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Modal from './Modal';
import { UseModal } from '../hooks/UseModal';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { buy, setCart, deleteCart } from '../store/slices/cart.slices';
import {Link, useNavigate} from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';



const Modals = () => {



    const navigate = useNavigate();

    const dispatch = useDispatch();
    const [isOpen1, openModal1, closeModal1] = UseModal(false);

    const cart = useSelector(state => state.cart);

    const productInCart = () =>{
        closeModal1()
        navigate("/")

    }


    const purchaseComplete = () =>{
        dispatch(buy())
        closeModal1(true)

    }
console.log(cart);

useEffect(() =>{
dispatch(setCart());

},[dispatch])

console.log(cart);




const total = cart.reduce((acc, prod) => acc + Number(prod.productsInCart?.quantity) * Number(prod.price), 0)

const totalCartItems = cart.reduce((acc, item) => acc + Number(item.productsInCart?.quantity), 0);
    return (
        <div>
         
                <button onClick={openModal1} className='button-cart-modal'> <ShoppingCartOutlinedIcon /> <div className="cart-len">{totalCartItems}</div></button>
            
          


            <Modal isOpen={isOpen1} closeModal={closeModal1}>
            
            {cart.map(cartAdd =>(
                <div key={cartAdd.id}>
                    <div className='box-cart-top'>
                    <div className='box-cart-brand'>
                    {cartAdd.brand}

                    </div>
               <div>
               <button onClick={() =>dispatch(deleteCart(cartAdd.id))}><DeleteIcon sx={{fontSize: "18px"}}/></button>
                    </div>
                    </div>





                    
                    
                    <div onClick={productInCart} className="box-cart-title">{cartAdd.title}</div>
               <div className='box-cart-quantity'>{cartAdd.productsInCart?.quantity}</div>
               <div className="box-cart-price">
                    <div className='cart-price'>Price:</div>
                    <div className="price-box-in-cart">${cartAdd.price}</div>
                    </div>
                   </div>
            ))}
            <div className='total-cart-box'>
            <div className='total-cart-box-total'>Total:</div>
            <div className='total-cart-box-amount'>${total}</div>
            </div>
          <Link to="/tankyou"> <button className='button-purchase-cart' onClick={purchaseComplete}>Checkout</button></Link> 


            </Modal>



            
        </div>
    );
};

export default Modals;