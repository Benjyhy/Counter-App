import React, { Component } from 'react';
import { brotliDecompress } from 'zlib';

class Counter extends Component {
    state = {
        value: this.props.value   
    };

    handleIncrement = product => {
        console.log(product);
        this.setState({value: this.state.value + 1});
    };
    
    doHandleIncrement = () => {
        this.handleIncrement({id: 1});
    }

    renderTags () {
        if (this.state.tags.length === 0) return <p>There are no tags !</p>;
        return <ul>
            { this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }
        </ul>
    };

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;        
    };

    formatCount() {
        const {value: count} = this.state;
        return count === 0 ? "Zéro" : count;
    };

    render() { 
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                 onClick={this.doHandleIncrement} 
                 className="btn btn-secondary btn-sm"
                 >
                    Increment
                 </button>
            </div>
        );
    };
}
 
export default Counter;