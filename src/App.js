
import './App.css';
import { Journal } from './components/Journal';
import { Navbar } from './components/Navbar';
// import image from './components/images/Path.png';
import map from './components/images/locattion.png';
import Data from './Data';
import image1 from './components/images/Rectangle1.png'



function App() {
  const dataset = Data.map((item) =>{
    return(
      
      
      <Journal img={map}
      details={item}
      mountimg={image1}
      key= {item.id}
      
      
      />
    )

   

   
     
  })
  return (
    <div className="App">
    <Navbar/>
     {dataset}
    </div>
  );
}

export default App;
