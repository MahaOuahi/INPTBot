import React ,{ Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import './HomePage.css' 
import {addReclamation} from '../../store/actions/reclamationActions'

import pic1 from'./1.jpg' 
import bib from './bib.jpg'
import restau from './restau.jpg'
import residence from './residence.jpg'
import infirmerie from './infirmerie.jpg'
import sport from './sport.jpg'

import M from 'materialize-css'



 class HomePage extends Component {
  state={
    email:'',
    message:''
  }
  
  componentDidMount() {
    let elements =document.querySelectorAll(".parallax");
    M.Parallax.init(elements);
}
handleChange = (e) => {
  this.setState({
    [e.target.id]: e.target.value
  })
}
handleSubmit = (e) => {
  e.preventDefault();
    //console.log(this.state);
    this.props.addReclamation(this.state)
}
render () {
  console.log(this.props);
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
  
  
    <div class="section container scrollspy" id="services">
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
          <form onSubmit={this.handleSubmit}>
            <div class="input-field">
              <i class="material-icons prefix">email</i>
              <input type="email" id="email" onChange={this.handleChange}/>
              <label for="email">Votre Email</label>
            </div>
            <div class="input-field">
              <i class="material-icons prefix">message</i>
              <textarea id="message" class="materialize-textarea"
               cols="20" rows="20" onChange={this.handleChange}></textarea>
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
  
  
    )}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addReclamation: (reclamation) => dispatch(addReclamation(reclamation))
  }
}

export default connect(null, mapDispatchToProps)(HomePage)