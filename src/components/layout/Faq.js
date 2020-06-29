import React, {Component} from 'react'
import M from 'materialize-css'
import firebase from './keys';

const Faq = () => {
  
  /*componentDidMount= () => {
      let elems = document.querySelectorAll('.collapsible.popout');
       M.Collapsible.init(elems, {});

      }*/

   
const [FAQ, setfaq] = React.useState([]);
  

  React.useEffect(() => {
    let elems = document.querySelectorAll('.collapsible.popout');
       M.Collapsible.init(elems, {});
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("FAQ").get();
      setfaq(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  

  
    return (
     <div>
      <nav class="nav-wrapper transparent fixed">
      <div class="container">
        <a href="/" class="brand-logo blue-text text-darken-4 left-align">INPT</a>
        <a href="/" class="sidenav-trigger" data-target="mobile-menu">
          <i class="material-icons">menu</i>
        </a>
        <ul class="right hide-on-med-and-down">
          <li><a href="/residence" class="blue-text text-darken-2">Résidence</a></li>
          <li><a href="/infirmerie" class="blue-text text-darken-2">Infirmerie</a></li>
          <li><a href="/sport" class="blue-text text-darken-2">Infrastructure sportive</a></li>
          <li><a href="/restaurant" class="blue-text text-darken-2">Restaurant et Cafétéria</a></li>
          <li><a href="/bibliotheque" class="blue-text text-darken-2">Bibliothèque</a></li>
          
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
          <li><a href="http://inpt.ac.ma/fr" class="tooltipped btn-floating btn-small indigo " data-position="bottom" data-tooltip="Linkedin">
            <i class="fa fa-globe"></i>
          </a></li>
        </ul>
        <ul class="sidenav grey lighten-2" id="mobile-menu">
        <li><a href="/residence" class="blue-text text-darken-2">Résidence</a></li>
          <li><a href="/infirmerie" class="blue-text text-darken-2">Infirmerie</a></li>
          <li><a href="/sport" class="blue-text text-darken-2">Infrastructure sportive</a></li>
          <li><a href="/restaurant" class="blue-text text-darken-2">Restaurant et Cafétéria</a></li>
          <li><a href="/bibliotheque" class="blue-text text-darken-2">Bibliothèque</a></li>
        </ul>
      </div>
    </nav>
      <ul className="collapsible popout">
      
        {FAQ.map(spell => (
      <li>
           <div className="collapsible-header"><span>{spell.Question}</span></div>
          <div className="collapsible-body"><span>{spell.Answer}</span></div>
          </li>  
      ))}
     
       
      </ul>
      </div>      
    )
      
    }
  




export default Faq