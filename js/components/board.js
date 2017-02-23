import React from 'react';
import ListContainer from './list-container';

export default function Board(props) {
  return (
  	<div className="board">
    	<div>{props.title}</div>
		  <div className='lists'>
			  <ListContainer title='All Lists'/>
		  </div>
	  </div>
	);
}
