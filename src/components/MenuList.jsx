import React, { Component } from "react";
import Dinner from "./Dinner";
import Ingredients from "./Ingredients";


class MenuList extends Component{
    state = {
        isOn: false,
        recepiesList: [],
        ingredientsList: [],
        dinners: [
          {
            "recepieID" : null,
            "recepieIngredients" : [],
          },
          {
            "recepieID" : null,
            "recepieIngredients" : [],
          },
          {
            "recepieID" : null,
            "recepieIngredients" : [],
          },
          {
            "recepieID" : null,
            "recepieIngredients" : [],
          },
          {
            "recepieID" : null,
            "recepieIngredients" : [],
          }
        ]
      };
   
      componentDidMount() {
        fetch("http://localhost:4000/recepies")
          .then(response => {
            console.log(response)
            return response.json();
          })
          .then(data => {
            this.setState({
              recepiesList: data,
              });
          })
          .catch(err => {
            console.log('błąd', err)});
      }
    
      setRandomRecepie = (index) => {
        console.log('ten indeks', index)
        const list = this.state.recepiesList;
        const randomIndex = Math.floor(Math.random() * list.length);
        const randomRecepie = list[randomIndex]; 
        console.log(randomRecepie)

        const dinnersCopy = [
          ...this.state.dinners,
        ]; 
        dinnersCopy[index] = {
          recepieID: randomRecepie.id,
        };
        console.log({dinnersCopy})
        this.setState({
          dinners: dinnersCopy,
        });
      }

      render(){ 
      return (
        <div className="container">
          <header className="logo">Kochanie... co na obiad?</header>
          <div className="menu-list-container">
                <div className="title">Szef kuchni poleca</div> 
                {this.state.dinners.map((dinner, index) => {
                  const recepie = this.state.recepiesList.find(
                    ({id}) => dinner.recepieID === id,
                  );
                  return(
                     <div className="menu-list-cont">
                      <Dinner recepie={recepie} key={index} onRandom={() => this.setRandomRecepie(index)} />
                      <Ingredients recepie={recepie} key={index} />
                     </div> 
                  )
                })}
            </div>
        </div>
            
        )
    }
}

export default MenuList;