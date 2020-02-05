import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
  const images = props.image.map((im) =>{
    console.log(im);
    return <ImageCard  key={im.id} image={im}/>
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
