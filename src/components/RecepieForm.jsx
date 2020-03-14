import React, { Component } from "react";


class RecepieForm extends Component {
  state = {
    name: "",
    ingredients: [],
    preparation: ""
  };

  appendNewRecepie = (newRecepie) => {
    this.setState({
      name: this.state.name,
      ingredients: [...this.state.ingredients],
      preparation: this.state.preparation,
    })
  }

  createRecepie = e => {
    e.preventDefault();

    const recepie = {
      ...this.state
    };

    fetch("http://localhost:4000/recepies", {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json"
      },
      body: JSON.stringify(recepie)
    })
      .then(response => response.json())
      .then(newRecepie => {
        this.appendNewRecepie(newRecepie); //onCreateNewRecepie !!!
      });
  };
  render() {
    return (
      <form>
        <div className="recepie-form">
          <p className="title">Dodaj przepis</p>
          <div className="inputForm">
            <input
              className="input"
              type="text"
              placeholder="Potrawa"
              value={this.state.name}
              onChange={e => {
                this.setState({
                  name: e.target.value
                });
              }}
            />
          </div>
          <div className="inputForm">
            <input
              className="input"
              type="text"
              placeholder="składniki"
              value={this.state.ingredients}
              onChange={e => {
                this.setState({
                  ingredients: e.target.value
                });
              }}
            />
          </div>
          <div className="inputForm">
            <textarea
              className="input textarea"
              type="text"
              placeholder="sposób wykonania"
              value={this.state.preparation}
              onChange={e => {
                this.setState({
                  preparation: e.target.value
                });
              }}
            />
          </div>
          <div className="inputForm">
            <button
              className="btn"
              type="submit"
              onClick={e => {
                this.createRecepie(e);
              }}
            >
              Dodaj przepis
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default RecepieForm;
