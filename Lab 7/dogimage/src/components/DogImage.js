import React from 'react';

class DogImage extends  React.Component{

  render(){
    return (
      <img height="500" src={this.props.imgSrcUrl} />
    );
  }
}

export default DogImage;
