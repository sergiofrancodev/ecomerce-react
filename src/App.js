import { HashRouter, Route, Routes } from 'react-router-dom';
import "./styles/main.css"
import "./styles/responsive.css"
import { Home, Login, ProductsDetail, Purchases, ThankYou, User} from "./pages"
import { useSelector } from "react-redux";
import {Navar, LoadingScreen,ProtectedRoutes, Footer} from './components'

function App() {

  const isLoading = useSelector((state) => state.isLoading);
    return (
    <div className="Contain">

      <HashRouter>
      <Navar />
      {
        isLoading && <LoadingScreen />  
      }
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:id' element={<ProductsDetail />} />
          <Route path='/login' element={<Login />} />
          
          <Route element={<ProtectedRoutes/>}>

          <Route path='/purchases' element={<Purchases />} />
          <Route path='/tankyou' element={<ThankYou />} />
          <Route path='/user' element={<User />} />


          </Route>
        </Routes>
      </HashRouter>
      <Footer/>

    </div>
  );
}

export default App;
