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
        return (
            <div>
                <p>jestem w Dinner</p>
                {this.props.recepie ? (
                    <p>{this.props.recepie.name}</p> 
                 ) : (
                 <p>wylosuj obiad</p> 
                 )  
            }
                <button>losuj</button>
            </div>
        )
    }
}

export default Dinner;
