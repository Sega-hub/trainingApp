import React from "react"
import { COLORS,  SIZES } from "../../constants";
import { View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity} from "react-native"

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;


export default function Workout ({navigation}) {

      
   const LoadGym = () => {

      navigation.navigate('WorkoutGym');

   }
   const LoadHome = () => {
      navigation.navigate('WorkoutHome');
   }
   const LoadHomeAdd = () => {
      navigation.navigate('WorkoutHomeAdd');
   }

   return (
   <View style={Styles.Main}>
      
      <View style={Styles.HomeWorkout}> 

         <TouchableOpacity onPress={LoadHome}>
         <ImageBackground  source={{ uri: 'https://strong-life.ru/wp-content/uploads/2018/04/abs_08.jpg' }} 
         style={Styles.FirstImg}> 

            <Text style = {Styles.Txt}> ТРЕНИРОВКИ ДОМА БЕЗ ОБОРУДОВАНИЯ</Text>
         
         </ImageBackground>
         </TouchableOpacity>
      </View>

      <View style={Styles.Gym}> 

      <TouchableOpacity onPress={LoadGym}>
      <ImageBackground  source={{ uri: 'https://fitseven.ru/wp-content/uploads/2019/09/programma-trenirovok-na-massu-v-zale.jpg' }} 
         style={Styles.FirstImg}> 

            <Text style = {Styles.Txt}> ТРЕНИРОВКИ В ЗАЛЕ </Text>
         
         </ImageBackground>
         </TouchableOpacity>

      </View>

      <View style={Styles.HomeAdd}> 

      <TouchableOpacity onPress={LoadHomeAdd}>
      <ImageBackground  source={{ uri: 'https://fitseven.ru/wp-content/uploads/2020/03/kak-trenirovatsya-doma.jpg' }} 
         style={Styles.FirstImg}> 

            <Text style = {Styles.Txt}> ТРЕНИРОВКИ ДОМА С ОБОРУДОВАНИЕМ </Text>
         
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
            height: deviceHeight * 100 / 100,
         },
      HomeWorkout:
         {
            width : deviceWidth * 90 / 100,
            height: deviceHeight * 25 / 100, 
            marginBottom: deviceHeight * 3/ 100,   
         },
         Gym:
         {
            width : deviceWidth * 90 / 100,
            height: deviceHeight * 25 / 100, 
            marginBottom: deviceHeight * 3/ 100,
            
         },
         HomeAdd:
         {
            width : deviceWidth * 90 / 100,
            height: deviceHeight * 25 / 100, 
            marginBottom: deviceHeight * 14/ 100,
             
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
            paddingTop: "15%",
            color: COLORS.white,
         }

   }
)

