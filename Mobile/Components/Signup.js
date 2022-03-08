import { StatusBar } from 'expo-status-bar';
import {
    Button,
    StyleSheet,
    Text,
    View,
    Alert,
    TouchableOpacity,
    Image,
    Platform,
    ScrollView,
    TextInput,
  } from "react-native";
  import * as Animatable from "react-native-animatable";
  import FontAwesome from "react-native-vector-icons/FontAwesome";
  import Feather from "react-native-vector-icons/Feather"; 
  import colors from "../assets/colors/colors";
  import { useState } from "react";
  import Axios from "axios";

export default function Signup({navigation}) {
  
    const post = () => {
        var User = { firstName:firstName, lastName:lastName, Email : email, password : password, phoneNumber:phoneNumber };
        console.log(User);
        Axios.post(`${server.Ip}/Users/signup`, User)
          .then((response) => {
            console.log(response.data, "<==================================");
            if (response.data === "user exists") {
              console.log(response.data);
              Alert.alert("user already exists");
            } else {
              console.log(response.data, "<============== USER CREATED");
              Alert.alert("you has been registred successfuly");
              navigation.navigate("Login");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      };
      const [firstName, onChangeFirstName] = useState(null);
      const [lastName, onChangeLastName] = useState(null);
      const [email, onChangeEmail] = useState(null);
      const [password, onChangePassword] = useState(null);
      const [phoneNumber, onChangePhoneNumber] = useState(null);
    
    
      return (
        <View style={styles.container}>
          <StatusBar backgroundColor={colors.blue} barStyle="light-content" />
          <View style={styles.header}>
            <Image style={{width:180,height:180}} source={require('../photos/logo.png')}/>
          </View>
          <Animatable.View animation="fadeInUpBig" style={styles.footer}>
            <ScrollView>
              <Text style={styles.text_footer}>First Name Amiir</Text>
              <View style={styles.action}>
                <FontAwesome name="user-o" color={colors.grey} size={20} />
                <TextInput
                  placeholder="First name"
                  style={styles.textInput}
                  autoCapitalize="none"
                  onChangeText={onChangeFirstName}
                  value={firstName}
                />
              </View>
              <Text style={styles.text_footer}>Last Name</Text>
              <View style={styles.action}>
                <FontAwesome name="user-o" color={colors.grey} size={20} />
                <TextInput
                  placeholder="Last name"
                  onChangeText={onChangeLastName}
                  value={lastName}
                  style={styles.textInput}
                  autoCapitalize="none"
                />
                </View>
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                  <FontAwesome name="envelope" color={colors.grey} size={20} />
                  <TextInput
                    placeholder="Email"
                    onChangeText={onChangeEmail}
                    value={email}
                    style={styles.textInput}
                    autoCapitalize="none"
                  />
                </View>
    
                <Text style={styles.text_footer}>Phone number</Text>
                <View style={styles.action}>
                  <FontAwesome name="phone" color={colors.grey} size={20} />
                  <TextInput
                    placeholder="Phone number"
                    onChangeText={onChangePhoneNumber}
                    value={phoneNumber}
                    secureTextEntry={true}
                    style={styles.textInput}
                    autoCapitalize="none"
                  />
                </View>
              <Text
                style={
                  styles.text_footer
                 }
              >
                Password
              </Text>
              <View style={styles.action}>
                <Feather name="lock" color={colors.grey} size={20} />
                <TextInput
                  placeholder="Your Password"
                  style={styles.textInput}
                  autoCapitalize="none"
                  onChangeText={onChangePassword}
                />
              </View>
              <View style={styles.button}>
                <TouchableOpacity style={[styles.signIn,{backgroundColor:colors.gold}]} onPress={() => post()}>
                  <Text
                    style={[
                      styles.textSign,
                      {
                        color: colors.white,
                      },
                    ]}
                  >
                    Sign Up
                  </Text>
                </TouchableOpacity>
    
                <TouchableOpacity
                  onPress={() => navigation.navigate("Login")}
                  style={[
                    styles.signIn,
                    {
                      borderColor: colors.gold,
                      borderWidth: 1,
                      marginTop: 15,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.textSign,
                      {
                        color: colors.gold,
                      },
                    ]}
                  >
                    Sign In
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </Animatable.View>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: colors.blue,
      },
      header: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 20,
        paddingBottom: 20,
      },
      footer: {
        flex: 3,
        backgroundColor: colors.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
      },
    //   text_header: {
    //     color: colors.white,
    //     fontWeight: "bold",
    //     fontSize: 30,
    //   },
      text_footer: {
        color: colors.blue,
        fontSize: 18,
      },
      action: {
        flexDirection: "row",
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray,
        paddingBottom: 5,
      },
      textInput: {
        flex: 1,
        marginTop: Platform.OS === "ios" ? 0 : -12,
        paddingLeft: 10,
        color: colors.grey,
        
      },
      button: {
        alignItems: 'center',
        marginTop: 30
      },
      signIn: {
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
      },
      textSign: {
        fontSize: 18,
        fontWeight: "bold",
        
      },
      textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        
    },
      color_textPrivate: {
        color: colors.gray,
      },
    });