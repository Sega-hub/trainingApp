import React from "react"
import { COLORS,  SIZES } from "../../constants";
import { View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity} from "react-native"

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;


export default function Nutritions ({navigation}) 
{

   const LoadDry = () => {

      navigation.navigate('NutritionDrying');

   }

   const LoadGain = () => {

      navigation.navigate('NutritionGain');

   }

   const LoadLoss = () => {

      navigation.navigate('NutritionLoss');

   }

   return (
   <View style={Styles.Main}>
      
      <View style={Styles.Drying}> 
      <TouchableOpacity onPress={LoadDry}>
         <ImageBackground  source={{ uri: 'https://fitness-generation.ru/upload/resize_cache/iblock/8b4/500_500_1/8b4acb978bb8adbee6d016fd8e3c9af0.jpg' }} 
         style={Styles.Img}> 

            <Text style = {Styles.Txt}> СУШКА</Text>
         
         </ImageBackground>
         </TouchableOpacity>
      </View>

      <View style={Styles.Loss}> 

      <TouchableOpacity onPress={LoadLoss}>
      <ImageBackground  source={{ uri: 'https://i.pinimg.com/originals/2d/da/7f/2dda7fbf02b2d52ac0941d38abd92f58.jpg' }} 
         style={Styles.Img}> 

            <Text style = {Styles.Txt}> ПОХУДЕИНЕ </Text>
         
         </ImageBackground>
       </TouchableOpacity>
      </View>

      <View style={Styles.Gain}> 
      <TouchableOpacity onPress={LoadGain}>
      <ImageBackground  source={{ uri: 'https://www.bodybuildingrussia.com/img/remote/255.jpg' }} 
         style={Styles.Img}> 

            <Text style = {Styles.Txt}> НАБОР МАССЫ </Text>
         
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
            height: deviceHeight * 105 / 100,
         },
         Drying:
         {
            width : deviceWidth * 90 / 100,
            height: deviceHeight * 25 / 100, 
    
         },
         Loss:
         {
            width : deviceWidth * 90 / 100,
            height: deviceHeight * 25 / 100, 
            marginTop: deviceHeight * 3/ 100,
            
         },
         Gain:
         {
            width : deviceWidth * 90 / 100,
            height: deviceHeight * 25 / 100, 
            marginTop: deviceHeight * 3/ 100,
            marginBottom: deviceHeight * 15/ 100,
             
         },
      Img:
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
            paddingTop: "28%",
            color: COLORS.white,
         }

   }
)

