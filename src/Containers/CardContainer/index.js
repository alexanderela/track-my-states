import React from 'react';
import './CardContainer.css';
import Card from '../Card';

const CardContainer = ({ usStates }) => {

	const states = usStates.map(state => {
			return <Card usState={state} />
		})

	

	return (
		<div className='CardContainer'>
			{ states }
		</div>
	)
}

export default CardContainer;