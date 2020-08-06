import React from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import api from '../services/api';
import { SlideShow } from './SlideShow';

export const Gallery = () => {
  const [images, setImages] = React.useState({});

  const SettingImages = (data) => {
    setImages(data);
  };

  React.useEffect(() => {
    api.get('/posts').then(function (response) {
      console.log('Response.data');
      console.log(response.data);
      const imgs = response.data;
      console.log(imgs);
      SettingImages(imgs);
      const imgsgallery = imgs.map(function (img) {
        const i = { original: img.url, thumbnail: img.url };
        return i;
      });

      //console.log(!!imgsgallery);

      //console.log(response.status);
      //console.log(images);
    });
  }, []);

  return <div>{images.length > 0 ? <SlideShow images={images} /> : null}</div>;
};
