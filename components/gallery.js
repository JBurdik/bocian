import gallery from '../styles/Gallery.module.scss';
import Image from 'next/dist/client/image';

// import images

const images = [
  {
    id: 1,
    imgSrc: '/img/photos/DupleX1.JPG',
  },
  {
    id: 2,
    imgSrc: '/img/photos/DupleX2.JPG',
  },
  {
    id: 3,
    imgSrc: '/img/photos/DupleX3.JPG',
  },
  {
    id: 4,
    imgSrc: '/img/photos/DupleX4.JPG',
  },
  {
    id: 5,
    imgSrc: '/img/photos/DupleX5.JPG',
  },
  {
    id: 6,
    imgSrc: '/img/photos/DupleX6.JPG',
  },
];

const Gallery = () => {
  return <div className={gallery.container}>

      {images.map((image, idx)=>{
          return(
              <div key={image.id}>
                  <Image src={image.imgSrc} alt="" width={180} height={180} />
              </div>
          )
      })}
  </div>;
};

export default Gallery;
