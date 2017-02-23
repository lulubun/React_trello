import React from 'react';
import List from './list';

export default class ListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
            cards: ['stuff', 'nonsense']
        };

        //bind is needed for passing functions to children
        this.onAddInputChanged = this.onAddInputChanged.bind(this);
        this.onAddSubmit = this.onAddSubmit.bind(this);
    }

    onAddInputChanged(event) {
        this.setState({inputText: event.target.value});
    };

    onAddSubmit(event) {
        event.preventDefault();
        this.setState({ cards: this.state.cards.concat([this.state.inputText]) });
    };

    render(props) {
    	return (
            <div>{this.props.title}
                <List cards={this.state.cards}
                        onAddInputChanged={this.onAddInputChanged}
                        onAddSubmit={this.onAddSubmit}/>
            </div>    
        );
    }
}