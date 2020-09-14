import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Button,
  Linking,
  ActivityIndicator,
} from "react-native";
import { WebView } from "react-native-webview";

import MainService from "./mainservice";
import { Ionicons } from "@expo/vector-icons";

const TabIcon = (props) => (
  <Ionicons
    name={"md-home"}
    size={35}
    color={props.focused ? "#e8201a" : "darkgrey"}
  />
);

export default class HomePage extends React.Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  state = {
    loaded: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
    MainService.load((v) => this.setState({ loaded: true }));
  }

  componentDidMount() {
    //return fetch('https://pokeapi.co/api/v2/pokemon/')
    return fetch("https://react-pokemons-back.herokuapp.com/news")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function () {
          this.arrayholder = responseJson;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { search } = this.state;
    if (this.state.isLoading) {
      return (
        <View>
          <View style={styles.headerbackground}>
            <Text style={styles.header}>Utforska mer</Text>
          </View>
          <View style={styles.container}>
            <ActivityIndicator />
          </View>
        </View>
      );
    } else {
      let news = this.state.dataSource.map((news, key) => {
        return <View key={key}>
          <View style={styles.container}>
            <View style={styles.news}>
              <Text style={styles.bodytitle}>{news.title}</Text>
              <Text style={{ fontSize: 16 }}>{news.text}</Text>
            </View>
          </View>
          <Image
            source={{ uri: news.img }}
            style={{ width: "100%", height: 200 }}
          />
          <Button
            title="Se mer"
            onPress={() => {
              Linking.openURL(news.link);
            }}
            color="#f27a72"
            style={{ padding: 15 }}
          />
        </View>;
      });

      return (
        <View>
          {this.state.loaded
            ? <ScrollView>
              <View style={styles.headerbackground}>
                <Text style={styles.header}>Your pocket pokedex</Text>
              </View>
              <View>
                {news}
              </View>
            </ScrollView>
            : <Image
              source={require("../assets/logo.png")}
              style={styles.image}
            />}
        </View>
      );
    }
  }

  // render(){
  //     return(
  //     <View>
  //     {this.state.loaded ?  <ScrollView>
  //         <View style={styles.headerbackground}>
  //         <Text style={styles.header}> Your pocket pokedex </Text>
  //         </View>
  //     <View style={styles.container}>
  //     <View style={styles.news}>
  //     <Text style={styles.bodytitle}>Pokémon Sword & Shield</Text>
  //     <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor viverra placerat. Nullam gravida in sapien eu scelerisque. Curabitur feugiat turpis dui, id rhoncus odio mollis ac. Aliquam a maximus erat, in finibus ante. Duis pulvinar semper ornare. Donec dignissim consectetur lorem sit amet hendrerit. Nullam a ullamcorper dui. Vivamus sed turpis sit amet massa malesuada accumsan. Fusce condimentum nibh id elementum mollis. Duis eu elit pellentesque, accumsan turpis sit amet, auctor magna. Fusce vestibulum ullamcorper vehicula. Mauris vitae posuere ipsum, et commodo nulla. Nulla consequat semper pulvinar. Fusce eget vulputate nulla.
  //     </Text>
  //     <Image
  //     source={{
  //         uri:'https://mfst.igromania.ru/wp-content/uploads/2020/02/pokemon-sword-shield.jpg'
  //     }}
  //     style={{width: 300, height:200}}
  //     />
  //     <Button title="Se trailer 🎦" onPress={ ()=>{ Linking.openURL('https://www.youtube.com/watch?v=kiff3CU27UM')}} color='#f27a72'/>
  //     {/* <WebView
  //         style={{flex:1, backgroundColor:'grey'}}
  //         javaScriptEnabled={true}
  //         source={{uri: 'https://www.youtube.com/watch?v=kiff3CU27UM'}}
  //     /> */}
  //     </View>
  //     <View style={styles.news}>
  //     <Text style={styles.bodytitle}>Pokémon GO update</Text>
  //     <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor viverra placerat. Nullam gravida in sapien eu scelerisque. Curabitur feugiat turpis dui, id rhoncus odio mollis ac. Aliquam a maximus erat, in finibus ante. Duis pulvinar semper ornare. Donec dignissim consectetur lorem sit amet hendrerit. Nullam a ullamcorper dui. Vivamus sed turpis sit amet massa malesuada accumsan. Fusce condimentum nibh id elementum mollis. Duis eu elit pellentesque, accumsan turpis sit amet, auctor magna. Fusce vestibulum ullamcorper vehicula. Mauris vitae posuere ipsum, et commodo nulla. Nulla consequat semper pulvinar. Fusce eget vulputate nulla.
  //     </Text>
  //     <Image
  //     source={{
  //         uri:'https://gopokemongo.ru/wp-content/uploads/2019/07/R7qu2ZR.jpg'
  //     }}
  //     style={{width: 300, height:200}}
  //     />
  //     </View>
  //     </View>
  //     </ScrollView> :  <Image
  //     source={require('../assets/logo.png')}
  //     style={styles.image}
  //     />}
  //     </View>
  //     )
  // };
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginRight: 30,
    justifyContent: "center",
    textAlign: "center",
    alignContent: "center",
    marginTop: 30,
    fontSize: 18,
  },
  header: {
    fontWeight: "900",
    fontSize: 28,
    padding: 15,
    marginBottom: 25,
    marginTop: 45,
    color: "white",
    fontFamily: "montserrat-black",
  },
  headerbackground: {
    backgroundColor: "#f27a72",
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    justifyContent: "center",
  },
  image: {
    position: "absolute",
    justifyContent: "center",
    margin: 90,
    marginTop: 250,
  },
  bodytitle: {
    fontWeight: "900",
    fontSize: 22,
    padding: 10,
    color: "rgb(169,169,169)",
    fontFamily: "montserrat-black",
  },
  news: {
    padding: 10,
  },
});
