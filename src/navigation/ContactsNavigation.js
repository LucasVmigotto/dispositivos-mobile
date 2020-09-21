import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import Colors from '../constraints/colors'
import NewContact from "../views/NewContact"
import ContactList from '../views/ContactList'

const ContactsNavigation = createStackNavigator ({
  ContactList: ContactList,
  NewContact: NewContact
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

export default createAppContainer(ContactsNavigation)
