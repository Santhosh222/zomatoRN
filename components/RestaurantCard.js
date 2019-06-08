import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, KeyboardAvoidingView} from 'react-native';
import propTypes from "prop-types";
import Img from 'react-image'

export default class RestaurantCard extends React.Component {
  static propTypes = {
      restaurantItem: propTypes.object
  };
  
  render() {
        let restaurant = this.props.restaurantItem;
//        console.log("Image: ", restaurant.featured_image);
        return (
            <View>
                <Text>{restaurant.name}</Text>
                <Image
                source={{
                    uri: `${restaurant.featured_image}`,
                    method: 'POST',
                    headers: {
                    Pragma: 'no-cache',
                    },
                    body: 'Your Body goes here',
                }}
                resizeMode={"contain"}
                style={{height: 400, width: Dimensions.get("screen").width}}
                />
            </View>
        );
  }
}

const styles = StyleSheet.create({});
