import React from'react';
import './App.css';


const Card = ({ name, type, id, info}) => {
	return (
		<div className=' tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
			<a target='_blank'  rel="noreferrer" href={`${info}`}><img id='mnstr' alt='' src={`${id}`}/></a>
			<div>
				<h2>{name}</h2>
				<p>{type}</p> 
			</div>
		</div>

	);
}

export default Card;