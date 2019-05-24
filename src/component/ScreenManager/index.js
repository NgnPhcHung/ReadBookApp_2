import { createAppContainer, createStackNavigator } from 'react-navigation'
import BookMS from '../BookContent/BookMainScreen'
import Home from '../Content'
const RootStack = createStackNavigator ({
  Home: {
    screen: Home
  },
  Details : {
    screen: BookMS
  }
},
  {
    initialRouteName: 'Home'
  }
)
export default createAppContainer(RootStack);