import React from "react"
import { Text, View, Linking, TouchableOpacity, Image} from "react-native"
import { Dimensions, ImageBackground, StyleSheet, Button } from "react-native"
import { COLORS,  SIZES } from "../../constants";

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

export default function Nutrition ({navigation}) 
{
   const LoadNutritions = () => {

      navigation.navigate('Nutritions');

   }

   const LoadWorkout = () => {

      navigation.navigate('Workout');

   }
   return (
      
   <View style={Styles.Main} >
     
      <View style={Styles.Nut}>

         <TouchableOpacity onPress={LoadNutritions}>
            <ImageBackground  source={ require('../../assets/Pictures/Nutritions.jpg') } 
                style={Styles.FirstImg}>
                    <Text style = {Styles.Txt}> ПИТАНИЕ</Text>
            </ImageBackground>
         </TouchableOpacity>

      </View>

      <View style={Styles.Train}>

      <TouchableOpacity onPress={LoadWorkout}>
         <ImageBackground  source={ require('../../assets/Pictures/Training.jpg')}
             style={Styles.SecondImg}>
                <Text style = {Styles.Txt}> ТРЕНИРОВКИ </Text>
         </ImageBackground>
         </TouchableOpacity>

      </View>
    </View>
   )
}

const Styles = StyleSheet.create 
(
   {

      Main:
         {
            flexDirection: "column",
            justifyContent:"center", 
            backgroundColor: COLORS.black,
            width : deviceWidth * 100 / 100,
            height: deviceHeight * 100/ 100, 
         },
      Nut:
         {
            width : deviceWidth * 90 / 100,
            height: deviceHeight * 37 / 100, 
            marginBottom: deviceHeight * 3  / 100
         },
      Train:
         {
            width : deviceWidth * 90 / 100,
            height: deviceHeight * 37 / 100, 
            marginBottom: deviceHeight * 15 / 100
         },
      FirstImg:
         {
            width: '110%',
            height: '100%',
            borderRadius: 30/2,
            overflow: "hidden",
         },
      SecondImg:
         {
            width: '110%',
            height: '100%',
            borderRadius: 30/2,
            overflow: "hidden",
         },
         Txt:
         {
            textAlign: "center", 
            fontSize: SIZES.h1,
            paddingTop: "30%",
            color: COLORS.white,
         }

   }
)    

