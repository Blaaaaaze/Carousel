import './App.css';
import { Carousel } from './Carousel/Carousel';
import capy1 from './img/capy1.jpg'
import capy2 from './img/capy2.jpg'
import capy3 from './img/capy3.jpg'


function App() {
  return (
    <Carousel>
      <div className='item item-1'><img src={capy1} style={{height: '100%', width: '100%'}}></img></div>
      <div className='item item-2'><img src={capy2} style={{height: '100%', width: '100%'}}></img></div>
      <div className='item item-3'><img src={capy3} style={{height: '100%', width: '100%'}}></img></div>
    </Carousel>
  );
}

export default App;
