import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import Colors from "../constraints/colors"
import PlacesListView from '../views/PlacesListView'
import PlaceInfoView from '../views/PlaceInfoView'
import NewPlaceView from '../views/NewPlaceView'
import MapView from '../views/MapView'

const PlacesNavigation = createStackNavigator ({
  PlacesList: PlacesListView,
  PlaceInfo: PlaceInfoView,
  NewPlace: NewPlaceView,
  Map: MapView
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor:
        Platform.OS === 'android'
          ? Colors.primary
          : 'white',
    },
    headerTintColor:
      Platform.OS === 'android'
      ? 'white'
      : Colors.primary
  }
})

export default createAppContainer(PlacesNavigation)
