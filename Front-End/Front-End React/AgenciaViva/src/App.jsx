import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Link,
	NavLink
} from 'react-router-dom'
import Home from "./Pages/Home/Home";
import Destinos from "./Pages/Destino";
import DestinosCreate from "./Pages/Destino/Create";

import Promocoes from "./Pages/Promocoes";
import PromocoesCreate from "./Pages/Promocoes/Create";

import React, { useEffect, useState } from "react";





function App() {
	
	return (
		
		<div ClassName="App">
		<Router>
			<Header />
			<Footer />    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Destinos" element={<Destinos />} />
        <Route path="/Destinos-Create" element={<DestinosCreate />} />
        <Route path="/Destinos-Update/:id" element={<DestinosCreate />} />

		<Route path="/Promocoes" element={<Promocoes />} />
		<Route path="/Promocoes-Create" element={<PromocoesCreate />} />
		<Route path="/Promocoes-Update/:id" element={<PromocoesCreate />} />


      </Routes>
    </Router>
			
  
				
		
		
		</div>

	)

	
	
}

export default App
