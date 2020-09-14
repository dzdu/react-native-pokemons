import React from 'react';
import {View, StyleSheet, Text, ScrollView, Button, Linking} from 'react-native';
import {Ionicons} from '@expo/vector-icons';


    const TabIcon = (props) => (
        <Ionicons
        name={'ios-cog'}
        size={35}
        color={props.focused ? '#5bba75' : 'darkgrey'}
        />
    )
    

    export default class AboutPage extends React.Component {
        static navigationOptions = {
            tabBarIcon: TabIcon
        };
        
        render(){
            return(
                <View>
                <ScrollView>
                    <View style={styles.headerbackground}>
                    <Text style={styles.header}> About </Text>
                    </View>
                <View style={styles.container}>
                    <Text style={{fontSize:13, paddingBottom: 15}}>   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales venenatis turpis, non luctus elit varius non. Curabitur eu urna interdum, fermentum justo vel, lacinia nulla. Nulla facilisi. Etiam velit risus, vestibulum ut nisl nec, imperdiet pellentesque neque. Fusce rutrum tristique nibh tristique suscipit. Cras scelerisque nibh ac hendrerit ullamcorper. Maecenas lacus neque, pulvinar eu lectus eget, semper sollicitudin turpis. In sed congue eros. Vestibulum posuere tincidunt lectus, nec accumsan nisi bibendum ornare. Etiam egestas eu sem sit amet dictum.
                    Quisque bibendum velit sit amet tortor imperdiet, sit amet lacinia lacus placerat. Donec augue urna, iaculis id vulputate id, facilisis vitae justo. Mauris ac nibh ligula. Mauris aliquet molestie interdum. Curabitur venenatis interdum lorem eu eleifend. Fusce placerat quam nisl, a dignissim sapien lacinia vitae. Nulla maximus vestibulum metus, non vestibulum mi luctus ac. Nam metus diam, semper posuere justo eget, pretium consequat ex. Sed ac diam quam. In semper suscipit erat non auctor. Fusce ornare sagittis dui, ut congue mi rutrum ac. Nulla rutrum eget purus eu sollicitudin. Donec ullamcorper lacinia auctor. Phasellus commodo diam ut commodo vestibulum. Mauris gravida rutrum ex. Phasellus nulla risus, suscipit a neque pharetra, bibendum porttitor mi.
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam accumsan sem libero. Nulla auctor quam dui, sit amet rutrum justo commodo malesuada. Donec ornare velit risus, sit amet elementum lacus consectetur a. Mauris dictum odio eu quam posuere vulputate. Morbi vitae aliquet diam. Proin ex risus, fringilla non ante ut, venenatis rhoncus risus. Etiam sed eleifend mi. Nullam hendrerit ex id neque facilisis, et pretium augue vestibulum. Nunc ultricies luctus turpis, eget dapibus nisi feugiat eget.
                    Aliquam iaculis fringilla quam, ac finibus nibh facilisis eu. Duis neque eros, ultrices eu tincidunt nec, lobortis sit amet tellus. Etiam non massa erat. Nullam malesuada justo nunc, ut tincidunt eros tempor in. Donec ac rutrum ipsum, sit amet posuere eros. Sed sed est commodo, feugiat lacus vitae, gravida quam. Pellentesque ultricies erat eu ligula posuere ullamcorper. Nunc scelerisque venenatis nulla, eget porta ex maximus quis. Cras maximus felis lorem, vel sagittis sem accumsan pulvinar. Cras ligula justo, cursus nec lobortis eu, vehicula nec dolor. Maecenas ornare, purus vestibulum hendrerit efficitur, neque augue bibendum eros, interdum facilisis mauris lorem ac tellus. Fusce mollis ultrices tortor, ac tincidunt tortor elementum non. Praesent in ex metus. Fusce vel diam sed nisl egestas dictum quis id lectus. Nunc tempor, sapien in sodales varius, turpis justo imperdiet nisi, in semper dui tortor ut neque.</Text>
                    <View style={styles.social}>
                    <Ionicons
                    name={'logo-twitter'}
                    size={35}
                    color={'#5bba75'}
                    onPress={ ()=>{ Linking.openURL('https://twitter.com/dead__angel_')}}
                    style={{marginRight:55}}
                    />
                    <Ionicons
                    name={'logo-facebook'}
                    size={35}
                    color={'#5bba75'}
                    onPress={ ()=>{ Linking.openURL('https://www.facebook.com/demitry.dudov')}}
                    />  
                    <Ionicons
                    name={'ios-link'}
                    size={35}
                    color={'#5bba75'}
                    onPress={ ()=>{ Linking.openURL('https://taplink.cc/dead__angel_')}}
                    style={{marginLeft:55}}
                    />              
                </View>
                </View>
                </ScrollView>
                </View>
            )
        };
    }

    const styles = StyleSheet.create({
        container: {
            marginLeft:30,
            marginRight:30,
            justifyContent:'center',
            marginTop:30,
            fontSize: 18,
            flex:1 
        },
        header:{
            fontWeight: '900',
            fontSize: 28,
            padding:15,
            marginBottom:25,
            marginTop:45,
            color: 'white',
            fontFamily: 'montserrat-black'
        },
        headerbackground:{
            backgroundColor:'#5bba75',
            borderBottomRightRadius: 50,
            borderBottomLeftRadius: 50,
            justifyContent:'center'
        },
        social:{
            flexDirection: "row",
            justifyContent: "center",
            padding: 15
        }
    });