import React from 'react'

import {
	BrowserRouter as Router,
	Route,
	Routes,
	Link,
	NavLink
} from 'react-router-dom'
import './Header.css'

function Header() {
	return (
		
		
	<header>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
  <a class="navbar-brand" href="#">
      <img src="../src/assets/icone.png" alt="" width="35" height="50" class="d-inline-block align-text-center"/>
     Viva! Viagens, a sua agência de viagens favorita.
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav align-text-right">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/">Home <span class="glyphicon glyphicon-home"></span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Destinos">Destinos  <span class="
glyphicon glyphicon-map-marker"></span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Promocoes">Promoções <span class="glyphicon glyphicon-gift"></span></a>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
	</header>
	)
}
export default Header
