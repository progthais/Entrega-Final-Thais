import Type from '../../components/Writer/writer';

import Cards from '../../components/Cards/Cards';

import './Home.css';
const Home = () => {
  return (
    <div className="bg">
      <div id="conteudo">

      <div class="container">
      <div class="jumbotron">
  <h1 class="display-4"><Type></Type></h1>
  <hr class="my-4"/>
  <p class="lead">Com a Viva Viagens você já sabe o que esperar.</p>
  <hr class="my-4"/>
  <p>Não se preocupe, cuidamos de cada passo da sua viagem com todo o 
cuidado que você merece.</p>

<p>Temos diversos destinos 
para que sua viagem seja única.</p>

  <a class="btn btn-primary btn-lg" href="/Destinos" role="button">Entrar</a>
</div>


<hr/>

<h1 class="display-2">Nossas Avaliações <span class="glyphicon glyphicon-star"></span></h1>

      <Cards></Cards>

</div>


</div>
  
      

      
     
  
   

    </div>
    
  )
}

export default Home