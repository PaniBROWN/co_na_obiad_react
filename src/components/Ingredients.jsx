import React, { Component } from "react";

class Ingredients extends Component {
  render() {
    return (
      <div>
        {this.props.recepie ? (
          <div className="recepie">
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
            <button
              className="dinner-btn close-btn"
              onClick={this.props.onHide}
            >
              zamknij
            </button>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default Ingredients;
