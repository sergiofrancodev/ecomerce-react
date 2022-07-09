import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
    return (
        <div>
            <footer>

<div class="footer1">

    <h4>Store location
</h4>

       
    <p>W898 RTower Stat, Suite 56</p>

    <p>We ship worldwide</p>
</div>
    

<div class="footer2">

    <h4>About us</h4>
    <ul>
        <li><a href="#">Help Center</a></li>
        <li><a href="#">Guarantee to customers</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Frequent questions?</a></li>
    </ul>

    

</div>
<div class="footer3">

    <h4>Products</h4>
    <ul>
        <li><a href="#">Smart tvs</a></li>
        <li><a href="#">Smartphones</a></li>
        <li><a href="#">Computers</a></li>
        <li><a href="#">Kitchen</a></li>
    </ul>

    <ul class="fotter-menu">
        
    </ul>

</div>
<div class="footer4">

    <h4>Social networks</h4>
    <div class="social-footer">
<FacebookIcon  sx={{marginTop: "0.5rem", color: "#3b5998"}}/>
<InstagramIcon sx={{marginTop: "0.5rem", color: "#C13584"}}/>
<TwitterIcon sx={{marginTop: "0.5rem", color: "#00acee"}}/>
</div>
</div>

</footer>
        </div>
    );
};

export default Footer;