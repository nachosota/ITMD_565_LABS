import React from 'react';

class DogSelect extends  React.Component{

  render(){
    return (
      <select onChange={this.props.selected}>
        {this.props.breeds.map(breed=>{
          if(breed === this.props.currentbreed){
               return(<option selected="selected" key={breed} value={breed}>{breed}</option>);
           }else{
            return(<option key={breed} value={breed}>{breed}</option>);
          }
      })}
      </select>
    );
  }
}

export default DogSelect;
