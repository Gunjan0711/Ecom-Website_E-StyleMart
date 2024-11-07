import React from 'react';
import './DescriptionBox.css'

const DescriptionBox = () => {
    return ( 
        <div className='descriptionbox'>
          <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (222)</div>
          </div>
          <div className="descriptionbox-description">
            <p> An e-commerce website is an online platform that enables businesses to sell products or services directly to consumers. 
                It features product listings, detailed descriptions, and secure payment options, 
                making it easy for users to browse, select, and purchase items. With tools for customer accounts, order tracking, and promotional offers, 
                it enhances the shopping experience and encourages repeat business. Responsive design ensures accessibility across devices, catering to a 
                broad audience.
            </p>
            <p>
                 An e-commerce website is an online platform that facilitates buying and selling goods or services over the internet.An effective e-commerce 
                 website combines a user-friendly design with efficient functionality to enhance the shopping experience, 
                 ultimately driving sales and customer satisfaction.
            </p>
          </div>
        </div>
    );
}

export default DescriptionBox;