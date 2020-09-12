import React, { Component } from "react";
import { StyleSheet, View ,ScrollView} from "react-native";
import {Text} from "react-native-paper"
import { SliderBox } from "react-native-image-slider-box";
import Icon  from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


class DescriptionScreen extends Component{
    render(){
        return(
            <View style={styles.cont}>
            <Text style={{textAlign:'center',marginTop:120}}> 
            
            Desciption Screen</Text>
            </View>
        );
    }
}
class MenuScreen extends Component{
    render(){
        return(
            <View style={styles.cont}>
            <Text style={{textAlign:'center',marginTop:120}}>
            
            Menu Screen</Text>
            </View>
        );
    }
}
class DirectionScreen extends Component{
    render(){
        return(
            <View style={styles.cont}>
            <Text style={{textAlign:'center',marginTop:120}}>
            
            Map Screen</Text>
            </View>
        );
    }
}
class TodaysSpecialScreen extends Component{
    render(){
        return(
            <View style={styles.cont}>
            <Text style={{textAlign:'center',marginTop:120}}>
            
            Today's Special Screen</Text>
            </View>
        );
    }
}
class ContactScreen extends Component{
    render(){
        return(
            <View style={styles.cont}>
            <Text style={{textAlign:'center',marginTop:120}}>Contact Restaurent Screen</Text>
            </View>
        );
    }
}



const Tab = createMaterialTopTabNavigator();


export default class sixthPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('C:/Users/DATE/Desktop/React-side-nav/assets/download1.jpg'),
        require('C:/Users/DATE/Desktop/React-side-nav/assets/download2.jpg'),
        require('C:/Users/DATE/Desktop/React-side-nav/assets/download3.jpg'),
        require('C:/Users/DATE/Desktop/React-side-nav/assets/download4.jpg'),
          require('C:/Users/DATE/Desktop/React-side-nav/assets/download5.jpg'),
      ]
    };
  }
 render() {
    return (
      <ScrollView style={styles.container}>
      
      <Text style={{fontWeght:'bold',fontSize:17,color:"black",marginRight:56,textAlign:'center'}}>         Hotel Supraja
      <br/><br/></Text>
        <SliderBox 
          images={this.state.images}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
        />

        <ScrollView >
        <Tab.Navigator tabBarOptions={{ labelStyle: { textTransform:'none' },style: { backgroundColor: 'white' }, }}>
    
      <Tab.Screen name="DescriptionScreen" component={DescriptionScreen} options={{ tabBarLabel: 'Desciption' }}/>
      <Tab.Screen name="MenuScreen" component={MenuScreen} options={{ tabBarLabel: 'Menu' }}/>
      <Tab.Screen name="DirectionScreen" component={DirectionScreen} options={{ tabBarLabel: 'Direction' }}/>
      <Tab.Screen name="TodaysSpecialScreen" component={TodaysSpecialScreen} options={{ tabBarLabel: "Today's Special" }}/>
       <Tab.Screen name="ContactScreen" component={ContactScreen} options={{ tabBarLabel: 'Call Us' }}/>

     </Tab.Navigator>
</ScrollView>
 </ScrollView>

    
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  cont: {
      flex: 1,
    backgroundColor:'white',
    textAlign:'center'
  }
});