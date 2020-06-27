import React ,{ useEffect}from 'react'
import './HomePage.css' 
import pic1 from'./1.jpg' 
import bib from './bib.jpg'
import restau from './restau.jpg'
import residence from './residence.jpg'
import infirmerie from './infirmerie.jpg'
import sport from './sport.jpg'

import M from 'materialize-css'


 const HomePage =() =>{

  useEffect(()=>{
    let elements =document.querySelectorAll(".parallax");
    M.Parallax.init(elements);
    
  }, []);
 
  return (
<div>
    <div className="header">
    <nav class="nav-wrapper transparent">
      <div class="container">
        <a href="/" class="brand-logo">INPT</a>
        <a href="/" class="sidenav-trigger" data-target="mobile-menu">
          <i class="material-icons">menu</i>
        </a>
        <ul class="right hide-on-med-and-down">
          <li><a href="#photos">Photo's</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="/" class="tooltipped btn-floating btn-small indigo " data-position="bottom" data-tooltip="Instagram"> 
            <i class="fa fa-instagram"></i>
          </a></li>
          <li><a href="#" class="tooltipped btn-floating btn-small indigo " data-position="bottom" data-tooltip="Facebook">
            <i class="fa fa-facebook"></i>
          </a></li>
          <li><a href="#" class="tooltipped btn-floating btn-small indigo " data-position="bottom" data-tooltip="Twitter">
            <i class="fa fa-twitter"></i>
          </a></li>
        </ul>
        <ul class="sidenav grey lighten-2" id="mobile-menu">
          <li><a href="#">Photo's</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
   </div>

     <div class="container section scrollspy" id="photos">
          <div class="row">
              <div class="col s12 l4">
                  <img src={residence} alt="" class="responsive-img materialboxed"/>
              </div>
              <div class="col s12 l6 offset-l1">
              <a href="#"><h2 class="indigo-text text-darken-4">Résidence</h2></a>
                   <p>Bénéficiez de l'infrastructure résidentielle de l'INPT qui se compose de 3 pavillons.</p>
             </div>
     </div>
     <div class="row">
             <div class="col s12 l4 offset-l1 push-l7">
                  <img src={infirmerie} alt="" class="responsive-img materialboxed"/>
            </div>
            <div class="col s12 l6 offset-l1 pull-l5 right-align">
            <a href="#"><h2 class="indigo-text text-darken-4">Infirmerie</h2></a>
                 <p>Les étudiants bénéficient des soins médicaux et para-médicaux à titre gratuit au sein de l’infirmerie de l’école.</p>
           </div>
    </div>
     <div class="row">
             <div class="col s12 l4">
                 <img src={sport} alt="" class="responsive-img materialboxed"/>
            </div>
           <div class="col s12 l6 offset-l1">
           <a href="#"><h2 class="indigo-text text-darken-4">Infrastructure sportive</h2></a>
             <p>Une salle de sport, des terrains et un bureau des sports qui gère avec le comité sport l’ensemble des activités sportives.</p>
           </div>
    </div>
    <div class="row">
             <div class="col s12 l4 offset-l1 push-l7">
                  <img src={restau} alt="" class="responsive-img materialboxed"/>
            </div>
            <div class="col s12 l6 offset-l1 pull-l5 right-align">
                  <a href="#"><h2 class="indigo-text text-darken-4">Restaurant et Cafétéria</h2></a>
                 <p>un restaurant servant jusqu'à 1200 repas par jour et une cafétéria.</p>
           </div>
    </div>
    <div class="row">
             <div class="col s12 l4">
                 <img src={bib} alt="" class="responsive-img materialboxed"/>
            </div>
           <div class="col s12 l6 offset-l1">
           <a href="#"><h2 class="indigo-text text-darken-4">Bibliothèque</h2></a>
             <p>un lieu d'information, d'accueil, d'échange et de communication qui fait environ 800 m² de superficie.</p>
           </div>
    </div>
  </div>


  <div class="parallax-container">
    <div class="parallax">
      <img src={pic1} alt="" class="responsive-img"/>
    </div>
  </div>


  <div class="section container scrollspy" id="services">
    <div class="row">
      <div class="col s12 l4">
        <h2 class="indigo-text text-darken-4">What I do..</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
        <p>Mauris dolor augue, vulputate in pharetra ac, facilisis nec libero. Fusce condimentum gravida urna, vitae scelerisque erat ornare nec.</p>
      </div>
      <div class="col s12 l6 offset-l2">
        
        <ul class="tabs">
          <li class="tab col s6">
            <a href="#photography" class="active indigo-text text-darken-4">Photography</a>
          </li>
          <li class="tab col s6">
            <a href="#editing" class="indigo-text text-darken-4">Editing</a>
          </li>
        </ul>
        <div id="photography" class="col s12">
            <p class="flow-text indigo-text text-darken-4">Photography</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
            <p>Mauris dolor augue, vulputate in pharetra ac, facilisis nec libero. Fusce condimentum gravida urna, vitae scelerisque erat ornare nec.</p>
        </div>
        <div id="editing" class="col s12">
            <p class="flow-text indigo-text text-darken-4">Editing</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
            <p>Mauris dolor augue, vulputate in pharetra ac, facilisis nec libero. Fusce condimentum gravida urna, vitae scelerisque erat ornare nec.</p>
        </div>
        </div>
      </div>
    </div>
    <div class="parallax-container">
    <div class="parallax">
      <img src={pic1} alt="" class="responsive-img"/>
    </div>
  </div>

  <div class="section container scrollspy" id="contact">
    <div class="row">
      <div class="col s12 l5">
        <h2 class="indigo-text text-darken-4">Get in Touch</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
        <p>Mauris dolor augue, vulputate in pharetra ac, facilisis nec libero. Fusce condimentum gravida urna, vitae scelerisque erat ornare nec.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
        <p>Mauris dolor augue, vulputate in pharetra ac, facilisis nec libero. Fusce condimentum gravida urna, vitae scelerisque erat ornare nec.</p>
      </div>
      <div class="col s12 l5 offset-l2">
        <form>
          <div class="input-field">
            <i class="material-icons prefix">email</i>
            <input type="email" id="email"/>
            <label for="email">Your Email</label>
          </div>
          <div class="input-field">
            <i class="material-icons prefix">message</i>
            <textarea id="message" class="materialize-textarea" cols="20" rows="20"></textarea>
            <label for="message">Your Message</label>
          </div>
          <div class="input-field">
            <i class="material-icons prefix">date_range</i>
            <input type="text" id="date" class="datepicker"/>
            <label for="date">Choose a date you need me for...</label>
          </div>
          <div class="input-field">
            <p>Services required:</p>
            <p>
              <label>
                <input type="checkbox"/>
                <span>Photography</span>
              </label>
            </p>
            <p>
              <label>
                <input type="checkbox"/>
                <span>Photo Editing</span>
              </label>
            </p>
          </div>
          <div class="input-field center">
            <button class="btn">Submit</button>
          </div>
        </form>
      </div>


    </div>
  </div>
  <footer class="page-footer grey darken-3">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5>About Me</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">Connect</h5>
          <ul>
            <li><a class="grey-text text-lighten-3" href="#">Facebook</a></li>
            <li><a class="grey-text text-lighten-3" href="#">Twitter</a></li>
            <li><a class="grey-text text-lighten-3" href="#">Linked In</a></li>
            <li><a class="grey-text text-lighten-3" href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright grey darken-4">
      <div class="container center-align">&copy; 2018 Photo Ninja</div>
    </div>
  </footer>


  </div>


  )}

export default HomePage