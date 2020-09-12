import React, { Component } from 'react';
import { View, Linking, StyleSheet,SafeAreaView ,Alert} from 'react-native';
import { Button,Text } from 'react-native-paper';
const Separator = () => (
  <View style={styles.separator} />
);

const FirstPage = () => (
  <SafeAreaView style={styles.container}>
    <View>  
    <Button icon="chat" color="black" onPress={() => Linking.openURL('mailto:support@example.com') }>
   <Text style={{ fontSize:16, color:"black",marginRight:105,textTransform:'none'}}>Give Your Feedback</Text>
  </Button>
 <Separator />
               
 
 <Button icon="star" color="black" onPress={() => Linking.openURL("market://details?id=com.whatsapp")}>
   <Text style={{fontSize:16, color:"black",marginRight:200,textTransform:'none',textShadowOffset:20}}>Rate Us</Text>
  </Button>
  <Separator />
    
    </View>  
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 3,
    marginBottom:500,
    backgroundColor:'white'
  },
  separator: {
    marginVertical: 2,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default FirstPage;
