import React, { Component } from 'react';

import './dinner.scss';


class Dinner extends Component {
    // state = {
    //     newDinner: ''
    // }

// a może by zrobić randomDinner wewnątrz componentDidMount ?

    // randomDinner = () => {
    //     const randDin = recepiesList[Math.floor(Math.random() * recepiesList.length)]
    //     this.setState({
    //         newDinner: randDin
    //     })
    // }

    render (){
        // const {newDinner} = this.state;
        // const {recepiesList} = this.props;
        return (
            <div className="Dinner">
                {this.props.recepie ? (
                    <p>{this.props.recepie.name}</p>
                ) : (
                    <p>Tu jeszcze nie ma przepisu</p>
                )}
                
                {/* <p>{this.state.newDinner}</p> */}
                {/* <button onClick={this.randomDinner}>losuj</button> */}
            </div>
        )
    }
}

export default Dinner;
