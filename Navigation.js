import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import AddRestaurant from './views/AddRestaurant'
import RestaurantView from './views/RestaurantView'
import DetailRestaurantView from './views/DetailRestaurantView'

const Navigator = createStackNavigator(
  {
    RestaurantView: RestaurantView,
    AddRestaurant: AddRestaurant,
    DetailRestaurantView
  }
)

export default createAppContainer(Navigator)
