// React Native Navigation Drawer – Example using Latest Navigation Version //
// https://aboutreact.com/react-native-navigation-drawer //
import * as React from 'react';
import { View, SafeAreaView,StyleSheet } from 'react-native';
import { Button,Text } from 'react-native-paper';

const Separator = () => (
  <View style={styles.separator} />
);
const SecondPage = ({ navigation }) => {
  return (
    <SafeAreaView >
      <View style={styles.container}>
        <Separator/>
       <Button icon="file" color="black" onPress={() => navigation.navigate('ThirdPage')}>
       <Text style={{ fontSize:16,color:"black",marginRight:100,textTransform:'none'}}>Terms and Conditions</Text>
      </Button>
      <Separator/>
       <Button icon="lock" color="black" onPress={() => navigation.navigate('ForthPage')}>
       <Text style={{ fontSize:16,color:"black",marginRight:163,textTransform:'none'}}>Privacy Policy</Text>
      </Button>
       <Separator/>
       <Button icon="information" color="black" onPress={() => navigation.navigate('FifthPage')}>
       <Text style={{ fontSize:16,color:"black",marginRight:179,textTransform:'none'}}>About Dyniz</Text>
      </Button>
      <Separator/>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 1,
    marginBottom:500,
    backgroundColor:'white'
  },


  separator: {
    marginVertical: 2,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },



 
});





export default SecondPage;