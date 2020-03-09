import React, { Component } from 'react';

class Ingredients extends Component{
    state = {
        isOn: false
    }
    hideModal = () => {
        console.log("klik zamknij")
        this.setState({
            isOn: true,
        })
    }
    
    render(){
        
        return(
            <div>
                {this.props.recepie ? 
                (<div className="recepie">
                            <p className="name">{this.props.recepie.name}</p>
                            <div className="ingredients">{this.props.recepie.ingredients.map((ingredient, index) => {
                                return(
                                    <div >
                                        <ul>
                                            <li key={index} > {ingredient} </li>
                                        </ul>
                                    </div>
                                        
                                            )
                                        }
                                    )
                            }</div>
                            <p className="preparation">{this.props.recepie.preparation}</p>
                            <button className="dinner-btn" onClick={this.hideModal}>zamknij</button>
                        </div>)  
                        : <div/>}  
                
            </div>
            
        )
    }
}

export default Ingredients;