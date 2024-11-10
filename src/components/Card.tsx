import React from 'react';
import Image from 'next/image';
import './Card.css';

interface propsType {
    title: string;
    desc: string;
    img: string;
    tags: string[];
}

const Card: React.FC<propsType> = ({ title, desc, img, tags }) => {
  return (
    <div className="card-container" data-aos="zoom-in-up">
      <div>
        <Image
          className="card-image"
          src={img}
          width={350}
          height={350}
          alt={title}
        />
      </div>
      <div className="card-content">
        <div className="card-title">{title}</div>
        <div className="card-desc">{desc}</div>
        <div className="card-tags">
          {tags.map((tag) => (
            <div className="tag" key={tag}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
