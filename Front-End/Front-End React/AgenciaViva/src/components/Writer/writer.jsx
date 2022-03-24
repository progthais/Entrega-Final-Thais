import React, { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect'

import './writer.css'

function Writer() {
	return (

			  
	
    <div className="writer">
		<Typewriter 
		
			options={{
				strings: ['A sua viagem dos sonhos', 'A sua melhor experiência', 'Só aqui na Viva! Viagens'],
				delay: 60,
				autoStart: true,
				loop: true,
				deleteSpeed: 70,
				
			}}
			
		/>
   
		
		
    </div>


    

	  
	)
 
	
	  
}

export default Writer

