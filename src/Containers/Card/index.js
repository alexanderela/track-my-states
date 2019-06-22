import React from 'react';
import './Card.css';

const Card = (props) => {
	return <div className='Card'>
		<h4>{props.usState}</h4>
	</div>
}

export default Card;