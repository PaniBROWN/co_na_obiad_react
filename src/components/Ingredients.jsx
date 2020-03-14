import React, { Component } from "react";

class Ingredients extends Component {
  render() {
    return (
      <div>
        {this.props.recepie ? (
          <div className="recepie">
            <button
              className="dinner-btn close-btn btn"
              onClick={this.props.onHide}
            >
              x
            </button>
            <p className="name">{this.props.recepie.name}</p>
            <div className="ingredients">
              {this.props.recepie.ingredients.map((ingredient, index) => {
                return (
                  <div>
                    <ul>
                      <li key={index}> {ingredient} </li>
                    </ul>
                  </div>
                );
              })}
            </div>
            <p className="preparation">{this.props.recepie.preparation}</p>
            
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default Ingredients;
