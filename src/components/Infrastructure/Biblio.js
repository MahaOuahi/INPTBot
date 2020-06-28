import React from 'react';
import pic13 from './images/bib.jpg'
import pic14 from './images/14.jpg'
import pic15 from './images/15.jpg'

const Biblio = () => {
    return (
        <div className="container">
            <h4 className="center">Bibliothèque</h4>
            <div className="row card">
                
                <div className="col s12 m6 14">                    
                        <img src={pic14} class="responsive-img card materialbox" alt=""/>                             
                </div>
                <div className="col s12 m6 14">           
                        <img src={pic15} class="responsive-img card materialbox" alt=""/>               
                </div>
                <div className="col s12 m6 14">                  
                        <img src={pic13} class="responsive-img card materialbox" alt=""/>                  
                </div>
            </div>
        </div>
    )
}

export default Biblio