import React from 'react';
import Card from './card';

export default class List extends React.Component {
  render(props) {
      let cardList = [];
      for(var i = 0; i < this.props.cards.length; i++) {
        cardList.push(<Card text={this.props.cards[i]} key={i} />);
      }
    return(
      <div>
        <div className="listOCards">
         {cardList}
        </div> 
        <div>
          <form className="cardInput" onSubmit={(e) => this.props.onAddSubmit(e)}>
            <input type="text" onChange={this.props.onAddInputChanged} />
            <input type="submit" value="Submit" />
          </form>
        </div>  
      </div>  
    );
  }  
}