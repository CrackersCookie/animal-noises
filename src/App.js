import React from 'react';
import './App.css';
import AddAnimals from './components/AddAnimals';
import dogNoise from './animalNoises/dog.mp3';
import catNoise from './animalNoises/cat.mp3';
import cowNoise from './animalNoises/cow.mp3';
import chickenNoise from './animalNoises/chicken.wav';
import sheepNoise from './animalNoises/sheep.mp3';
import horseNoise from './animalNoises/horse.wav';
import duckNoise from './animalNoises/duck.mp3';
import pigNoise from './animalNoises/pig.wav';
import goatNoise from './animalNoises/goat.wav';

class App extends React.Component {

  state = {
    animals: [{ animal: 'dog', sound: dogNoise, image: 'https://www.freepngimg.com/thumb/dog/2-dog-png-image-picture-download-dogs.png' }, { animal: 'cat', sound: catNoise, image: 'https://www.freepngimg.com/thumb/cat/19-cat-png-image-download-picture-kitten.png' }, { animal: 'cow', sound: cowNoise, image: 'https://i.dlpng.com/static/png/4051702-calves-png-dlpngcom-png-calf-400_333_preview.png' }, { animal: 'chicken', sound: chickenNoise, image: 'https://www.freepngimg.com/thumb/chick/21995-9-baby-chicken-transparent-image.png' }, { animal: 'sheep', sound: sheepNoise, image: 'https://www.freepngimg.com/thumb/sheep/1-little-sheep-png-image.png' }, { animal: 'horse', sound: horseNoise, image: 'https://i.dlpng.com/static/png/496331_preview.png' }, { animal: 'duck', sound: duckNoise, image: 'https://www.freepngimg.com/thumb/duck/14-little-duck-png-image.png' }, { animal: 'pig', sound: pigNoise, image: 'https://freepngimg.com/thumb/pig/1-pig-png-image.png' }, { animal: 'goat', sound: goatNoise, image: 'https://www.stickpng.com/assets/images/580b57fbd9996e24bc43bc17.png' }]
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
    const sound = new Audio(soundurl);
    sound.play();
    setTimeout(() => { sound.pause() }, 3000);
  }

}

export default App;
