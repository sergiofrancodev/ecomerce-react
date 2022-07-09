import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { filterHeadline } from '../store/slices/products.slice';
import { Modals2 } from '../components/';
import { addToCart } from '../store/slices/cart.slices';
import { filterCategory, getProducts } from '../store/slices/products.slice';
import axios from 'axios';
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import GroupsIcon from '@mui/icons-material/Groups';
import PaymentsIcon from '@mui/icons-material/Payments';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';




const Home = () => {

    const dispatch = useDispatch()
    const [search, setSearch] = useState("");
    const navigate = useNavigate()
    const products = useSelector(state => state.products)
    const [quantity, setQuantity] = useState(1)

    const filterProducts = () => {
        dispatch(filterHeadline(search))
    }

    const redirTop = (productsItem) => {
        window.scrollTo(0, 0);
        navigate(`/products/${productsItem.id}`)
    }
    const addCart = (productsItem) => {
        const product = {
            id: productsItem.id,
            quantity: 1,
        }
        dispatch(addToCart(product));
    }
    const allProducts = () =>{
        dispatch(products)
    }
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        dispatch(getProducts());

        axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products/categories").then(res => setCategories(res.data.data.categories))

    }, [dispatch])


    const selectCategory = (id) => {

        dispatch(filterCategory(id))
    }
    const fadeImages = [
        "http://sergiofrancodev.com/imgexample/baner1.svg",
        "http://sergiofrancodev.com/imgexample/banner2.svg",
        "http://sergiofrancodev.com/imgexample/baner1.svg"
    ];

    console.log(categories);
    return (
        <div className='contain'>
            
            <div className='top-header-index'>
                <div className='info-shop'>
                    <div className='info-info'>
                    <WhereToVoteIcon sx={{fontSize: '20px', marginRight: '0.2rem', color: 'black'}}/>W898 RTower Stat, Suite 56
                    </div> 
                    <div className='info-info ifs'>
                    <LocalPhoneIcon sx={{fontSize: '18px', marginRight: '0.2rem', color: 'black'}} /> 333 333 333
                    </div>
                    </div>

                <div className="boxsearch">
                    <input
                        type="text"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                        placeholder="What are you looking for?" />

                    <button onClick={filterProducts}><SearchOutlinedIcon sx={{ px: "0.5rem" }} />
                    </button>
                    <Modals2 />
                    
                </div>
            </div>
            <div className='slideproducts'>
                <div className="slide-container">
                    <Fade>
                        <div className="each-fade">
                            <div>
                                <img src={fadeImages[0]} alt="" />
                            </div>

                        </div>
                        <div className="each-fade">
                            <div>
                                <img src={fadeImages[1]} alt="" />
                            </div>
                        </div>
                        <div className="each-fade">
                            <div>
                                <img src={fadeImages[2]} alt="" />
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
            <div className='categories-filter-map'>
                <div className='info-shop-box'>
                    <LocalShippingIcon sx={{fontSize: '35px', color: '#0162d1'}} />
                   <span className='title-categories-filter-map'>Free Delivery</span>
                   <span className='desc-categories-filter-map'>From $100</span>
                </div>
                <div className='info-shop-box'>
                    <GroupsIcon sx={{fontSize: '35px', color: '#0162d1'}} />
                    <span className='title-categories-filter-map'>99% Customer</span>
                   <span className='desc-categories-filter-map'>From feedbacks</span>                </div>
                <div className='info-shop-box'>
                    <CompareArrowsIcon sx={{fontSize: '30px', color: '#0162d1'}} />
                    <span className='title-categories-filter-map'>10 Days</span>
                   <span className='desc-categories-filter-map'>for free return</span>                </div>
                <div className='info-shop-box'>
                    <PaymentsIcon sx={{fontSize: '35px', color: '#0162d1'}} />
                    <span className='title-categories-filter-map'>Payment</span>
                   <span className='desc-categories-filter-map'>secure system</span>
                </div>

            </div>

            <div className="flex-pc">
                <div className='filter-pc'>

                    <div>
                        <div className='title-filter-category'>Category</div>
                    </div>
                    <ul>
                    <button onClick={allProducts}>all items</button>
                        {categories.map((category) => (

                            <li className='nav-filter'
                                onClick={() => selectCategory(category.id)}
                                key={category.name}

                            >
                                
                                {category.name}</li>
                        ))}</ul>
                    <div>

                    </div>
                </div>
                <ul className='cards'>


                    {products.map(productsItem => (
                        <li key={productsItem.id}>
                            <div className='category-box'>{productsItem.category?.name}</div>
                            <div className='disscount'>-20%</div>
                            <div className="contain-img" onClick={() => redirTop(productsItem)}>
                                <img src={productsItem.productImgs[0]} alt="" />
                            </div>
                            <div className='infoProduct'>
                                <h2 className='titleproducts' onClick={() => redirTop(productsItem)}> {productsItem.title}</h2>


                                <div>

                                    <div className="price">

                                        <div className='price-product'>
                                            <span> ${productsItem.price} <span className='discount-price'>${Number((productsItem.price * 0.2)) + Number((productsItem.price))}</span></span>
                                        </div>

                                        <div className="cart-button"
                                            onClick={() => addCart(productsItem)}
                                            value={quantity}
                                            onChange={() => setQuantity(1)}
                                        >
                                            <ShoppingCartOutlinedIcon sx={{ fontSize: "1.5rem" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Home;