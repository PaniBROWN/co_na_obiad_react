import React, { Component } from 'react';



class Dinner extends Component {
 
    render (){
        return (
            <div>
                {this.props.recepie ? (
                    <p>{this.props.recepie.name}</p> 
                 ) : (
                 <p>wylosuj obiad</p> 
                 )  
            }
                <button onClick={this.props.onRandom}>losuj</button>
            </div>
        )
    }
}

export default Dinner;
