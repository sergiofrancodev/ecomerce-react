import { Button } from '@material-ui/core';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import '../styles/main.css'


const User = () => {


    return (
        <div className="box-box-user">
        <div className='user-box'>
            <h3>Hi {localStorage.getItem("name")} {localStorage.getItem("lastName")}</h3>
            <AccountCircleIcon sx={{fontSize: "200px", color: "#06b"}} />
<div className='box-user-options'>
            <Link to="/purchases" className='go-to-shop'><div><Button variant="contained" color='primary'>My purchases</Button></div></Link> <Link to="/" className='go-to-shop'><div><Button variant="contained" color='secondary'>Go to Shop</Button></div></Link>
            </div>
        </div>
        </div>
    );
};

export default User;