import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPurchases } from '../store/slices/purchases.slice'

const Purchases = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    
    const purchasesUser = useSelector(state => state.purchases);

   
    useEffect(() => {

        dispatch(getPurchases())

    


    }, [dispatch])
    
    


    const dateString = (purchaseUser) => {

    const date = new Date(purchaseUser.createdAt);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);

    }
    return (
        <div className='box-purchases'>

            {purchasesUser.map((purchaseUser) => (
                <div key={purchaseUser.cart.id}>

                

                   
     <div className='date-purchase'>{dateString(purchaseUser)} </div>

                    <div className='box-self-purchases' key={purchaseUser.id}>

                        {purchaseUser.cart.products.map((product) => (
                            <div className='info-purchases' key={product.productsInCart.id}>


                                <div className='purchase-title' onClick={() => navigate(`/products/${product.id}`)}>   {product.title}</div>

                                <div className="quantity-purchases">
                                    {product.productsInCart.quantity}
                                </div>
                                <div className='price-purchase'>
                                    $ {product.price}
                                </div>


                            </div>
                        ))}

                    </div>
                </div>
            ))}

        </div>
    );
};

export default Purchases;