import React, { Component } from "react";
import Dinner from "./Dinner";


class MenuList extends Component{
    state = {
        recepiesList: [], // wyeksportować listę do komponentu Dinner - robię to za pomocą props
        dinners: [
          {
            recepieId: '1',
          },
          {
            recepieId: '2',
          },
          {
            recepieId: null,
          }
        ],
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
    
    render(){
      // const {recepiesList} = this.state;  
      return (
            <>
                <div>jestem w MenuList</div>
                {this.state.dinners.map((dinner, index) => {
                  const recepie = this.state.recepiesList.find(
                    ({ id }) => dinner.recepieId === id,
                  );
                  return (
                    <Dinner recepie={recepie} key={index} />
                  );
                })}
                {/* <Dinner recepiesList={recepiesList}/>  */}
                {/* recepiesList przekazałam do Dinner w props */}
            </>
        )
    }
}

export default MenuList;