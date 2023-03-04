import './App.css';
import Card from './Card';
import poster from '../src/Images/ph1_small.png'
import poster1 from '../src/Images/ph1_big1.png'
import poster2 from '../src/Images/ph2_small.png'
import poster3 from '../src/Images/ph2_big.png'

function App() {
  return (
    <div className="App">
      <Card 
      poster={poster}
      h2='The Dark Night'
      p='2017 David Ayer'
      button='117min'
      span='Action, Drama'
      p1='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, neque cupiditate. Omnis alias voluptatibus molestiae iure, tempora tenetur modi aliquam.'
      poster1={poster1}
      />
      <Card 
      poster={poster2}
      h2='Black Phone'
      p='2019 vanish nayr'
      button='119min'
      span='Action, Drama, Creime'
      p1='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, neque cupiditate. Omnis alias voluptatibus molestiae iure, tempora tenetur modi aliquam.'
      poster1={poster3}
      />
    </div>
  );
}

export default App;
