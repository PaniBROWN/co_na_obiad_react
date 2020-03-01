import React, { Component } from "react";
import Dinner from "./Dinner";


class MenuList extends Component{
    state = {
        recepiesList: [] // wyeksportować listę do komponentu Dinner - robię to za pomocą props
      };
    
      componentDidMount() {
        fetch("http://localhost:4000/recepies")
          .then(response => {
            console.log(response);
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
                <Dinner/>
                {/* <Dinner recepiesList={recepiesList}/>  */}
                {/* recepiesList przekazałam do Dinner w props */}
            </>
        )
    }
}

export default MenuList;