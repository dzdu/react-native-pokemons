import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ActivityIndicator,
  Image,
  Button,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SearchBar } from "react-native-elements";

const TabIcon = (props) => (
  <Ionicons
    name={"md-compass"}
    size={35}
    color={props.focused ? "#516b96" : "darkgrey"}
  />
);

class BrowsePage extends React.Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
    this.arrayholder = [];
  }

  componentDidMount() {
    //return fetch('https://pokeapi.co/api/v2/pokemon/')
    return fetch("https://react-pokemons-back.herokuapp.com/pokemons")
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

  search = (text) => {
    console.log(text);
  };
  clear = () => {
    this.search.clear();
  };

  SearchFunction(text) {
    const searchRes = this.arrayholder.filter(function (pokemons) {
      const pokemonsData =
        pokemons.name + pokemons.type + pokemons.nextEvolution
          ? pokemons.name.toUpperCase() + pokemons.type.toUpperCase() +
            pokemons.evolutionOf.toUpperCase() +
            pokemons.nextEvolution.toUpperCase()
          : "".toUpperCase();
      const textData = text.toUpperCase();
      return pokemonsData.indexOf(textData) > -1;
    });

    this.setState({
      dataSource: searchRes,
      search: text,
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
      let pokemons = this.state.dataSource.map((pokemons, key) => {
        return <View key={key}>
          <View style={styles.container}>
            <View style={styles.box}>
              <Image
                source={{ uri: pokemons.img }}
                style={styles.img}
              />
              <Text style={styles.text}>{pokemons.name}</Text>
              <Text style={{ color: "white" }}>{pokemons.type}</Text>
              <Text style={{ color: "white" }}>{pokemons.weight}</Text>
              <Text style={{ color: "white" }}>{pokemons.evolutionOf}</Text>
              <Text style={{ color: "white" }}>{pokemons.nextEvolution}</Text>
              <Text style={{ color: "white" }}>{pokemons.abilities}</Text>
              <Button
                title="Tryck för extra info >"
                onPress={() => {
                  Linking.openURL(pokemons.wiki);
                }}
                color="#dbdbdb"
              />
            </View>
          </View>
        </View>;
      });

      return (
        <View>
          <ScrollView>
            <View style={styles.headerbackground}>
              <Text style={styles.header}>Utforska mer</Text>
              <SearchBar
                round
                searchIcon={{ size: 25 }}
                onChangeText={(text) => this.SearchFunction(text)}
                onClear={(text) => this.SearchFunction("")}
                placeholder="Sök ..."
                value={this.state.search}
                lightTheme
              />
            </View>
            <View>
              {pokemons}
            </View>
          </ScrollView>
        </View>
      );
    }
  }
}

export default BrowsePage;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    flexDirection: "row",
  },
  box: {
    backgroundColor: "#516b96",
    height: 300,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
    flex: 1,
  },
  header: {
    fontWeight: "900",
    fontSize: 30,
    padding: 20,
    marginBottom: 25,
    marginTop: 45,
    color: "#516b96",
    fontFamily: "montserrat-black",
  },
  headerbackground: {
    backgroundColor: "rgb(226, 232, 237)",
    justifyContent: "center",
  },
  text: {
    fontFamily: "montserrat-bold",
    fontSize: 20,
    padding: 10,
    color: "white",
  },
  img: {
    width: 70,
    height: 70,
  },
  btn: {},
});
