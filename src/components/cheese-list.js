import React from 'react';
import {connect} from 'react-redux';
import { fetchCheeses } from '../actions/cheeseActions';

class CheeseList extends React.Component {
  componentDidMount() {
    console.log('Component mounted');
    this.props.dispatch(fetchCheeses());
  }
  render(){
    const cheeseItems=this.props.cheeses.map(cheese =>(<li>{cheese}</li>));    
    return(
      <ul>
        {cheeseItems}
      </ul>
    );
  }}

const mapStateToProps = state =>{
  return {
    cheeses: state.cheeses
  };
};
export default connect(mapStateToProps)(CheeseList);