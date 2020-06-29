import React from 'react';
import pic1 from './images/1.jpg'
import pic2 from './images/2.jpg'
import pic3 from './images/3.jpg'
import pic4 from './images/4.jpg'
import pic5 from './images/5.jpg'
import pic6 from './images/6.jpg'

const Residence = () => {
    return (
        <div className="container ">
            <h4 className="center">Résidence</h4>
            
            <div className="row card">
                <div className="col s12 m6 14">
                    <img src={pic3} class="responsive-img card materialbox" alt=""/>
                </div>
                <div className="col s12 m6 14">
                    <img src={pic1} class="responsive-img card materialbox" alt=""/>
                </div>
                <div className="col s12 m6 14">
                    <img src={pic2} class="responsive-img card materialbox" alt=""/>
                </div>
                

                <div className="col s12 m6 14">
                    <img src={pic4} class="responsive-img card materialbox" alt=""/>
                </div>
                <div className="col s12 m6 14">
                    <img src={pic5} class="responsive-img card materialbox" alt=""/>
                </div>
                <div className="col s12 m6 14">
                    <div className="card">
                        <img src={pic6} class="responsive-img card materialbox" alt=""/>
                    </div>

                    
                </div>

            </div>

        </div>

    )
}

export default Residence