import React, { Component } from "react";
import Dinner from "./Dinner";


class MenuList extends Component{
    state = {
        recepiesList: [],
        dinners: [
          {
            "recepieID" : "1",
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
            return response.json();
          })
          .then(data => {
            this.setState({
              recepiesList: data
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
            <>
                <div>jestem w MenuList</div>
                {this.state.dinners.map((dinner, index) => {
                  const recepie = this.state.recepiesList.find(
                    ({id}) => dinner.recepieID === id,
                  );
                  return(
                    <Dinner recepie={recepie} key={index} onRandom={() => this.setRandomRecepie(index)}/>
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
            </>
        )
    }
}

export default MenuList;