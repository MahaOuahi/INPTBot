import React from 'react';
import pic7 from './images/7.jpg'
import pic8 from './images/8.jpg'
import pic9 from './images/9.jpg'
import pic10 from './images/10.jpg'


const Sport = () => {
    return (
        <div className="container ">
            <h4 className="center">Infrastructure sportive</h4>
            
            <div className="row card">

                <div className="col s12 m6 14">                  
                        <img src={pic7} class="responsive-img card materialbox" alt=""/>                  
                </div>
                <div className="col s12 m6 14">                    
                        <img src={pic8} class="responsive-img card materialbox" alt=""/>                             
                </div>
                <div className="col s12 m6 14">           
                        <img src={pic9} class="responsive-img card materialbox" alt=""/>               
                </div>
                <div className="col s12 m6 14">                    
                        <img src={pic10} class="responsive-img card materialbox" alt=""/>                   
                </div>
               
            </div>

        </div>

    )
}

export default Sport