
import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FirstPage from './components/FirstPage';//contact us
import SecondPage from './components/SecondPage';//About us
import ThirdPage from './components/ThirdPage';//Terms and conditions
import ForthPage from './components/ForthPage';//privacy policy
import FifthPage from './components/FifthPage';//about dyniz
//import sixthPage from'./components/sixthPage';
import Icon  from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props)=> {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawe
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        
        <Icon style={{marginLeft:15}}name="md-menu" size={30} />
      </TouchableOpacity>
    </View>
  );
}

//for Contact Us page
function firstScreenStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{
            title: 'Contact Us', //Set Header Title
            headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
              backgroundColor: 'white', //Set Header color
            },
            headerTintColor: 'black', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
  );
}

/*function sixthScreenStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="sixthPage">
        <Stack.Screen
          name="sixthPage"
          component={sixthPage}
          options={{
            title: 'Home', //Set Header Title
            headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
              backgroundColor: 'white', //Set Header color
            },
            headerTintColor: 'black', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
  );
}

*/

//for About Us 
function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="FirstPage">
      <Stack.Screen
            name="SecondPage"
            component={SecondPage}
            options={{
              title: 'About Us', //Set Header Title
              headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
              headerStyle: {
                backgroundColor: 'white', //Set Header color
              },
              headerTintColor: 'black', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
            }}
          
       />
      <Stack.Screen
        initialRouteName="SecondPage"
        screenOptions={{
          headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          }
        }}
        name="ThirdPage"
        component={ThirdPage}
        options={{
          title: 'Terms and Conditions', //Set Header Title
        }}/>


<Stack.Screen
        nitialRouteName="SecondPage"
        screenOptions={{
          headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          }
        }}
        name="ForthPage"
        component={ForthPage}
        options={{
          title: 'Privacy Policies', //Set Header Title
        }}/>


        <Stack.Screen
        nitialRouteName="SecondPage"
        screenOptions={{
          headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          }
        }}
        name="FifthPage"
        component={FifthPage}
        options={{
          title: 'About Dyniz', //Set Header Title
        }}/>

    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
         
          itemStyle: { marginVertical: 5 },
        }}>
        
        <Drawer.Screen
          name="FirstPage"
          options={{ drawerLabel: 'Contact Us' }}
          component={firstScreenStack} />
        <Drawer.Screen
          name="SecondPage"
          options={{ drawerLabel: 'About Us' }}
          component={secondScreenStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;