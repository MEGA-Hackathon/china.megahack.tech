import React from 'react';
import Styles from './Card.module.css'; // Import your CSS module for card styles

function Card({ imageUrl, title, text }) {
    return (
        <div className={Styles.card}>
            <img src={imageUrl} alt={title} className={Styles.image} />
            <h2 className={Styles.title}>{title}</h2>
            <p className={Styles.text}>{text}</p>
        </div>
    );
}

export default Card;
