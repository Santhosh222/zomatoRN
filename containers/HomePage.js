import React from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList
} from "react-native";
import RestaurantCard from "../components/RestaurantCard";

export default class HomePage extends React.Component {

    constructor(props){
        console.log("Constructor");
        super(props);
        this.state = {
            restaurants: []
        }
    }

    componentDidMount() {
//        console.log("ComponentDidMount");
        navigator.geolocation.getCurrentPosition(position => {
            this.getRestaurants(position.coords.latitude, position.coords.longitude)
        });        
    }

    getRestaurants = (lat, long) => {
        fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${lat}&lon=${long}`, 
        {
            method: "GET",
            headers: {
                "user-key": "e7d4ad24188b1b0b0a3fb93e7d5ab8db"
            }
        }
        ).then(res => {
            res.json().then(restaurants => {
//                console.log("Hello");
                this.setState({restaurants: restaurants.nearby_restaurants});
//                console.log("World");
//                console.log(this.state.restaurants);

                //   this.state.restaurants.filter(restaurant => {
                //       console.log('image', restaurant.item.item.restaurant.filtered_image);
                //       return (restaurant.item.item.restaurant.filtered_image != '')
                //   });  
                 
                //  console.log("End");
            });
        });
    }

    renderRestaurants = item => {
//        console.log("Item: ", item);
        let restaurant = item.item.restaurant;
//        console.log("Restaurant: ", restaurant);
//        console.log("Restaurant Image: ", restaurant.featured_image);
        return <RestaurantCard restaurantItem={restaurant} />;
    }

    render() {
      return (
        <View style={styles.container}>
            <FlatList
                data={this.state.restaurants}
                renderItem={this.renderRestaurants}
                keyExtractor={item => item.restaurant.id}
            />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
//      alignItems: "center",
//      justifyContent: "center"
    }
  });