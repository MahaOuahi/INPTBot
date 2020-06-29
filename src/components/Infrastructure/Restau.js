import React from 'react';
import pic12 from './images/restau.jpg'


const Restau = () => {
    return (
        <div className="container">
            <h4 className="center">Restaurant</h4>
            <div className="row card center">
                    <img src={pic12} class="responsive-img card materialbox" alt=""/>
            </div>
        </div>
    )
}

export default Restau