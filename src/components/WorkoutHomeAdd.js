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
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/12/Prisedanie_ruki_vpered.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Приседания с вытягиванием рук
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2021/02/Vypady_vpered_bystro.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Классические выпады
                    </Text> 
                    </View>
                </View>
            
                <View style={StylesM.Exisize}>
                    
                   <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2021/02/Otzhimaniya_kasanie_plech.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Отжимания с касаниями рукой плеча
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/10/Hyperextensiya_babochka.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Лодочка с подведением рук к бедрам
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2021/02/Podemy_k_stopam_cardio.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Скручивание корпуса к вытянутым ногам
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
                        Тренировка спины. {"\n"}
                        Делаем 3 подхода по 12 повторений. {"\n"}
                        Вес выбираем по своему состоянию!
                    </Text>
                    
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2018/04/%D0%9F%D0%BE%D0%B4%D1%82%D1%8F%D0%B3%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA%D0%B0-2.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Подтягивание средний хват
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://makefitness.pro/wp-content/uploads/2020/02/%D0%9F%D0%BE%D0%B4%D1%82%D1%8F%D0%B3%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D1%88%D0%B8%D1%80%D0%BE%D0%BA%D0%B8%D0%BC-%D1%85%D0%B2%D0%B0%D1%82%D0%BE%D0%BC.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Подтягивание широкий хват
                    </Text> 
                    </View>
                </View>
            
                <View style={StylesM.Exisize}>
                    
                   <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://go29.ru/wp-content/uploads/2018/07/158.3-%D0%9F%D0%BE%D0%B4%D1%82%D1%8F%D0%B3%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D1%83%D0%B7%D0%BA%D0%B8%D0%BC-%D1%85%D0%B2%D0%B0%D1%82%D0%BE%D0%BC-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%B0-%D0%B8-%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA%D0%B0.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Подтягивания узким хватом
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2018/04/%D0%90%D0%B2%D1%81%D1%82%D1%80%D0%B0%D0%BB%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B5-%D0%BF%D0%BE%D0%B4%D1%82%D1%8F%D0%B3%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Австралийские подтягивания
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
                        Тренировка бицепса. {"\n"}
                        Делаем 3 подхода по 12 повторений. {"\n"}
                        Вес выбираем по своему состоянию!
                    </Text>
                    
                </View>    

            <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://delavie.ru/wp-content/uploads/2016/8/spinsh4.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Подтягивания обратным хватом
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://sunmag.me/wp-content/uploads/2019/04/sunmag-ganteli.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Подъём гантелей на бицепс
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/03/Sgibanie_ruk_molotkom.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Молотки
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
                        Тренировка трицепса.{"\n"}
                        Делаем 3 подхода по 12 повторений. {"\n"}
                        Вес выбираем по своему состоянию!
                    </Text>
                    
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://yourfitnesslife.ru/wp-content/uploads/2020/07/%D0%BE%D1%82%D0%B6%D0%B8%D0%BC%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BD%D0%B0-%D0%B1%D1%80%D1%83%D1%81%D1%8C%D1%8F%D1%85-%D0%B4%D0%BB%D1%8F-%D0%B3%D1%80%D1%83%D0%B4%D0%B8.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Отжимания на брусьях
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/09/Obratnye_otzhimaniya.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Отжимание от скамьи обратным хватом
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

                <View >
                    <Text style={StylesM.Txt}>
                        День ног {"\n"}
                        Делаем 4 подхода по 20 повторений {"\n"}
                        Отдых между упражнениями минута, между подходами 3 минуты.
                    </Text>
                    
                </View> 

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://makefitness.pro/wp-content/uploads/2020/09/%D0%BF%D1%80%D0%B8%D1%81%D0%B5%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Приседания
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://makefitness.pro/wp-content/uploads/2020/02/%D0%B2%D1%8B%D0%BF%D0%B0%D0%B4%D1%8B-%D0%B2-%D1%81%D1%82%D0%BE%D1%80%D0%BE%D0%BD%D1%83.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                      Выпады
                    </Text> 
                    </View>
                </View>
      
                
                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/07/Vypad_diagonal_2.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Болгарские приседания
                    </Text> 
                    </View>
                </View>   

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/05/Prisidanie_prisedanie_pryzhok.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Приседания с выпрыгиванием
                    </Text> 
                    </View>
                </View>                 
                
                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://i0.wp.com/genetics.uz/wp-content/uploads/2019/06/Podyom-iz-polozheniya-noski-na-vozvyshenii-genetics.uz_.gif?ssl=1'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Подъём на носки с предмета
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
                        Тренировка груди.{"\n"}
                        По 3 подхода 8-12 повторений. {"\n"}
                        Вес смотреть по ощущениям.
                    </Text>
                    
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/04/Otzhimaniya.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Отжимания от пола.
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2021/03/Otzhimaniya_shirokaya_postanovka_ruk.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Широкие отжимания от пола
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
                        Тренировка плеч{"\n"}
                        3 подхода по 12 повторений.{"\n"}
                        Вес по ощущениям.
                    </Text>
                    
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/12/Otzhimania_schuchkoj.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Отжимания треугольник
                    </Text> 
                    </View>
                </View>               
                
                <View style={StylesM.Exisize}>
                    
                <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://makefitness.pro/wp-content/uploads/2020/09/%D0%BE%D1%82%D0%B6%D0%B8%D0%BC%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BD%D0%BE%D0%B3%D0%B8-%D0%BD%D0%B0-%D0%B2%D0%BE%D0%B7%D0%B2%D1%8B%D1%88%D0%B5%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D0%B8.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Отжимания головой вниз
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
                        Комплексная.{"\n"}
                        Делаем 5 кругов по 8 раз каждое упражнение. {"\n"}
                        Вес по усмотрению, без отдыха между упражнениями.
                    </Text>
                    
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2018/04/%D0%9F%D0%BE%D0%B4%D1%82%D1%8F%D0%B3%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA%D0%B0-2.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Подтягивание средний хват
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
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/07/Vypad_diagonal_2.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Болгарские приседания
                    </Text> 
                    </View>
                </View>   

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://sunmag.me/wp-content/uploads/2019/04/sunmag-ganteli.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Подъём гантелей на бицепс
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/09/Obratnye_otzhimaniya.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Отжимание от скамьи обратным хватом
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
                        <Image source={{uri: 'https://makefitness.pro/wp-content/uploads/2020/02/%D0%9F%D0%BE%D0%B4%D1%82%D1%8F%D0%B3%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D1%88%D0%B8%D1%80%D0%BE%D0%BA%D0%B8%D0%BC-%D1%85%D0%B2%D0%B0%D1%82%D0%BE%D0%BC.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Подтягивание широкий хват
                    </Text> 
                    </View>
                </View>
            
                <View style={StylesM.Exisize}>
                    
                   <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://go29.ru/wp-content/uploads/2018/07/158.3-%D0%9F%D0%BE%D0%B4%D1%82%D1%8F%D0%B3%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D1%83%D0%B7%D0%BA%D0%B8%D0%BC-%D1%85%D0%B2%D0%B0%D1%82%D0%BE%D0%BC-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%B0-%D0%B8-%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA%D0%B0.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Подтягивания узким хватом
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://delavie.ru/wp-content/uploads/2016/8/spinsh4.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Подтягивания обратным хватом
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://yourfitnesslife.ru/wp-content/uploads/2020/07/%D0%BE%D1%82%D0%B6%D0%B8%D0%BC%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BD%D0%B0-%D0%B1%D1%80%D1%83%D1%81%D1%8C%D1%8F%D1%85-%D0%B4%D0%BB%D1%8F-%D0%B3%D1%80%D1%83%D0%B4%D0%B8.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Отжимания на брусьях
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/09/Obratnye_otzhimaniya.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Отжимание от скамьи обратным хватом
                    </Text> 
                    </View>
                </View>   


            </ScrollView>
        </View>
        </Modal>

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
                        <Image source={{uri: 'https://sunmag.me/wp-content/uploads/2019/04/sunmag-ganteli.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Подъём гантелей на бицепс
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/03/Sgibanie_ruk_molotkom.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Молотки
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
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/02/Podem_ruki_pered_soboj.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Подъемы рук перед собой
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
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/05/Prisidanie_prisedanie_pryzhok.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Приседания с выпрыгиванием
                    </Text> 
                    </View>
                </View>    

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/04/Otzhimaniya.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Отжимания от пола.
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://yourfitnesslife.ru/wp-content/uploads/2020/07/%D0%BE%D1%82%D0%B6%D0%B8%D0%BC%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BD%D0%B0-%D0%B1%D1%80%D1%83%D1%81%D1%8C%D1%8F%D1%85-%D0%B4%D0%BB%D1%8F-%D0%B3%D1%80%D1%83%D0%B4%D0%B8.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Отжимания на брусьях
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/09/Obratnye_otzhimaniya.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Отжимание от скамьи обратным хватом
                    </Text> 
                    </View>
                </View>  

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://sunmag.me/wp-content/uploads/2019/04/sunmag-ganteli.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                       Подъём гантелей на бицепс
                    </Text> 
                    </View>
                </View>

                <View style={StylesM.Exisize}>
                    
                    <View style={StylesM.Childer}>
                        <Image source={{uri: 'https://goodlooker.ru/wp-content/uploads/2020/03/Sgibanie_ruk_molotkom.gif'}}  style={Styles.Img}/>
                    </View>

                    <View style={StylesM.Childer}>
                    <Text style={StylesM.Txt}>
                        Молотки
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