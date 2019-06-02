import React from 'react';
import img from '../images/logo.svg';
import DogImage from './DogImage';
import DogSelect from './DogSelect';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imgSrcUrl: '',
      breed: '',
      breeds: []
    };
    this.saveBreed = this.saveBreed.bind(this);
    this.fetchNewImage = this.fetchNewImage.bind(this);

  }

  componentDidMount(){
    console.log('--componentDidMount--');
    //get all the breeds
    fetch('https://dog.ceo/api/breeds/list/all').then((res) => {
        return res.json();
    }).then((json) => {
        this.setState({
            breeds: Object.keys(json.message)
        });
    //set a random state
    console.log('here');
    this.setState((currentState)=>{
      return{
        breed: Object.keys(json.message)[Math.floor(Math.random()*this.state.breeds.length)]
      };
    });
    });
    console.log();
    console.log('note'+this.state.breed);
    //get an image with the current breed
    fetch('https://dog.ceo/api/breed/'+this.state.breed+'/images/random').then((res) => {
        return res.json();
    }).then((json) => {
      console.log(json.message);
        this.setState({
            imgSrcUrl: json.message
        });
      });
  }

  saveBreed(e){
    let val = e.target.value;
    console.log('selected breed:'+val);
    this.setState((currentState) => {
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
      });
  }


  render() {
    return(
      <div style={{textAlign: 'center'}}>
      <h1>Breed Dog Image Generator</h1>
      <h2>Jose Ignacio Sota Fernandez-Martos - jsotafernandezmartos@hawk.iit.edu - ITMD 565</h2>
      <p>Please Press the button to generate a new random image</p>
      <DogSelect onChange= {this.saveBreed} breeds={this.state.breeds}/>
      <button onClick={this.fetchNewImage}>Fetch</button>
      <hr/>
      <DogImage imgSrcUrl={this.state.imgSrcUrl}/>
      </div>
    );
  }
}

export default App;
