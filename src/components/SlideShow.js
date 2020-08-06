import React from 'react';
import { Carousel } from 'react-bootstrap';

export const SlideShow = (data) => {
  //const { data } = props;
  console.log(data.images);

  return (
    <div>
      <div className="container-fluid">
        <div className="row title" style={{ marginBottom: '20px' }}></div>
      </div>
      <div className="container-fluid">
        <Carousel>
          {data.images.map((item) => {
            return (
              <Carousel.Item
                key={item.key}
                style={{
                  height: '300px',
                  backgroundColor: 'blue',
                }}
              >
                <div className="center" style={{ justifyItems: 'center' }}>
                  <img
                    style={{ height: '100%', width: '75%', padding: '10' }}
                    //className="w-75"
                    src={item.url}
                    alt={item.name}
                  />
                </div>
                <Carousel.Caption>
                  <h3>{item.commentary}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
