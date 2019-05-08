import restaurants from "../reducers/restaurants";
import { LOAD_RESTAURANTS } from "../actions/action_types";

export const loadRestaurants = () => ({
  type: LOAD_RESTAURANTS,
  restaurants: restaurants
});
