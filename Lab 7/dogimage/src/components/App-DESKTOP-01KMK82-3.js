import React from 'react';
import img from '../images/logo.svg';
//import DogImage from './DogImage';
//import DogSelect from './DogSelect';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imgSrcUrl: 'https://images.dog.ceo/breeds/hound-english/n02089973_2599.jpg',
      breed: 'hound-english',
      //breeds: []
    };
    //this.saveBreed = this.saveBreed.bind(this);
    //this.fetchNewImage = this.fetchNewImage.bind(this);

  }
/*
  componentDidMount(){
    console.log('--componentDidMount--');
    //get all the breeds
    fetch('https://dog.ceo/api/breeds/list/all').then((res) => {
        return res.json();
    }).then((json) => {
        this.setState({
            breeds: json.message
        });
    //set a random state
    this.setState((currentState)=>{
      return{
        breed: breeds[Math.floor(Math.random()*this.state.breeds.length)]
      };
    });
    //get an image with the current breed
    fetchNewImage();
    });
  }

  saveBreed(e){
    let val = e.target.value;
    this.setState(currentState => {
      breed : val
    });
  }
  fetchNewImage(){
    //get an image with the current breed
    fetch('https://dog.ceo/api/breed/'+this.state.breed+'/images/random').then((res) => {
        return res.json();
    }).then((json) => {
        this.setState({
            imgSrcUrl: json.message
        });
  }
*/

  render() {
    return(
      <div style={{textAlign: 'center'}}>
      <h1>Breed Dog Image Generator</h1>
      <h2>Jose Ignacio Sota Fernandez-Martos - jsotafernandezmartos@hawk.iit.edu - ITMD 565</h2>
      <p>Please Press the button to generate a new random image</p>
      <hr/>
      <img height="500" src={this.state.imgSrcUrl} />
      </div>

    );

        //
        //
        //
        //<DogSelect onChange= {this.saveBreed} breeds={this.state.breeds}/>
        //<button onClick={this.fetchNewImage}>Fetch</button>
        //
        //<img height="500" src={this.state.imgSrcUrl} />
        //<DogImage imgSrcUrl={this.state.imgSrcUrl}/>
  }
}

export default App;
