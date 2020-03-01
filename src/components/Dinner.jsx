import React, { Component } from 'react';



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
            <div>
                <p>jestem w Dinner</p>
                {/* <p>{this.state.newDinner}</p> */}
                {/* <button onClick={this.randomDinner}>losuj</button> */}
            </div>
        )
    }
}

export default Dinner;
