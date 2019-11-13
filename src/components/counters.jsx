import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    render() { 
        console.log('Counters - Rendered');
        const {onReset, counters, onDelete, onIncrement} = this.props;
        return (
            <div>
                <button 
                className="btn btn-primary btn-sm m-2"
                onClick={onReset}
                >
                    Reset
                </button>
                {counters.map(counter => (
                <Counter 
                    onDelete={onDelete}
                    onIncrement={onIncrement} 
                    key={counter.id} 
                    counter={counter}
                />
                ))}
            </div>  
        );
    }
}
 
export default Counters;