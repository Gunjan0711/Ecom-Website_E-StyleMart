import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    return ( 
        <div className='productdisplay'>
             <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt=''/>
                    <img src={product.image} alt=''/>
                    <img src={product.image} alt=''/>
                    <img src={product.image} alt=''/>
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt=""/>
                </div>
             </div>
             <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt=''/>
                    <img src={star_icon} alt=''/>
                    <img src={star_icon} alt=''/>
                    <img src={star_icon} alt=''/>
                    <img src={star_dull_icon} alt=''/>
                    <p>(189)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-prices-old">
                        ${product.old_price}
                    </div>
                    <div className="productdisplay-right-prices-new">
                        ${product.new_price}
                    </div>
                    <div className="productdisplay-right-description">
                    Discover a seamless shopping experience with these product, offering a wide range of high-quality products, from fashion to tech and home essentials. 
                    Enjoy exclusive deals, secure payments, and fast delivery—all designed to make your online shopping easy and enjoyable. 
                    Shop now and elevate your everyday life!
                    </div>
                    <div className="productdisplay-right-size">
                        <h1>Select Size</h1>
                        <div className="productdisplay-right-sizes">
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                    </div>
                    <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                    <p className="productdisplay-right-category"><span>Category :</span>Women , T-Shirt, CropTop</p>
                    <p className="productdisplay-right-category"><span>Tags :</span>Modern, Latest</p>
                </div>
             </div>
        </div>
    );
}

export default ProductDisplay;
