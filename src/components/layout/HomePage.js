
import {Link} from 'react-router-dom'
import React,{Component} from 'react'
import './HomePage.css' 
import pic1 from'./1.jpg' 
import bib from './bib.jpg'
import restau from './restau.jpg'
import residence from './residence.jpg'
import infirmerie from './infirmerie.jpg'
import sport from './sport.jpg'
import M from 'materialize-css'



 export default class HomePage extends Component{

  componentDidMount() {
    M.AutoInit();
  }

 render(){
  return (
<div>

    <div className="cb-slideshow">
   
  
    <nav class="nav-wrapper transparent fixed">
      <div class="container">
        <a href="/" class="brand-logo ">INPT</a>
        <a href="/" class="sidenav-trigger" data-target="mobile-menu">
          <i class="material-icons">menu</i>
        </a>
        <ul class="right hide-on-med-and-down">
          
          <li><a href="https://www.instagram.com/inptrabat/?hl=fr" class="tooltipped btn-floating btn-small indigo " data-position="bottom" data-tooltip="Instagram"> 
            <i class="fab fa-instagram"></i>
          </a></li>
          <li><a href="https://www.facebook.com/www.inpt.ac.ma/" class="tooltipped btn-floating btn-small indigo " data-position="bottom" data-tooltip="Facebook">
            <i class="fab fa-facebook"></i>
          </a></li>
          <li><a href="https://twitter.com/INPTRabat" class="tooltipped btn-floating btn-small indigo " data-position="bottom" data-tooltip="Twitter">
            <i class="fab fa-twitter"></i>
          </a></li>
          <li><a href="https://www.linkedin.com/in/inpt-rabat-370378a6/" class="tooltipped btn-floating btn-small indigo " data-position="bottom" data-tooltip="Linkedin">
            <i class="fab fa-linkedin"></i>
          </a></li>
          <li><a href="http://inpt.ac.ma/fr" class="tooltipped btn-floating btn-small indigo " data-position="bottom" data-tooltip="WebSite">
            <i class="fa fa-globe"></i>
          </a></li>
          <li><a href="#photos" class="tooltipped btn-floating btn-small indigo " data-position="bottom" data-tooltip="FAQ"><i class="fa fa-question"></i></a></li>
          <li><a href="#services" class="tooltipped btn-floating btn-small indigo " data-position="bottom" data-tooltip="Campus"><i class="fa fa-building"></i></a></li>
          <li><a href="#contact" class="tooltipped btn-floating btn-small indigo "data-position="bottom" data-tooltip="Contactez-nous"><i class="fa fa-envelope"></i></a></li>
          
        </ul>
        <ul class="sidenav grey lighten-2" id="mobile-menu">
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
    <ul class="cb-slideshow">
	<li>
		<span></span>
		<div>
			<h3>Bienvenue à L'Institut National des Postes et Télécommunications</h3>
		</div>
    
	</li>
  <li>
		<span></span>
		<div>
			<h3>Plusieurs services sont développés pour faciliter la vie des étudiants au sein du Campus</h3>
		</div>
    
	</li>
  <li>
		<span></span>

	</li>
  <li>
		<span></span>
		
    
	</li>
  <li>
		<span></span>
		
    
	</li>
  <li>
		<span></span>
		
    
	</li>
	
</ul>
    
          
              
   </div>

     <div class="container section scrollspy" id="services">
          <div class="row">
              <div class="col s12 l4">
                  <img src={residence} alt="" class="responsive-img materialboxed"/>
              </div>
              <div class="col s12 l6 offset-l1">
              <Link to="/residence"><h2 class="indigo-text text-darken-4">Résidence</h2></Link>
                   <p>Bénéficiez de l'infrastructure résidentielle de l'INPT qui se compose de 3 pavillons.</p>
             </div>
     </div>
     <div class="row">
             <div class="col s12 l4 offset-l1 push-l7">
                  <img src={infirmerie} alt="" class="responsive-img materialboxed"/>
            </div>
            <div class="col s12 l6 offset-l1 pull-l5 right-align">
            <Link to="/infirmerie"><h2 class="indigo-text text-darken-4">Infirmerie</h2></Link>
                 <p>Les étudiants bénéficient des soins médicaux et para-médicaux à titre gratuit au sein de l’infirmerie de l’école.</p>
           </div>
    </div>
     <div class="row">
             <div class="col s12 l4">
                 <img src={sport} alt="" class="responsive-img materialboxed"/>
            </div>
           <div class="col s12 l6 offset-l1">
           <Link to="/sport"><h2 class="indigo-text text-darken-4">Infrastructure sportive</h2></Link>
             <p>Une salle de sport, des terrains et un bureau des sports qui gère avec le comité sport l’ensemble des activités sportives.</p>
           </div>
    </div>
    <div class="row">
             <div class="col s12 l4 offset-l1 push-l7">
                  <img src={restau} alt="" class="responsive-img materialboxed"/>
            </div>
            <div class="col s12 l6 offset-l1 pull-l5 right-align">
                  <Link to="/restaurant"><h2 class="indigo-text text-darken-4">Restaurant et Cafétéria</h2></Link>
                 <p>un restaurant servant jusqu'à 1200 repas par jour et une cafétéria.</p>
           </div>
    </div>
    
    <div class="row">
             <div class="col s12 l4">
                 <img src={bib} alt="" class="responsive-img materialboxed"/>
            </div>
           <div class="col s12 l6 offset-l1">
           <Link to="/bibliotheque"><h2 class="indigo-text text-darken-4">Bibliothèque</h2></Link>
             <p>un lieu d'information, d'accueil, d'échange et de communication qui fait environ 800 m² de superficie.</p>
           </div>
    </div>
  </div>


  <div class="parallax-container">
    <div class="parallax">
      <img src={pic1} alt="" class="responsive-img"/>
    </div>
  </div>


  <div class="section container scrollspy" id="photos">
    <div class="row">
      <div class="col s12 l4">
        <Link to="/faq"><h2 class="indigo-text text-darken-4">FAQ</h2></Link>
        <p>Notre foire aux questions met à votre disposition vos questions les plus fréquentes accompagnées des réponses correspondantes.</p>
        <p>Trouvez les réponses à vos questions concernant la résidence, la restauration, l'infirmerie la bibliothèque et les activités sportives.</p>
      </div>
      <div class="col s12 l6 offset-l2">
        
        <div id="photography" class="col s12">
            <p class="flow-text indigo-text text-darken-4">Vos questions</p>
            <p>Quels sont les frais d'inscription à l'internat? </p>
            <p>Est-ce que le WiFi est offert?</p>
            <p>Quels sont les activités sportives disponibles à l’INPT?</p>
            <p>Quels sont les horaires de la salle de sport?</p>
            <p>Quels sont les jours de travail du médecin?</p>
            <Link to="/faq">
              <button class="btn waves-effect waves-light" type="submit" name="action">Voir la communauté d'aide
                <i class="material-icons right">send</i>
              </button>
            </Link>
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
        <h2 class="indigo-text text-darken-4">Réclamations</h2>
        <p>Votre moyen le plus simple pour envoyer une réclamation.</p>
        <p>Si vous avez un problème dans votre chambre qui nécessite la réparation, vous avez besoin d'un article ou de l'aide, cet espace est pour vous.</p>
        <p>Entrez votre adresse mail valide pour que nous puissions vous répondre et vous aider. Ensuite, rédigez votre réclamation.</p>
        <p>Nous sommes là pour vous. Restons en contact!</p>
      </div>
      <div class="col s12 l5 offset-l2">
        <form>
          <div class="input-field">
            <i class="material-icons prefix">email</i>
            <input type="email" id="email"/>
            <label for="email">Votre Email</label>
          </div>
          <div class="input-field">
            <i class="material-icons prefix">message</i>
            <textarea id="message" class="materialize-textarea" cols="20" rows="20"></textarea>
            <label for="message">Votre Message</label>
          </div>
          
          <div class="input-field center">
            <button class="btn">Envoyer</button>
          </div>
        </form>
      </div>


    </div>
  </div>
  <footer class="page-footer grey darken-3">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5>A propos de nous</h5>
          <p>Nous sommes des étudiants en deuxième année de la filière Système Ubiquitaires et Distribués - Cloud et IoT à l'Institut National des Postes et Télécommunications.</p>
          <p>Dans le cadre de notre projet professionnel et personnel de fin d'année, nous avons développé cette application web avec un ChatBot intégré pour répondre aux questions des étudiants de l'institut.</p>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">Equipe</h5>
          <ul>
            <li>Salma BIDEQ</li>
            <li>Wahiba ZAHNOUN</li>
            <li>Maha OUAHI</li>
            <li>Hamza BENNIS</li>
            <li>Taha CHAKIR</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright grey darken-4">
      <div class="container center-align">&copy; 2020 SUD</div>
    </div>
  </footer>


  </div>


  )}}

