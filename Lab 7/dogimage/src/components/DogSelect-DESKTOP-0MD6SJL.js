import React from 'react';

class DogSelect extends  React.Component{

  render(){
    return (
      <select>
        {this.props.breeds.map(breed=>{
          if(breed === this.props.currentbreed){
              return(<option selected= "selected" value ={breed}>{breed}</option>);
          }else{
            return(<option value ={breed}>{breed}</option>);
          }

      })}
      </select>
    );
  }
}

export default DogSelect;
