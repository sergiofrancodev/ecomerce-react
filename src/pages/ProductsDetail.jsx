import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { filterCategory } from '../store/slices/products.slice';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { addToCart } from '../store/slices/cart.slices';


const ProductsDetail = () => {

    const [products, setProducts] = useState({});
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1)


    const productsList = useSelector(state => state.products)

    useEffect(() => {

        axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products").then(res => {
            const productSearched = res.data.data.products.find(productsItem => productsItem.id === Number(id));
            console.log(productSearched);
            setProducts(productSearched)
            dispatch(filterCategory(productSearched.category.id))

        })

    }, [dispatch, id])


    const addCart = () =>{

        const product = {

            id: id,
            quantity:quantity,

        }
        dispatch(addToCart(product));
        setQuantity(1)

        


    }
    const redirTop = (productList) => {
        window.scrollTo( 0, 0 );
        navigate(`/products/${productList.id}`)        

    }

    return (
        <div className='container'>
            <div className="breadcrumb">
                <h5>Home</h5> <div className="separator"></div> <li>{products.title}</li></div>

               <div className="product-item-pc">
            <div className='product-img-item'>
                <img src={products.productImgs?.[0]} alt="" />
                <div className="order-box">
                <h2>{products.title}</h2>
                <div className='description-item'>
                    
                    <p>{products.description}</p>
                </div>

                <div className='box-purchase'>
                    <div>
                        <div className='price-item'>Price</div>
                        <div className='price-text'>${products.price}</div>
                    </div>

                    <div>
                        <div className='Quantity'>Quantity</div>
                        <div className='counter-box'>
                            <button onClick={() => setQuantity(quantity -1)}>-</button>
                           <div className='result-count'> 
                           <input type="number" placeholder={quantity}/>
                           
                           </div>
                           
                            <button onClick={() => setQuantity(quantity +1)}>+</button>
                        </div>
                    </div>
                    
                </div>
                <div className='purchase-botton' 
                onClick={addCart}
                value={quantity}
                onChange={e => setQuantity(e.target.value)}
                >Add Cart <ShoppingCartOutlinedIcon /></div>
                </div>
                
            </div>
            </div>
<div className='similar-items'><h2>Discover similar items</h2></div>
           
<ul className='cards'>
            {productsList.map(productList => (

                    <li onClick={() =>redirTop(productList)} key={productList.id}>
                        
                        <div className="contain-img">
        <img src={productList.productImgs[0]} alt="" />
          </div>

          <div className='infoProduct'>
        <h2 className='titleproducts'> {productList.title}</h2>
            </div>
            <div className="price">
                 
                 <div className='price-product'>  
                 <p>price:</p>
                <span> ${productList.price}</span>
                 </div>
 
                 <div className="cart-button">
              <ShoppingCartOutlinedIcon onClick={() => alert("s")} sx={{ fontSize: "1.5rem" }} />
             </div>
         </div>      
                        
                    
                    </li>

                ))}
            </ul>

        </div>
    );
};

export default ProductsDetail;