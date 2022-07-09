import React, { useEffect, useState } from 'react';
import Modal2 from './Modal2';
import { UseModal2 } from '../hooks/UseModal2';
import { filterCategory,  getProducts } from '../store/slices/products.slice';
import { List, ListItem } from '@mui/material';
import axios from 'axios';
import { useDispatch } from 'react-redux';



const Modals2 = () => {
    const dispatch = useDispatch();
    const [filterPrice, setFilterPrice] = useState([100,1200]);

    const [isOpen2, openModal2, closeModal2] = UseModal2(false);

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        dispatch(getProducts());
        axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products/categories").then(res => setCategories(res.data.data.categories))

    }, [dispatch])
    
    const selectCategory = (id) => {

        dispatch(filterCategory(id)) 
        window.scrollTo(0, 1340);
    }


    return (
        <div>

<div className="filter-button">
<button onClick={openModal2} className="button-cart-modal2"> 
<p>Filters</p>
</button>
</div>
            <Modal2 isOpen={isOpen2} closeModal={closeModal2}>
       
            <h3>Filter by Price</h3>

            <div className="top-categories">
                <h3>Filter by Category</h3>
         <List sx={{border: '1px solid #ccc', width: '17rem'}}>
          {categories.map((category) => (
        <ListItem 
        onClick={() => selectCategory(category.id)}
        onClickCapture={closeModal2}
        key={category.name}  sx={{fontSize: '18px', width: '15rem', margin: 'auto'}}
        className="filter-modal-2"
        
        > 
        {category.name}</ListItem>
        ))}
         </List>
         
        </div>
        
            </Modal2>
            
        </div>
    );
};

export default Modals2;