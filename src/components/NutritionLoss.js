import React, {useState} from "react";
import { COLORS,  SIZES } from "../../constants";
import { View, Text, StyleSheet, Dimensions, Modal, Image} from "react-native";
import { AntDesign } from '@expo/vector-icons'; 


var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;


export default function NutritionLoss () {

    const [FirstDay, SetFirstDay] = useState(false);
    const [SecondDay, SetSecondDay] = useState(false);
    const [ThirdDay, SetThirdDay] = useState(false);
    const [FourDay, SetFourDay] = useState(false);
    const [FiveDay, SetFiveDay] = useState(false);
    const [SixDay, SetSixDay] = useState(false);
    const [SevenDay, SetSevenDay] = useState(false);

    

   return (
       
   <View style={Styles.Main}>

      <Modal visible={FirstDay}>
        <View style={Styles.FullDay}>

            <AntDesign name="caretup" size={30} color="black" style={Styles.Caret} onPress={ () => SetFirstDay(false)} />
            <View style={Styles.Meal}>

                <View>
               
                <Text style={Styles.MealTxt}> ЗАВТРАК </Text> 
               
                </View>   

                <View style={Styles.DayNot}>
                
                    <View>
                    <Image source={{uri: 'https://img.povar.ru/main/0e/98/06/7f/omlet_kusochkami-224433.jpg'}}  style={Styles.Img}/>
                    </View>

                    <View style={Styles.MealDis}>
                        <Text style={Styles.MealTxt}> Омлет 200г{"\n"} Белки: 24 {"\n"} Жиры: 1.2{"\n"}  Углеводы: 22  </Text>
                    </View>
                </View>  
            
            </View>

            <View style={Styles.Meal}>
           
            <View>
               
               <Text style={Styles.MealTxt}> ОБЕД </Text> 
              
               </View>   

               <View style={Styles.DayNot}>
               
                   <View>
                   <Image source={{uri: 'https://img.delo-vcusa.ru/2020/11/Borshh-s-yablokami.jpg'}}  style={Styles.Img}/>
                   </View>

                   <View style={Styles.MealDis}>
                       <Text style={Styles.MealTxt}> Омлет 300г{"\n"} Белки: 12 {"\n"} Жиры: 6{"\n"}  Углеводы: 15  </Text>
                   </View>
               </View>  

            </View>

            <View style={Styles.Meal}>

            <View>
               
               <Text style={Styles.MealTxt}> УЖИН </Text> 
              
               </View>   

               <View style={Styles.DayNot}>
               
                   <View>
                   <Image source={{uri: 'https://static.1000.menu/img/content/3066/semga-zharenaya-s-kartofelem_max_5516.JPG'}}  style={Styles.Img}/>
                   </View>

                   <View style={Styles.MealDis}>
                       <Text style={Styles.MealTxt}> Сёмга с картофелем 300г{"\n"} Белки: 12 {"\n"} Жиры: 9{"\n"}  Углеводы: 12  </Text>
                   </View>
               </View>  

            </View>

        </View>
      </Modal>

      <View style={Styles.Day}> 
        <View style={Styles.DayEl}> 
            <Text style = {Styles.Txt}> ПОНЕДЕЛЬНИК </Text>
            <AntDesign name="caretdown" size={24} color="black" onPress={ () => SetFirstDay(true)}/>
        </View>
      </View>

      <Modal visible={SecondDay}>
        <View style={Styles.FullDay}>

            <AntDesign name="caretup" size={30} color="black" style={Styles.Caret} onPress={ () => SetSecondDay(false)} />
            <View style={Styles.Meal}>

                <View>
               
                <Text style={Styles.MealTxt}> ЗАВТРАК </Text> 
               
                </View>   

                <View style={Styles.DayNot}>
                
                    <View>
                    <Image source={{uri: 'https://recepti-vmultivarke.ru/wp-content/uploads/2016/03/gerkulesovaja_na_vode-06.png'}}  style={Styles.Img}/>
                    </View>

                    <View style={Styles.MealDis}>
                        <Text style={Styles.MealTxt}> Геркулесовая каша 200г{"\n"} Белки: 43 {"\n"} Жиры: 6{"\n"}  Углеводы: 130  </Text>
                    </View>
                </View>  
            
            </View>

            <View style={Styles.Meal}>
           
            <View>
               
               <Text style={Styles.MealTxt}> ОБЕД </Text> 
              
               </View>   

               <View style={Styles.DayNot}>
               
                   <View>
                   <Image source={{uri: 'https://www.maggi.ru/data/images/recept/img640x500/recept_7678_p0nh.jpg'}}  style={Styles.Img}/>
                   </View>

                   <View style={Styles.MealDis}>
                       <Text style={Styles.MealTxt}> Грибной суп 300г{"\n"} Белки: 3 {"\n"} Жиры: 5{"\n"}  Углеводы: 9  </Text>
                   </View>
               </View>  

            </View>

            <View style={Styles.Meal}>

            <View>
               
               <Text style={Styles.MealTxt}> УЖИН </Text> 
              
               </View>   

               <View style={Styles.DayNot}>
               
                   <View>
                   <Image source={{uri: 'https://horoshieprivychki.ru/wp-content/uploads/2017/03/-%D0%BA%D0%B0%D0%BB%D0%BE%D1%80%D0%B8%D0%B9%D0%BD%D0%BE%D1%81%D1%82%D1%8C-e1490506418761.png'}}  style={Styles.Img}/>
                   </View>

                   <View style={Styles.MealDis}>
                       <Text style={Styles.MealTxt}> Творог 200г{"\n"} Белки: 41 {"\n"} Жиры: 10{"\n"}  Углеводы: 6  </Text>
                   </View>
               </View>  

            </View>

        </View>
      </Modal>

      <View style={Styles.Day}> 
        <View style={Styles.DayEl}> 
            <Text style = {Styles.Txt}> ВТОРНИК </Text>
            <AntDesign name="caretdown" size={24} color="black" onPress={ () => SetSecondDay(true)}/>
        </View>
      </View>

      <Modal visible={ThirdDay}>
        <View style={Styles.FullDay}>

            <AntDesign name="caretup" size={30} color="black" style={Styles.Caret} onPress={ () => SetThirdDay(false)} />
            <View style={Styles.Meal}>

                <View>
               
                <Text style={Styles.MealTxt}> ЗАВТРАК </Text> 
               
                </View>   

                <View style={Styles.DayNot}>
                
                    <View>
                    <Image source={{uri: 'https://calorizator.ru/sites/default/files/imagecache/recipes_full/recipe/31407.jpg'}}  style={Styles.Img}/>
                    </View>

                    <View style={Styles.MealDis}>
                        <Text style={Styles.MealTxt}> Яичница с беконом 200г{"\n"} Белки: 24 {"\n"} Жиры: 40{"\n"}  Углеводы: 3  </Text>
                    </View>
                </View>  
            
            </View>

            <View style={Styles.Meal}>
           
            <View>
               
               <Text style={Styles.MealTxt}> ОБЕД </Text> 
              
               </View>   

               <View style={Styles.DayNot}>
               
                   <View>
                   <Image source={{uri: 'https://www.yournutrition.ru/images/recipes/5241/photo510.jpg'}}  style={Styles.Img}/>
                   </View>

                   <View style={Styles.MealDis}>
                       <Text style={Styles.MealTxt}> Форель запечённая 300г{"\n"} Белки: 60{"\n"} Жиры: 15{"\n"}  Углеводы: 3  </Text>
                   </View>
               </View>  

            </View>

            <View style={Styles.Meal}>

            <View>
               
               <Text style={Styles.MealTxt}> УЖИН </Text> 
              
               </View>   

               <View style={Styles.DayNot}>
               
                   <View>
                   <Image source={{uri: 'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/58796/696d5361d8eaf2e1759cfa98af72ce3a.jpg'}}  style={Styles.Img}/>
                   </View>

                   <View style={Styles.MealDis}>
                       <Text style={Styles.MealTxt}> Спаржа с зеленью 200г{"\n"} Белки: 4 {"\n"} Жиры: 0.2{"\n"}  Углеводы: 6  </Text>
                   </View>
               </View>  

            </View>

        </View>
      </Modal>

      <View style={Styles.Day}> 
        <View style={Styles.DayEl}> 
            <Text style = {Styles.Txt}> СРЕДА </Text>
            <AntDesign name="caretdown" size={24} color="black" onPress={ () => SetThirdDay(true)}/>
        </View>
      </View>

      <Modal visible={FourDay}>
        <View style={Styles.FullDay}>

            <AntDesign name="caretup" size={30} color="black" style={Styles.Caret} onPress={ () => SetFourDay(false)} />
            <View style={Styles.Meal}>

                <View>
               
                <Text style={Styles.MealTxt}> ЗАВТРАК </Text> 
               
                </View>   

                <View style={Styles.DayNot}>
                
                    <View>
                    <Image source={{uri: 'https://img.povar.ru/main/0e/98/06/7f/omlet_kusochkami-224433.jpg'}}  style={Styles.Img}/>
                    </View>

                    <View style={Styles.MealDis}>
                        <Text style={Styles.MealTxt}> Омлет 200г{"\n"} Белки: 24 {"\n"} Жиры: 1.2{"\n"}  Углеводы: 22  </Text>
                    </View>
                </View>  
            
            </View>

            <View style={Styles.Meal}>
           
            <View>
               
               <Text style={Styles.MealTxt}> ОБЕД </Text> 
              
               </View>   

               <View style={Styles.DayNot}>
               
               <View>
                   <Image source={{uri: 'https://www.maggi.ru/data/images/recept/img640x500/recept_7678_p0nh.jpg'}}  style={Styles.Img}/>
                   </View>

                   <View style={Styles.MealDis}>
                       <Text style={Styles.MealTxt}> Грибной суп 300г{"\n"} Белки: 3 {"\n"} Жиры: 5{"\n"}  Углеводы: 9  </Text>
                   </View>
               </View>  

            </View>

            <View style={Styles.Meal}>

            <View>
               
               <Text style={Styles.MealTxt}> УЖИН </Text> 
              
               </View>   

               <View style={Styles.DayNot}>
               
               <View>
                   <Image source={{uri: 'https://static.1000.menu/img/content/3066/semga-zharenaya-s-kartofelem_max_5516.JPG'}}  style={Styles.Img}/>
                   </View>

                   <View style={Styles.MealDis}>
                       <Text style={Styles.MealTxt}> Курица с картофелем 300г{"\n"} Белки: 12 {"\n"} Жиры: 9{"\n"}  Углеводы: 12  </Text>
                   </View>
               </View>  

            </View>

        </View>
      </Modal>

      <View style={Styles.Day}> 
        <View style={Styles.DayEl}> 
            <Text style = {Styles.Txt}> ЧЕТВЕРГ</Text>
            <AntDesign name="caretdown" size={24} color="black" onPress={ () => SetFourDay(true)}/>
        </View>
      </View>

      <Modal visible={FiveDay}>
        <View style={Styles.FullDay}>

            <AntDesign name="caretup" size={30} color="black" style={Styles.Caret} onPress={ () => SetFiveDay(false)} />
            <View style={Styles.Meal}>

                <View>
               
                <Text style={Styles.MealTxt}> ЗАВТРАК </Text> 
               
                </View>   

                <View style={Styles.DayNot}>
                
                    <View>
                    <Image source={{uri: 'https://povaresha.ru/wp-content/uploads/2021/10/ajca-vsmatku.png'}}  style={Styles.Img}/>
                    </View>

                    <View style={Styles.MealDis}>
                        <Text style={Styles.MealTxt}> Яйцо в смятку 2 штуки{"\n"} Белки: 13 {"\n"} Жиры: 12{"\n"}  Углеводы: 1  </Text>
                    </View>
                </View>  
            
            </View>

            <View style={Styles.Meal}>
           
            <View>
               
               <Text style={Styles.MealTxt}> ОБЕД </Text> 
              
               </View>   

               <View style={Styles.DayNot}>
               
                   <View>
                   <Image source={{uri: 'https://kopilka-kulinara.ru/upload/information_system_57/3/9/5/item_3956/item_3956.jpg'}}  style={Styles.Img}/>
                   </View>

                   <View style={Styles.MealDis}>
                       <Text style={Styles.MealTxt}> Запечённая курица с баклажанами 200г{"\n"} Белки: 14 {"\n"} Жиры: 4{"\n"}  Углеводы: 6  </Text>
                   </View>
               </View>  

            </View>

            <View style={Styles.Meal}>

            <View>
               
               <Text style={Styles.MealTxt}> УЖИН </Text> 
              
               </View>   

               <View style={Styles.DayNot}>
               
                   <View>
                   <Image source={{uri: 'https://freshday.ru/image/catalog/food_img/svezhie_ovoschi_870_gr.jpg'}}  style={Styles.Img}/>
                   </View>

                   <View style={Styles.MealDis}>
                       <Text style={Styles.MealTxt}> Свежие овощи 200г{"\n"} Белки: 2 {"\n"} Жиры: 0.2{"\n"}  Углеводы: 32  </Text>
                   </View>
               </View>  

            </View>

        </View>
      </Modal>

      <View style={Styles.Day}> 
        <View style={Styles.DayEl}> 
            <Text style = {Styles.Txt}> ПЯТНИЦА </Text>
            <AntDesign name="caretdown" size={24} color="black" onPress={ () => SetFiveDay(true)}/>
        </View>
      </View>

      <Modal visible={SixDay}>
        <View style={Styles.FullDay}>

            <AntDesign name="caretup" size={30} color="black" style={Styles.Caret} onPress={ () => SetSixDay(false)} />
            <View style={Styles.Meal}>

                <View>
               
                <Text style={Styles.MealTxt}> ЗАВТРАК </Text> 
               
                </View>   

                <View style={Styles.DayNot}>
                
                    <View>
                    <Image source={{uri: 'https://pomoshnica.info/wp-content/uploads/Ovsyanka-s-bananom-na-zavtrak-foto.jpg'}}  style={Styles.Img}/>
                    </View>

                    <View style={Styles.MealDis}>
                        <Text style={Styles.MealTxt}> Хлопья с фруктами 100г{"\n"} Белки: 10 {"\n"} Жиры: 2{"\n"}  Углеводы: 90  </Text>
                    </View>
                </View>  
            
            </View>

            <View style={Styles.Meal}>
           
            <View>
               
               <Text style={Styles.MealTxt}> ОБЕД </Text> 
              
               </View>   

               <View style={Styles.DayNot}>
               
               <View>
                   <Image source={{uri: 'https://petelinka.ru/storage/images/recipe/preview/baca434b8ec0441a9a380992b6c73e4310b5efee.jpg'}}  style={Styles.Img}/>
                   </View>

                   <View style={Styles.MealDis}>
                       <Text style={Styles.MealTxt}> Рисовый суп 200г{"\n"} Белки: 2 {"\n"} Жиры: 2{"\n"}  Углеводы: 9  </Text>
                   </View>
               </View>   

            </View>

            <View style={Styles.Meal}>

            <View>
               
               <Text style={Styles.MealTxt}> УЖИН </Text> 
              
               </View>   

               <View style={Styles.DayNot}>
               
               <View>
                   <Image source={{uri: 'https://horoshieprivychki.ru/wp-content/uploads/2017/03/-%D0%BA%D0%B0%D0%BB%D0%BE%D1%80%D0%B8%D0%B9%D0%BD%D0%BE%D1%81%D1%82%D1%8C-e1490506418761.png'}}  style={Styles.Img}/>
                   </View>

                   <View style={Styles.MealDis}>
                       <Text style={Styles.MealTxt}> Творог 200г{"\n"} Белки: 41 {"\n"} Жиры: 10{"\n"}  Углеводы: 6  </Text>
                   </View>
               </View>  

            </View>

        </View>
      </Modal>

      <View style={Styles.Day}> 
        <View style={Styles.DayEl}> 
            <Text style = {Styles.Txt}> СУББОТА </Text>
            <AntDesign name="caretdown" size={24} color="black" onPress={ () => SetSixDay(true)}/>
        </View>
      </View>

      <Modal visible={SevenDay}>
        <View style={Styles.FullDay}>

            <AntDesign name="caretup" size={30} color="black" style={Styles.Caret} onPress={ () => SetSevenDay(false)} />
            <View style={Styles.Meal}>

                <View>
               
                <Text style={Styles.MealTxt}> ЗАВТРАК </Text> 
               
                </View>   

                <View style={Styles.DayNot}>
                
                    <View>
                    <Image source={{uri: 'https://s1.eda.ru/StaticContent/Photos/130822102925/190811173919/p_O.jpg'}}  style={Styles.Img}/>
                    </View>

                    <View style={Styles.MealDis}>
                        <Text style={Styles.MealTxt}> Рисовая каша 200г{"\n"} Белки: 3 {"\n"} Жиры: 2{"\n"}  Углеводы: 25  </Text>
                    </View>
                </View>  
            
            </View>

            <View style={Styles.Meal}>
           
            <View>
               
               <Text style={Styles.MealTxt}> ОБЕД </Text> 
              
               </View>   

               <View style={Styles.DayNot}>
               
                   <View>
                   <Image source={{uri: 'https://img.povar.ru/main/8d/2e/2b/19/spagetti_s_indeikoi-570646.JPG'}}  style={Styles.Img}/>
                   </View>

                   <View style={Styles.MealDis}>
                       <Text style={Styles.MealTxt}> Спагетти с индейкой 200г{"\n"} Белки: 10 {"\n"} Жиры: 25{"\n"}  Углеводы: 30  </Text>
                   </View>
               </View>  

            </View>

            <View style={Styles.Meal}>

            <View>
               
               <Text style={Styles.MealTxt}> УЖИН </Text> 
              
               </View>   

               <View style={Styles.DayNot}>
               
                   <View>
                   <Image source={{uri: 'https://gotovim-doma.ru/images/recipe/8/de/8decb6dab54a707a89bd319a7f45aaeb_l.jpg'}}  style={Styles.Img}/>
                   </View>

                   <View style={Styles.MealDis}>
                       <Text style={Styles.MealTxt}> Сырники 3 штуки{"\n"} Белки: 6 {"\n"} Жиры: 1{"\n"}  Углеводы: 31  </Text>
                   </View>
               </View>  

            </View>

        </View>
      </Modal>

      <View style={Styles.Day}> 
        <View style={Styles.DayEl}> 
            <Text style = {Styles.Txt}> ВОСКРЕСЕНЬЕ </Text>
            <AntDesign name="caretdown" size={24} color="black" onPress={ () => SetSevenDay(true)}/>
        </View>
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
            height: deviceHeight * 90 / 100,
         },
         Day:
         {
            width : deviceWidth * 90 / 100,
            height: deviceHeight * 8 / 100, 
            backgroundColor: COLORS.white,
            borderRadius: 8/2,
            marginLeft: deviceWidth * 5 / 100,
            marginBottom: deviceWidth * 6 / 100,
         },
         DayEl:
         {
            flexDirection: "row",
            justifyContent:"space-between",
           

         },
         Txt:
         {
            textAlign: "center", 
            fontSize: SIZES.h2,
            paddingTop: '1%',
            color: COLORS.black,
         },
         Caret:
         {
            marginLeft: '3%',
            marginTop: '3%'
         },
         FullDay:
         {
            flexDirection: "column",
            justifyContent:"center",
         },
         Meal:
         {
            width : deviceWidth * 90 / 100,
            height: deviceHeight * 24 / 100,
            backgroundColor: COLORS.black,
            margin: '5%',
            borderRadius: 10/2,
         },
         DayNot:
         {
            flexDirection: "row",
            justifyContent:"space-between",
            margin: '10%',
           

         },
         MealTxt:
         {
            textAlign: "center",
            color: COLORS.white,
         },
         Img:
         {
            width : deviceWidth * 25 / 100,
            height: deviceHeight * 15 / 100,
         },
         
   }
)

