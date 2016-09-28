import { AppDispatcher } from '../dispatcher';
import { AjaxUtils } from '../utils/ajax.js';

export const RestaurantActions = {
  fetchAllRestaurants(){
    AjaxUtils.fetchAllRestaurants(this.receiveAllRestaurants);
  },

  receiveAllRestaurants(results){
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_ALL_RESTAURANTS',
      restaurants: results
    });
  }
};
