import 'react-native-gesture-handler'
import React from 'react';
import { View, Platform } from 'react-native';
import AddEntry from './components/AddEntry'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import History from './components/History'
import NavigationContainer from '@react-navigation/native'
import { createBottomTabNavigator    } from '@react-navigation/bottom-tabs'
import { purple, white, gray } from './utils/colors'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator  ();


const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="History"
      screenOptions={({ route }) => ({
        tabBarIcon: ( { focused, color, size}) => {
          if ( route.name === 'History') {
            return <Ionicons name='md-bookmarks' size={30} color={color} />
          }
          else {
            return <FontAwesome name='plus-square' size={30} color={color} />
          }
        }
      })}
      tabBarOptions={{
        activeTintColor: Platform.OS === 'ios' ? purple : white,
        inactiveTintColor: gray,
        style: {
          height: 56,
          backgroundColor: Platform.OS === 'ios' ? white : purple,
          shadowColor: 'rgba(0,0,0,0.24)',
          shadowOffset: {
            width: 0,
            height: 3
          },
          shadowRadius: 6,
          shadowOpacity: 1
        }
      }}
    >
      <Tab.Screen name="History" component={History} options={{tabBarLabel: 'History'}} />
      <Tab.Screen name="AddEntry" component={AddEntry} options={{tabBarLabel: 'Add Entry'}} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <View style={{height: 20}} />
      <NavigationContainer style={{flex: 1}}>
        <MyTabs />
      </NavigationContainer>
    </Provider>
  )
}