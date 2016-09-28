import { Store } from 'flux/utils';
import { AppDispatcher } from '../dispatcher';

export const RestaurantStore = new Store(AppDispatcher);

let _restaurants = [];

RestaurantStore.__onDispatch = function(payload){
  switch (payload.actionType){
    case 'RECEIVE_ALL_RESTAURANTS':
      _restaurants = payload.restaurants;
      this.__emitChange();
      break;
  }
};

RestaurantStore.getAllRestaurants = function() {
  return _restaurants;
};

window.RestaurantStore = RestaurantStore;
