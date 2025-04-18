import './App.css';
import { Carousel } from './Carousel/Carousel';
import capy1 from './img/capy1.jpg'
import capy2 from './img/capy2.jpg'
import capy3 from './img/capy3.jpg'


function App() {
  return (
    <Carousel>
      <div className='item'><img src={capy1} alt='capy 1'></img></div>
      <div className='item'><img src={capy2} alt='capy 2'></img></div>
      <div className='item'><img src={capy3} alt='capy 3'></img></div>
    </Carousel>
  );
}

export default App;
