import { View, Text , SafeAreaView} from 'react-native'
import React, { useEffect } from 'react'
import HeaderTab from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import { ScrollView } from 'react-native'

//this is for nagivation switching



import RestaurantItems, { localRestaurants } from '../components/RestaurantItems'

const YELP_API_KEY =
  "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";


export default function Home() {
  const [restaurantData, setRestaurantData]= React.useState(localRestaurants)
  
  const getRestaurantsFromYelp = () => {
    //const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
      return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses
        )
      );
  };

  useEffect(() => {
    //getRestaurantsFromYelp();
  },[]);
  return (
    <SafeAreaView style={{backgroundColor: "#eeee", flex: 1}}>

      <View style={{backgroundColor: "white", padding: 15, }}>
      <HeaderTab/>
      <SearchBar/>
      </View>
<ScrollView showsVerticalScrollIndicator={false} >
<Categories/>
<RestaurantItems restaurantData={restaurantData}/>
</ScrollView>
     
      
    </SafeAreaView>
  )
}