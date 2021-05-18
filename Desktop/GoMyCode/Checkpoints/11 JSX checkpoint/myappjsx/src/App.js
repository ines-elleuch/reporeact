import './App.css';
import Mypinkrose from "./pink/pinkrose.jpg"


function App() {
  return (
<div style= {{border:"solid 1px black", maxWidth:"100vw"}}>

<h1 className="Myname">Ines Elleuch</h1>
<br/>

<img className="photos" src={Mypinkrose} alt="my Image" width="600"/> 
<br />

<img className="photos" src="bluerose.jpg" alt="my second Image" width="600"/>


<iframe width="700" height="500" src="https://www.youtube.com/embed/3Ba_WoSZXvw" title="YouTube video player"/>

</div>   
  );
}

export default App;

