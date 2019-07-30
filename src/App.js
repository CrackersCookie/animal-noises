import React from 'react';
import './App.css';
import AddAnimals from './components/AddAnimals';
import dogNoise from './animalNoises/dog.mp3';
import catNoise from './animalNoises/cat.mp3';
import cowNoise from './animalNoises/cow.mp3';
import chickenNoise from './animalNoises/chicken.mp3';
import sheepNoise from './animalNoises/sheep.mp3';
import horseNoise from './animalNoises/horse.mp3';
import duckNoise from './animalNoises/duck.mp3';

class App extends React.Component {

  state = {
    animals: [{ animal: 'dog', sound: dogNoise, image: 'https://www.freepngimg.com/thumb/dog/2-dog-png-image-picture-download-dogs.png' }, { animal: 'cat', sound: catNoise, image: 'https://www.freepngimg.com/thumb/cat/19-cat-png-image-download-picture-kitten.png' }, { animal: 'cow', sound: cowNoise, image: 'https://www.freepngimg.com/thumb/cow/5-black-cow-png-image-download-picture.png' }, { animal: 'chicken', sound: chickenNoise, image: 'https://www.freepngimg.com/thumb/chick/21995-9-baby-chicken-transparent-image.png' }, { animal: 'sheep', sound: sheepNoise, image: 'https://www.freepngimg.com/thumb/sheep/1-little-sheep-png-image.png' }, { animal: 'horse', sound: horseNoise, image: 'https://i.dlpng.com/static/png/496331_preview.png' }, { animal: 'duck', sound: duckNoise, image: 'https://www.freepngimg.com/thumb/duck/14-little-duck-png-image.png' }]
  }


  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>Animal Noises</h1>
        </header>
        <section className="animals">
          <AddAnimals
            animals={this.state.animals}
            handleSound={this.handleSound} />
        </section>
      </div>
    );
  }

  handleSound = (soundurl) => {
    console.log(soundurl)
    const a = new Audio(soundurl);
    a.play();
    setTimeout(() => { a.pause() }, 2000);
  }

}

export default App;
