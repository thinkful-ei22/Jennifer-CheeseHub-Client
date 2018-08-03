import React from 'react';
import {connect} from 'react-redux';
import { fetchCheesesRequest } from '../actions/cheeseActions';

class CheeseList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCheesesRequest());
  }
  render(){
    const cheeseItems=this.props.cheeses.map(cheese =>(<li>{cheese}</li>));    
    return(
      <ul>
        {cheeseItems}  
      </ul>
    );
  }}

function mapStateToProps(state){
  return {
    cheeses: state.cheeses
  };

}
export default connect(mapStateToProps)(CheeseList);