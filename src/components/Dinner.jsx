import React, { Component } from 'react';

class Dinner extends Component {

    render (){
        return (
            <div className="meal">
                    {this.props.recepie ? (
                    <div > 
                        <p className="meal-recepie">{this.props.recepie.name}</p>
                    </div> 
                 ) : (
                    <p>hmmmm, co by zjeść...</p> 
                    )  
                 }
                
            {this.props.recepie ? (
                <div className="btns">
                    <button className="dinner-btn" > przepis </button>
                    <button className="dinner-btn" onClick={this.props.onRandom}>losuj</button>
                </div>
                ) : (
                    <button className="btns dinner-btn" onClick={this.props.onRandom}>losuj</button>
                    )}
                
              
            </div>
        )
    }
}

export default Dinner;
