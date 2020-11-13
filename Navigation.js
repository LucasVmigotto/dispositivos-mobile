import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import AddRestaurant from './views/AddRestaurant'
import RestaurantView from './views/RestaurantView'

const Navigator = createStackNavigator(
  {
    RestaurantView: RestaurantView,
    AddRestaurant: AddRestaurant
  }
)

export default createAppContainer(Navigator)
