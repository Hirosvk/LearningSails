import * as React from 'react';
import { RestaurantActions } from '../actions/restaurant_actions';
import { RestaurantStore } from '../stores/restaurant_store';

export const First = React.createClass({
  getInitialState() {
    return {restaurants: RestaurantStore.getAllRestaurants()};
  },

  componentDidMount(){
    RestaurantStore.addListener(this.updateState);
  },

  updateState(){
    this.setState({restaurants: RestaurantStore.getAllRestaurants()});
  },

  getRestaurants(){
    RestaurantActions.fetchAllRestaurants();
  },

  displayRestaurantsInfo(){
    return (<ul>
      {this.state.restaurants.map(restaurant => {
        return <li key={restaurant.id}>
          {restaurant.name}:
          {restaurant.borough}:
          {restaurant.cuisine}
        </li>;
      })}
    </ul>);
  },

  render(){
    return (
      <div>
        <button onClick={this.getRestaurants}>get restauants</button>
        { this.displayRestaurantsInfo() }
      </div>
    );
  }
});
