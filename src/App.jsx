 import Navbar from './componets/NAVBAR/Navbar';
import './app.css';
import Cards from './componets/Main/Cards';
import Image from './componets/Main/Image/Img8.png' 
import Img7 from './componets/Main/Image/Img7.jpg' 
import Img3 from './componets/Main/Image/Img3.jpg'
import Img2 from './componets/Main/Image/Img2.png'
import Img4 from './componets/Main/Image/Img4.jpg'
import Img5 from './componets/Main/Image/Img5.jpg'
import Img6 from './componets/Main/Image/Img6.jpg'
import Img1 from './componets/Main/Image/Img1.png'

var sdata =[{'Image':Image},{'Image':Img3},{'Image':Img7},{'Image':Img2},{'Image':Img4},{'Image':Img5},{'Image':Img6},{'Image':Img1}]





function App() {
  return(
    <>
    <Navbar/>
   
   {sdata.map((item) => {
    return <Cards img={item.Image}/>

   })}
       
  
   
  
  

  </>
  )
}

export default App;
