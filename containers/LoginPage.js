import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, KeyboardAvoidingView} from 'react-native';
import { TextInput, RectButton } from 'react-native-gesture-handler';

export default class LoginPage extends React.Component {

  constructor(props) {
      super(props);
//      console.log(props);
      this.state = {
          email: "",
          password: ""
      }
  }

  loginSubmit = () => {
//    console.log("Submitted");
//    console.log("Email: "+this.state.email, "Password: "+this.state.password);
    this.props.navigation.navigate('Home');
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Image
            source={require("../assets/logo.png")}
            style={styles.logo}
            resizeMode={"contain"}
        />
        <KeyboardAvoidingView
            style={styles.loginContainer}
            behavior="padding"
            enabled
        >
            <TextInput 
                placeholder="email" 
                style={styles.input}
                onChangeText={email => this.setState({email})}
            />
            <TextInput 
                placeholder="password" 
                style={styles.input}
                secureTextEntry={true}
                onChangeText={password => this.setState({password:password})}
            />
            <TouchableOpacity style={styles.button} onPress={this.loginSubmit}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  loginContainer: {
    marginHorizontal: 30
  },
  input:{
    height: 50,
    borderWidth: 1,
    margin: 10,
    paddingLeft: 10,
    borderRadius: 10,
    borderColor: "#E20025",
    backgroundColor: '#FFF'
  },
  logo: {
    width: Dimensions.get("screen").width/4,
    alignSelf: 'center'
  },
  button:{
      backgroundColor: "#E00025",
      borderRadius: 10,
      padding: 10,
      alignItems: "center"
  },
  buttonText:{
    color: "#FFF"
  }
});
