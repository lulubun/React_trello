import React from 'react';
import ReactDOM from 'react-dom';

export default function Card(props) {
    return (

        <div className="cards">
			{props.text}
		</div>
    );
}