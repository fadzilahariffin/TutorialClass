import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './App';
import ResultScreen from './Result'

const AppStack = createStackNavigator({
    Home: HomeScreen,
    Result: ResultScreen
})


export default createAppContainer(AppStack);