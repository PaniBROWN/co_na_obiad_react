import React, { Component } from 'react';

class Ingredients extends Component{
    render(){
        return(
            <div>
                {this.props.recepie ? (
                <button onClick={this.props.onShow}>pokaż listę składników</button>
                ) : (
                    ""
                    )}
                
            </div>
            
        )
    }
}

export default Ingredients;