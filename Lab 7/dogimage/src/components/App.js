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
      this.setState((currentState)=>{
        return{
          breed: Object.keys(json.message)[Math.floor(Math.random()*this.state.breeds.length)]
        };
      });
    }).then(()=>{
      //get an image with the current breed
      fetch('https://dog.ceo/api/breed/'+this.state.breed+'/images/random').then((res) => {
        return res.json();
      }).then((json) => {
        this.setState({
          imgSrcUrl: json.message
        });
      });
    });
  }

  saveBreed(e){
    let val = e.target.value;
    this.setState((currentState)=> {
      return{
        breed : val};
    },
    this.fetchNewImage//callback
  );
  }

  fetchNewImage(){
    //get an image with the current breed
    fetch('https://dog.ceo/api/breed/'+this.state.breed+'/images/random').then((res) => {
        return res.json();
    }).then((json) => {
        this.setState((currentState)=>{
//when do you put return?????????
          return{
            imgSrcUrl: json.message
          };
        });
      });
  }


  render() {
    return(
      <div style={{textAlign: 'center'}}>
      <h1>{this.state.breed} Dog Image Generator</h1>
      <h2>Jose Ignacio Sota Fernandez-Martos - jsotafernandezmartos@hawk.iit.edu - ITMD 565</h2>
      <p>Please Press the button to generate a new random image</p>
      <DogSelect selected={this.saveBreed} breeds={this.state.breeds} currentbreed={this.state.breed}/>
      <button onClick={this.fetchNewImage}>Fetch</button>
      <hr/>
      <DogImage imgSrcUrl={this.state.imgSrcUrl}/>
      </div>
    );
  }
}

export default App;
