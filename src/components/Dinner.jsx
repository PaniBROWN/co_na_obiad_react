import React, { Component } from 'react';



class Dinner extends Component {
 
    render (){
        return (
            <div className="meal">
                {this.props.recepie ? (
                    <div>
                        <p>{this.props.recepie.name}</p>
                        <p>{this.props.recepie.ingredients.map((ingredient, index) => {
                            return(
                                <form>
                                    <input type="checkbox" key={index} />{ingredient}
                                </form>
                            )
                        })}</p>
                    </div> 
                 ) : (
                 <p>hmmmm, co by zjeść...</p> 
                 )  
            }
                <button onClick={this.props.onRandom}>niech zdecyduje los</button>
                
            </div>
        )
    }
}

export default Dinner;
