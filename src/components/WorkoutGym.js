import React, {useState} from "react";
import { COLORS,  SIZES } from "../../constants";
import { View, Text, StyleSheet, Dimensions, Modal, Image, ScrollView, TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;


const StylesM = StyleSheet.create 
(
{
    Txt:
    {
        color: COLORS.white,
        textAlign: "center",
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: deviceHeight * 5 / 100,


    },
    SVM:
    {
        backgroundColor: COLORS.black,
        
    },
    Exisize:
    {
        flexDirection: "row",
        justifyContent:"space-around",
        width : deviceWidth * 100 / 100,
        height: deviceHeight * 25 / 100,
        backgroundColor: COLORS.darkGray,
        borderRadius: 40/2,
        marginBottom: deviceHeight * 5 / 100,
    },
    Childer:
    {
        justifyContent:"center",
        width : deviceWidth * 40 / 100,
        
    }

}
)

export default function WorkoutGym()
{
    {/* Cardio UseState*/}
    const [SundayC, SetSundayC] = useState(false);
    const [MondayC, SetMondayC] = useState(false);
    const [ThuesdayC, SetThuesdayC] = useState(false);
    const [WednesdayC, SetWednesdayC] = useState(false);
    const [ThursdayC, SetThursdayC] = useState(false);
    const [FridayC, SetFridayC] = useState(false);
    const [SaturdayC, SetSaturdayC] = useState(false);
    {/* HardWork UseState*/}
    const [SundayH, SetSundayH] = useState(false);
    const [MondayH, SetMondayH] = useState(false);
    const [ThuesdayH, SetThuesdayH] = useState(false);
    const [WednesdayH, SetWednesdayH] = useState(false);
    const [ThursdayH, SetThursdayH] = useState(false);
    const [FridayH, SetFridayH] = useState(false);
    const [SaturdayH, SetSaturdayH] = useState(false);
    {/* Circle UseState*/}
    const [MondayCr, SetMondayCr] = useState(false);
    const [WednesdayCr, SetWednesdayCr] = useState(false);
    const [FridayCr, SetFridayCr] = useState(false);
    
 return (
  
    <ScrollView style = {Styles.Father}>
            {/* Cardio */}
             {/* 1 */}
        <Modal visible={MondayC}>
        <View >

            <AntDesign name="close" size={30} color="black" style={Styles.Caret} onPress={ () => SetMondayC(false)} />
            <ScrollView style = {StylesM.SVM}>

                <View >
                    <Text style={StylesM.Txt}>
                        Во время кардио тренировки эффективно использовать 2-3 тренажёра. {"\n"}
                        В настройках тренажёра используйте уровень нагрузки 5-8 в зависимости от вашего состояния. {"\n"}
                        Лучший эффект приносит использование одного тренажёра до 15 минут, также это не будет вредить сердцу.
                    </Text>
                    
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://life4health.ru/wp-content/uploads/2017/11/Beg-na-begovoj-dorozhke-dlya-pohudeniya_001.jpg'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Разминка. {"\n"}
                        Беговая дорожка, скорость 5 - 5 минут.
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://life4health.ru/wp-content/uploads/2017/11/Beg-na-begovoj-dorozhke-dlya-pohudeniya_001.jpg'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Упр. 1 {"\n"}
                        Беговая дорожка, скорость 7-10, до 15 минут.
                    </Text> 
                    </View>
                </View>
            
                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'http://www.menslife.com/upload/iblock/b0e/uprazhneniya_na_velotrenazhere_chtoby_sbrosit_ves_i_povysit_vynoslivost.jpg'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Упр. 2 {"\n"}
                        Велотренажёр, нагрузка 7-10, до 20 минут.
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://dns-magazin.ru/wp-content/uploads/mini-1-10.jpg'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Упр. 3 {"\n"}
                        Степпер, нагрузка 5-8, до 10 минут.
                    </Text> 
                    </View>
                </View>

            </ScrollView>
        </View>
        </Modal>
            {/* 2 */}
        <Modal visible={ThuesdayC}>
        <View >

            <AntDesign name="close" size={30} color="black" style={Styles.Caret} onPress={ () => SetThuesdayC(false)} />
            <ScrollView style = {StylesM.SVM}>

                <View >
                    <Text style={StylesM.Txt}>
                        Каждое упражнение выполняем 30 секунд, затем 30 секунд отдых. {"\n"}
                        Круг повторяем 3 раза. {"\n"}
                        Между кругами 1-2 минуты отдыха.
                    </Text>
                    
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2021/02/Beg_zahlest_goleni.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Бег с захлёстом голени
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/03/Prizemistye_pryzhki.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Прыжёк сумо
                    </Text> 
                    </View>
                </View>               
                
                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/04/Alpinist-2.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Горизонтальный бег
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/03/Razvedenie_ruk_v_poluprisede.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Блок в движении
                    </Text> 
                    </View>
                </View>

            </ScrollView>
        </View>
        </Modal>
            {/* 3 */}
        <Modal visible={WednesdayC}>
        <View >

            <AntDesign name="close" size={30} color="black" style={Styles.Caret} onPress={ () => SetWednesdayC(false)} />
            <ScrollView style = {StylesM.SVM}>

                <View >
                    <Text style={StylesM.Txt}>
                        Каждое упражнение выполняем 30 секунд, затем 15 секунд отдых. {"\n"}
                        Круг повторяем 3 раза. {"\n"}
                        Между кругами 1-2 минуты отдыха.
                    </Text>
                    
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/08/Lyzhnik.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Пархающий лыжник
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2021/02/Beg_vysokij_podem_kolen.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Бег с подъёмом колен
                    </Text> 
                    </View>
                </View>               
                
                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/03/Burpee.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Бёрпи
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/03/Jumping_Jack_Planka.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Прыжки с разведением ног в планке
                    </Text> 
                    </View>
                </View>

            </ScrollView>
        </View>
        </Modal>
            {/* 4 */}
        <Modal visible={ThursdayC}>
        <View >

            <AntDesign name="close" size={30} color="black" style={Styles.Caret} onPress={ () => SetThursdayC(false)} />
            <ScrollView style = {StylesM.SVM}>

                <View >
                    <Text style={StylesM.Txt}>
                        Каждое упражнение выполняем 30 секунд, затем 20 секунд отдых. {"\n"}
                        Круг повторяем 2 раза. {"\n"}
                        Между кругами 30 секунд отдыха.
                    </Text>
                    
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/12/Prised_vyprigivanie.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Приседания с выпрыгиванием
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/08/Konkobezhec.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Конькобежец
                    </Text> 
                    </View>
                </View>               
                
                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/03/Burpee.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Бёрпи
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/03/Jumping_Jack_Planka.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Прыжки с разведением ног в планке
                    </Text> 
                    </View>
                </View>

            </ScrollView>
        </View>
        </Modal>
            {/* 5 */}
        <Modal visible={FridayC}>
        <View >

            <AntDesign name="close" size={30} color="black" style={Styles.Caret} onPress={ () => SetFridayC(false)} />
            <ScrollView style = {StylesM.SVM}>

                <View >
                    <Text style={StylesM.Txt}>
                        Каждое упражнение выполняем 45 секунд, затем 30 секунд отдых. {"\n"}
                        Круг повторяем 2 раза. {"\n"}
                        Между кругами 1 минута отдыха.
                    </Text>
                    
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/03/Prizemistye_pryzhki.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Прыжёк сумо
                    </Text> 
                    </View>
                </View>      

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/04/Alpinist-2.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Горизонтальный бег
                    </Text> 
                    </View>
                </View>              
                
                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/03/Burpee.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Бёрпи
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/03/Jumping_Jack_Planka.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Прыжки с разведением ног в планке
                    </Text> 
                    </View>
                </View>

            </ScrollView>
        </View>
        </Modal>
            {/* 6 */}
        <Modal visible={SaturdayC}>
        <View >

            <AntDesign name="close" size={30} color="black" style={Styles.Caret} onPress={ () => SetSaturdayC(false)} />
            <ScrollView style = {StylesM.SVM}>

                <View >
                    <Text style={StylesM.Txt}>
                        Каждое упражнение выполняем 45 секунд, затем 30 секунд отдых. {"\n"}
                        Круг повторяем 4 раза. {"\n"}
                        Между кругами 1 минута отдыха.
                    </Text>
                    
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/03/Burpee.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Бёрпи
                    </Text> 
                    </View>
                </View>   

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2021/02/Beg_vysokij_podem_kolen.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Бег с подъёмом колен
                    </Text> 
                    </View>
                </View>                 
                
                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/12/Prised_vyprigivanie.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Приседания с выпрыгиванием
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/03/Jumping_Jack_Planka.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Прыжки с разведением ног в планке
                    </Text> 
                    </View>
                </View>

            </ScrollView>
        </View>
        </Modal>
            {/* 7 */}
        <Modal visible={SundayC}>
        <View >

            <AntDesign name="close" size={30} color="black" style={Styles.Caret} onPress={ () => SetSundayC(false)} />
            <ScrollView style = {StylesM.SVM}>

                <View >
                    <Text style={StylesM.Txt}>
                        Каждое упражнение выполняем 45 секунд, затем 30 секунд отдых. {"\n"}
                        Круг повторяем 3 раза. {"\n"}
                        Между кругами 2 минуты отдыха.
                    </Text>
                    
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/03/Burpee.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Бёрпи
                    </Text> 
                    </View>
                </View>   

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2021/02/Beg_vysokij_podem_kolen.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Бег с подъёмом колен
                    </Text> 
                    </View>
                </View>                 
                
                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/12/Prised_vyprigivanie.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Приседания с выпрыгиванием
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/03/Jumping_Jack_Planka.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Прыжки с разведением ног в планке
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/04/Alpinist-2.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Горизонтальный бег
                    </Text> 
                    </View>
                </View>  

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/03/Prizemistye_pryzhki.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Прыжёк сумо
                    </Text> 
                    </View>
                </View>   

            </ScrollView>
        </View>
        </Modal>
            {/* Cardio */}

            <Text style = {Styles.TxtM}> КАРДИО ТРЕНИРОВКА </Text>

        <View style = {Styles.MainOwner}>  

            <View style = {Styles.NextParent}>

                <View style = {Styles.YoungerParent} > 
                <TouchableOpacity onPress={ () => SetMondayC(true)}>
                    <Text style = {Styles.Txt}> ПОНЕДЕЛЬНИК</Text>
                </TouchableOpacity>
                </View>

                <View style = {Styles.YoungerParent}>
                <TouchableOpacity onPress={ () => SetThuesdayC(true)}>
                    <Text style = {Styles.Txt}> ВТОРНИК</Text>
                </TouchableOpacity>
                </View>

                <View style = {Styles.YoungerParent}>
                <TouchableOpacity onPress={ () => SetWednesdayC(true)}>
                    <Text style = {Styles.Txt}> СРЕДА</Text>
                </TouchableOpacity>
                </View>

            </View>

            <View style = {Styles.NextParent}>

                <View style = {Styles.YoungerParent}> 
                <TouchableOpacity onPress={ () => SetThursdayC(true)}>
                    <Text style = {Styles.Txt}> ЧЕТВЕРГ</Text>
                </TouchableOpacity>
                </View>

                <View style = {Styles.YoungerParent}>
                <TouchableOpacity onPress={ () => SetFridayC(true)}>
                    <Text style = {Styles.Txt}> ПЯТНИЦА</Text>
                </TouchableOpacity>
                </View>

                <View style = {Styles.YoungerParent}>
                <TouchableOpacity onPress={ () => SetSaturdayC(true)}>
                    <Text style = {Styles.Txt}> СУББОТА</Text>
                </TouchableOpacity>
                </View>

            </View>

            <View style = {Styles.NextParent}>

                <View style = {Styles.YoungerParent}> 
                <TouchableOpacity onPress={ () => SetSundayC(true)}>
                    <Text style = {Styles.Txt}> ВОСКРЕСЕНЬЕ</Text>
                </TouchableOpacity>
                </View>

            </View>

        </View>

        {/* HardWork */}

          {/* 1 */}
          <Modal visible={MondayH}>
        <View >

            <AntDesign name="close" size={30} color="black" style={Styles.Caret} onPress={ () => SetMondayH(false)} />
            <ScrollView style = {StylesM.SVM}>

                <View >
                    <Text style={StylesM.Txt}>
                        День груди и бицепса. {"\n"}
                        8 упражнений в среднем по 3 подхода. {"\n"}
                        Вес и количество повторений выбирайте по своему состоянию!
                    </Text>
                    
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://fitseven.ru/wp-content/uploads/2019/09/otjimaniya-1.jpg'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Отжимания от пола. {"\n"}
                        15 повторений по 3 подхода.
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://fitseven.ru/wp-content/uploads/2019/09/svedeniya-na-grud.jpg'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Сведения на грудь в тренажёре. {"\n"}
                        15 повторений по 3 подхода.
                    </Text> 
                    </View>
                </View>
            
                <View style={StylesM.Exisize}>
                    
                   <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://fitseven.ru/wp-content/uploads/2019/09/jim-shtangi-leja.jpg'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Жим штанги лёжа.{"\n"}
                        7 повторений 4 подхода.
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://fitseven.ru/wp-content/uploads/2019/09/shtanga-na-biceps.jpg'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Подъём штанги на бицепс стоя. {"\n"}
                        15 повторений по 3 подхода.
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://fitseven.ru/wp-content/uploads/2020/10/podyem-na-biceps-icon.jpg'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Бицепс в скамье Смитта. {"\n"}
                        10 повторений по 3 подхода.
                    </Text> 
                    </View>
                </View>
            </ScrollView>
        </View>
        </Modal>
            {/* 2 */}
        <Modal visible={ThuesdayH}>
        <View >

            <AntDesign name="close" size={30} color="black" style={Styles.Caret} onPress={ () => SetThuesdayH(false)} />
            <ScrollView style = {StylesM.SVM}>

            <View >
                    <Text style={StylesM.Txt}>
                        День ног {"\n"}
                        3 упражнений в среднем по 3 подхода. {"\n"}
                        Вес и количество повторений выбирайте по своему состоянию!
                    </Text>
                    
                </View>    

            <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://fitseven.ru/wp-content/uploads/2019/09/prisedaniya-so-shtangoy.jpg'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Приседания со штангой. {"\n"}
                        10 повторений по 4 подхода.
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://fitseven.ru/wp-content/uploads/2019/09/razgibaniya-nog-v-trenajere.jpg'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Разгабинае ног в тренажёре.{"\n"}
                        15 повторений по 3 подхода.
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://fitseven.ru/wp-content/uploads/2019/09/vypady.jpg'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Выпады.{"\n"}
                        15 повторений по 3 подхода.
                    </Text> 
                    </View>
                </View>

            </ScrollView>
        </View>
        </Modal>
            {/* 3 */}
        <Modal visible={WednesdayH}>
        <View >

            <AntDesign name="close" size={30} color="black" style={Styles.Caret} onPress={ () => SetWednesdayH(false)} />
            <ScrollView style = {StylesM.SVM}>

                <View >
                    <Text style={StylesM.Txt}>
                        День трицепса и плеч. {"\n"}
                        3 подхода по 8-12 раз. {"\n"}
                        Вес подбирать по вашим возможностям.
                    </Text>
                    
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2021/04/Razgibanie_ganteli_iz_za_golovy_odnoj_rukoj_2.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Разгибание руки из-за головы
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2021/04/Otvedenie_ruk_v_naklone_2.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Разгибание рук в наклоне
                    </Text> 
                    </View>
                </View>               
                
                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2021/04/Otzhimaniya_almaznye.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Алмазные отжимания
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/02/Zhim_ganteley_stoya.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Жим гантелей (Армейский жим)
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/02/Razvedenie_gantelej_cherez_storony-1.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Разведение рук с гантелями стоя
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/02/Podem_ruki_pered_soboj.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Подъемы рук перед собой
                    </Text> 
                    </View>
                </View>

            </ScrollView>
        </View>
        </Modal>
            {/* 4 */}
        <Modal visible={ThursdayH}>
        <View >

            <AntDesign name="close" size={30} color="black" style={Styles.Caret} onPress={ () => SetThursdayH(false)} />
            <ScrollView style = {StylesM.SVM}>

                <View>
                    <Text style={StylesM.Txt}>
                        Тренировка спины{"\n"}
                        Выполняем от 3х до 5ти подоходов.{"\n"}
                        Вес по ощущениям, 12 повторений.
                    </Text>
                    
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2021/04/Tyaga_shtangi_v_naklone.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Тяга штанги в наклоне прямым хватом
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/03/Stanovaya_tyaga-2.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Становая тяга со штангой
                    </Text> 
                    </View>
                </View>               
                
                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2021/04/Shragi_so_shtangoj.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Шраги со штангой стоя (для трапеции)
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2021/04/Tyaga_shtangi_odnoj_rukoj.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Тяга штанги одной рукой
                    </Text> 
                    </View>
                </View>

            </ScrollView>
        </View>
        </Modal>
            {/* 5 */}
        <Modal visible={FridayH}>
        <View >

            <AntDesign name="close" size={30} color="black" style={Styles.Caret} onPress={ () => SetFridayH(false)} />
            <ScrollView style = {StylesM.SVM}>

                <View >
                    <Text style={StylesM.Txt}>
                        Тренировка ног и груди.{"\n"}
                        По 3 подхода 8-12 повторений. {"\n"}
                        Вес смотреть по ощущениям.
                    </Text>
                    
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://i0.wp.com/genetics.uz/wp-content/uploads/2019/06/Podem-na-noski-v-trenazhere.gif?ssl=1'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Подъём носков сидя
                    </Text> 
                    </View>
                </View>                    
                
                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://imbbarbell.ru/upload/iblock/2bf/2bf2a2a1669d5204fa51808bb4b99a4a.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Жим ногами
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://www.body-builder.info/wp-content/uploads/2015/04/Sgibanie-nog-lezha-01.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Разгибание ног в тренажере
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://makefitness.pro/wp-content/uploads/2020/02/%D0%B6%D0%B8%D0%BC-%D0%B3%D0%B0%D0%BD%D1%82%D0%B5%D0%BB%D0%B5%D0%B9-%D0%BB%D1%91%D0%B6%D0%B0-1.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Жим гантелей лёжа
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://yourfitnesslife.ru/wp-content/uploads/2020/07/%D0%B6%D0%B8%D0%BC-%D0%B3%D0%B0%D0%BD%D1%82%D0%B5%D0%BB%D0%B5%D0%B9-%D0%BB%D0%B5%D0%B6%D0%B0-%D0%BD%D0%B0-%D0%BD%D0%B0%D0%BA%D0%BB%D0%BE%D0%BD%D0%BD%D0%BE%D0%B9-%D1%81%D0%BA%D0%B0%D0%BC%D1%8C%D0%B5.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Жим гантелей 45 градусов
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/03/Razvedenie_ruk_skamya.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Разведение гантелей в стороны
                    </Text> 
                    </View>
                </View>

            </ScrollView>
        </View>
        </Modal>
            {/* 6 */}
        <Modal visible={SaturdayH}>
        <View >

            <AntDesign name="close" size={30} color="black" style={Styles.Caret} onPress={ () => SetSaturdayH(false)} />
            <ScrollView style = {StylesM.SVM}>

                <View >
                    <Text style={StylesM.Txt}>
                        Тренировка бицепса и трицепса.{"\n"}
                        2-4 подхода по 10 повторений.{"\n"}
                        Вес по ощущениям.
                    </Text>
                    
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/02/Otvedenie_ruk_v_naklone_skamya.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Разгибание одной руки с опорой на скамью
                    </Text> 
                    </View>
                </View>   

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/04/Razgibaniya_ruk_lezha.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Разгибание рук с гантелями лежа
                    </Text> 
                    </View>
                </View>                 
                
                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/08/Pullover.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Пуловер
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/03/Sgibanie_ruk_molotkom.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Подъемы гантелей на бицепс молотком
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/03/Sgibanie_ruk_s_supinaciej_2.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Подъемы гантелей на бицепс с супинацией
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/03/Sgibanie_ruk_na_skame.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Подъемы гантелей на наклонной скамье
                    </Text> 
                    </View>
                </View>

            </ScrollView>
        </View>
        </Modal>
            {/* 7 */}
        <Modal visible={SundayH}>
        <View >

            <AntDesign name="close" size={30} color="black" style={Styles.Caret} onPress={ () => SetSundayH(false)} />
            <ScrollView style = {StylesM.SVM}>

                <View >
                    <Text style={StylesM.Txt}>
                        Тренировка плеч.{"\n"}
                        Делаем 4 подхода 8-12 раз. {"\n"}
                        Вес по усмотрению.
                    </Text>
                    
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/02/Tyaga_gentelej_k_podborodku.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Тяга гантелей к подбородку
                    </Text> 
                    </View>
                </View>   

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/02/Razvedenie_ruk_v_naklone.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Разведение рук в наклоне
                    </Text> 
                    </View>
                </View>                 
                
                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/02/Zhim_arnolda_sidya.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Жим Арнольда
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/02/Razvedenie_ruk_lezha_skamya.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Разведение гантелей в стороны лежа лицом вниз
                    </Text> 
                    </View>
                </View>

                 

            </ScrollView>
        </View>
        </Modal>

        {/* HardWork */}

       
        <Text style = {Styles.TxtM}> СИЛОВАЯ ТРЕНИРОВКА </Text>

        <View style = {Styles.MainOwner}>  

            <View style = {Styles.NextParent}>

                <View style = {Styles.YoungerParent}> 
                <TouchableOpacity onPress={ () => SetMondayH(true)}>
                    <Text style = {Styles.Txt}> ПОНЕДЕЛЬНИК</Text>
                </TouchableOpacity>
                </View>

                <View style = {Styles.YoungerParent}>
                <TouchableOpacity onPress={ () => SetThuesdayH(true)}>
                    <Text style = {Styles.Txt}> ВТОРНИК</Text>
                </TouchableOpacity>
                </View>

                <View style = {Styles.YoungerParent}>
                <TouchableOpacity onPress={ () => SetWednesdayH(true)}>
                    <Text style = {Styles.Txt}> СРЕДА</Text>
                </TouchableOpacity>
                </View>

            </View>

            <View style = {Styles.NextParent}>

                <View style = {Styles.YoungerParent}> 
                <TouchableOpacity onPress={ () => SetThursdayH(true)}>
                    <Text style = {Styles.Txt}> ЧЕТВЕРГ</Text>
                </TouchableOpacity>
                </View>

                <View style = {Styles.YoungerParent}>
                <TouchableOpacity onPress={ () => SetFridayH(true)}>
                    <Text style = {Styles.Txt}> ПЯТНИЦА</Text>
                </TouchableOpacity>
                </View>

                <View style = {Styles.YoungerParent}>
                <TouchableOpacity onPress={ () => SetSaturdayH(true)}>
                    <Text style = {Styles.Txt}> СУББОТА</Text>
                </TouchableOpacity>
                </View>

            </View>

            <View style = {Styles.NextParent}>

                <View style = {Styles.YoungerParent}> 
                <TouchableOpacity onPress={ () => SetSundayH(true)}>
                    <Text style = {Styles.Txt}> ВОСКРЕСЕНЬЕ</Text>
                </TouchableOpacity>
                </View>

            </View>

        </View>

        {/* Circle training*/}

        {/*1*/}

        <Modal visible={MondayCr}>
        <View >

            <AntDesign name="close" size={30} color="black" style={Styles.Caret} onPress={ () => SetMondayCr(false)} />
            <ScrollView style = {StylesM.SVM}>

                <View >
                    <Text style={StylesM.Txt}>
                        Круговая тренировка 1. {"\n"}
                        Выполняем 3 круга, в каждом круге 1 подход по 15 воторений на упражнение.{"\n"}
                        Вес по усмотрению, между кругами отдых 2 минуты.
                    </Text>
                    
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://cross.expert/wp-content/uploads/2018/03/ZHim-shtangi-lezha-shirokim-hvatom-na-gorizontalnoj-skame.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Жим штанги лёжа
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://i1.wp.com/genetics.uz/wp-content/uploads/2019/10/tyaga-verhnego-bloka-k-grudi.gif?fit=1024%2C1024&ssl=1'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Тяга верхнего блока к груди
                    </Text> 
                    </View>
                </View>
            
                <View style={StylesM.Exisize}>
                    
                   <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://imbbarbell.ru/upload/iblock/2bf/2bf2a2a1669d5204fa51808bb4b99a4a.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Жим штанги
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://i1.wp.com/genetics.uz/wp-content/uploads/2019/11/sgibanie-nog.gif?resize=500%2C500&ssl=1'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Сгибание ног в тренажёре
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/08/Razgibanie_ganteli_iz_za_golovy.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Разгибание рук с гантелью из-за головы
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://makefitness.pro/wp-content/uploads/2020/11/%D1%81%D0%B3%D0%B8%D0%B1%D0%B0%D0%BD%D0%B8%D1%8F-%D1%80%D1%83%D0%BA-%D0%BD%D0%B0-%D1%81%D0%BA%D0%B0%D0%BC%D1%8C%D0%B5-%D0%A1%D0%9A%D0%BE%D1%82%D1%82%D0%B0.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Подъём на бицепс в скамь
                    </Text> 
                    </View>
                </View>
            </ScrollView>
        </View>
        </Modal>

        {/*2*/}

        {/*2*/}

        <Modal visible={WednesdayCr}>
        <View >

            <AntDesign name="close" size={30} color="black" style={Styles.Caret} onPress={ () => SetWednesdayCr(false)} />
            <ScrollView style = {StylesM.SVM}>

                <View >
                    <Text style={StylesM.Txt}>
                        Круговая тренировка 2. {"\n"}
                        Выполняем 3 круга, в каждом круге 1 подход по 15 воторений на упражнение.{"\n"}
                        Вес по усмотрению, между кругами отдых 2 минуты.
                    </Text>
                    
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://blog.pokupon.ua/wp-content/uploads/2021/05/zhym-nohamy-v-trenazhere.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Жим ногами
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://www.body-builder.info/wp-content/uploads/2015/04/Giperekstenziya-dlya-myshts-spiny-01.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Гиперэкстензия
                    </Text> 
                    </View>
                </View>
            
                <View style={StylesM.Exisize}>
                    
                   <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://yourfitnesslife.ru/wp-content/uploads/2020/07/%D0%B6%D0%B8%D0%BC-%D0%B3%D0%B0%D0%BD%D1%82%D0%B5%D0%BB%D0%B5%D0%B9-%D0%BB%D0%B5%D0%B6%D0%B0-%D0%BD%D0%B0-%D0%BD%D0%B0%D0%BA%D0%BB%D0%BE%D0%BD%D0%BD%D0%BE%D0%B9-%D1%81%D0%BA%D0%B0%D0%BC%D1%8C%D0%B5.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Жим гантелей лежа
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://makefitness.pro/wp-content/uploads/2020/02/%D0%9F%D0%BE%D0%B4%D1%82%D1%8F%D0%B3%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D1%88%D0%B8%D1%80%D0%BE%D0%BA%D0%B8%D0%BC-%D1%85%D0%B2%D0%B0%D1%82%D0%BE%D0%BC.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Подтягивания широким хватом
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://i2.wp.com/genetics.uz/wp-content/uploads/2019/06/Armejskij-zhim-stoya-genetics.uz_.gif?resize=512%2C512&ssl=1'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Армейский жим
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/02/Tyga_gantelej_v_naklone.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Тяга гантелей в наклоне
                    </Text> 
                    </View>
                </View>
            </ScrollView>
        </View>
        </Modal>

        {/*3*/}

        <Modal visible={FridayCr}>
        <View >

            <AntDesign name="close" size={30} color="black" style={Styles.Caret} onPress={ () => SetFridayCr(false)} />
            <ScrollView style = {StylesM.SVM}>

                <View >
                    <Text style={StylesM.Txt}>
                        Круговая тренировка 3. {"\n"}
                        Выполняем 3 круга, в каждом круге 1 подход по 15 воторений на упражнение.{"\n"}
                        Вес по усмотрению, между кругами отдых 2 минуты.
                    </Text>
                    
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/03/Sgibanie_ruk_obratnyj_hvat_shtanga.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Подъём штанги на бицепс
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://delavie.ru/wp-content/uploads/2016/8/ruktriz10.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Жим штанги узким хватом
                    </Text> 
                    </View>
                </View>
            
                <View style={StylesM.Exisize}>
                    
                   <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://yourfitnesslife.ru/wp-content/uploads/2020/07/%D0%B6%D0%B8%D0%BC-%D0%B3%D0%B0%D0%BD%D1%82%D0%B5%D0%BB%D0%B5%D0%B9-%D0%BB%D0%B5%D0%B6%D0%B0-%D0%BD%D0%B0-%D0%BD%D0%B0%D0%BA%D0%BB%D0%BE%D0%BD%D0%BD%D0%BE%D0%B9-%D1%81%D0%BA%D0%B0%D0%BC%D1%8C%D0%B5.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Жим гантелей лежа
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/06/Vypad_bolgarskij_ganteli.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Болгарские выпады
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://www.body-builder.info/wp-content/uploads/2015/04/Giperekstenziya-dlya-myshts-spiny-01.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Гиперэкстензия
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://delavie.ru/wp-content/uploads/2016/8/spinsh43.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Тяга нижнего блока к поясу
                    </Text> 
                    </View>
                </View>
            </ScrollView>
        </View>
        </Modal>

        {/* Circle training*/}

        {/* next training */}
        <Text style = {Styles.TxtM}> КРУГОВАЯ ТРЕНИРОВКА </Text>

         <View style = {Styles.MainOwner}>  

            <View style = {Styles.NextParent}>

                <View style = {Styles.YoungerParentWarning}> 
                    <Text style = {Styles.Txt}> Круговые тренировки рекомендуется проводить около 3х раз в неделю из - за высоких нагрузок. Поэтому и план на 3 дня. </Text>
                </View>

            </View>

            <View style = {Styles.NextParent}>

                <View style = {Styles.YoungerParent}> 
                <TouchableOpacity onPress={ () => SetMondayCr(true)}>
                    <Text style = {Styles.Txt}> ПОНЕДЕЛЬНИК</Text>
                </TouchableOpacity>
                </View>

                <View style = {Styles.YoungerParent}>
                <TouchableOpacity onPress={ () => SetWednesdayCr(true)}>
                    <Text style = {Styles.Txt}> СРЕДА</Text>
                </TouchableOpacity>              
                </View>

                <View style = {Styles.YoungerParent}>
                <TouchableOpacity onPress={ () => SetFridayCr(true)}>
                    <Text style = {Styles.Txt}> ПЯТНИЦА</Text>
                </TouchableOpacity>              
                </View>

            </View>

        </View>

    </ScrollView>

    )
}

const Styles = StyleSheet.create 
(
{
    Father:
    {
        backgroundColor: COLORS.flashWhite,    
        
    },
    MainOwner:
    {
        flexDirection: "column",
        justifyContent:"center",
        width : deviceWidth * 100 / 100,
        height: deviceHeight * 95 / 100,
       
        
    },

    NextParent:
    {
        flexDirection: "row",
        justifyContent:"space-between",
        width : deviceWidth * 100 / 100,
        height: deviceHeight * 25 / 100,
        backgroundColor: COLORS.gray,
            
    },
    YoungerParent:
    {
        width : deviceWidth * 30 / 100,
        height: deviceHeight * 20 / 100,
        backgroundColor: COLORS.red,
        justifyContent: "center",
        backgroundColor: COLORS.white, 
        borderRadius: 35/2,
        marginTop: deviceHeight * 2 / 100
       
    },
    YoungerParentWarning:
    {
        width : deviceWidth * 80 / 100,
        height: deviceHeight * 20 / 100,
        backgroundColor: COLORS.red,
        justifyContent: "center",
        backgroundColor: COLORS.white, 
        borderRadius: 35/2,
        marginTop: deviceHeight * 2 / 100,
        marginLeft: deviceWidth * 10/100
    },
    Txt:
    {
        textAlign: "center",
        fontSize: 12,
        fontWeight: "bold"
    },
    TxtM:
    {
        fontSize: SIZES.h1,
        textAlign: "center",
        marginTop:  deviceHeight * 5 / 100
    },
    Img:
    {
        width : deviceWidth * 30 / 100,
        height: deviceHeight * 20 / 100,
    }



}
)