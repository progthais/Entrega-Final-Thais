import React from 'react';
import './Cards.css';

 function Card () {
  return (
    <ul class="cards">
  <li>
    <a href="" class="card">
      <img src="./src/assets/londres.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src="../src/assets/madonna.jpg" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">Marcela Luísa Ciccone</h3>            
            <span class="card__status">Deu 5 estrelas</span>
          </div>
        </div>
        <p class="card__description">"Sempre vou viajar pela Viva!"</p>
      </div>
    </a>      
  </li>
  <li>
    <a href="" class="card">
      <img src="./src/assets/sydney.jpg" class="card__image" alt="" />
      <div class="card__overlay">        
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img class="card__thumb" src="../src/assets/marina.jpg" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">Marina Diamante</h3>
            <span class="card__status">Deu 5 estelas</span>
          </div>
        </div>
        <p class="card__description">"Sempre pensando nos clientes, amei a viagem para a Australia!"</p>
      </div>
    </a>
  </li>
  <li>
    <a href="" class="card">
      <img src="./src/assets/paris.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src="../src/assets/julian.jpg" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">Juliano Casa Branca</h3>
            <span class="card__tagline"></span>            
            <span class="card__status">Deu 5 estrelas</span>
          </div>
        </div>
        <p class="card__description">"A Viva Viagens me proporcionou uma ótima experiência!"</p>
      </div>
    </a>
  </li>
    
</ul>
  )
}
export default Card