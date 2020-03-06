import React, { Component } from "react";
import Dinner from "./Dinner";
import Ingredients from "./Ingredients";


class MenuList extends Component{
    state = {
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
              ingredientsList: data,
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

      showIngredients = (index) => {
        
      } 
      

    render(){ 
      return (
            <div className="menu-list-container">
                <div className="title">Szef kuchni poleca</div> 
                {this.state.dinners.map((dinner, index) => {
                  const recepie = this.state.recepiesList.find(
                    ({id}) => dinner.recepieID === id,
                  );
                  return(
                     <div className="menu-list-cont">
                      <Dinner recepie={recepie} key={index} onRandom={() => this.setRandomRecepie(index)}/>
                      <Ingredients recepie={recepie} key={index} onShow={() => this.showIngredients(index)}/>
                     </div> 
                  )
                })}
                {/* <button>wyświetl listę zakupów</button>
                {this.state.dinners.map((dinner, id) => {
                  return (
                    <ul>
                      <li key="id">{dinner.recepieIngredients}</li>
                    </ul>
                  )
                })} */}
            </div>
        )
    }
}

export default MenuList;