import { configureStore } from '@reduxjs/toolkit'
import isLoading from './slices/isloading.slice'
import products from './slices/products.slice'
import purchases from'./slices/purchases.slice'
import cart from './slices/cart.slices'
export default configureStore({
  reducer: {
    isLoading,
    products,
    purchases,
    cart

	}
})