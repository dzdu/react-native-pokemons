import React, { useState } from 'react';
import AppNavigator from './navigation/AppNavigator';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import MainService from './screens/mainservice';

const getFonts = () => Font.loadAsync({
    'montserrat-black': require('./assets/fonts/Montserrat-Black.ttf'),
    'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf')
  });
  

// export default class App extends React.Component{
//   state = {
//     loaded:  false
//   }
  
//   constructor(){
//     super();
//     MainService.load(v => this.setState({loaded:true }));
//   }
//   render(){
//     return(
//       <View>
//         <Text>Hello</Text>
//       </View>
//     )
//   }
// }

export default function App() {
  

  const[fontsLoaded, setFontsLoaded] = useState(false);
  if(fontsLoaded){
    return (
      <AppNavigator/>
    );
  } else{
    return(
    <AppLoading
      startAsync={getFonts}
      onFinish={() => setFontsLoaded(true)}
    />
    )
  }


  
}

