import React from "react";
import data from './data';
import './index.css'

function Card(props) {
    const cardData = data.find(item => item.sname === props.sname);

    return (
      <>
        <div className='cards'>
            <div className='card'>
                <img src={cardData.imgsrc} alt='myPic' className='card_img'/>
                <div className='card_info'>
                    <span className='card_category'> {cardData.title} </span>
                    <h3 className='card_title'> {cardData.sname} </h3>
                    <a href={cardData.links} target='_blank'>
                        <button> Watch Now </button>
                    </a>
                </div>
            </div>
        </div>
      </>
    );
}

export default Card;