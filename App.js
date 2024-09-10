import { View } from 'react-native'
import  Nutrition  from './src/components/NutritionAndTraining'
import  Workout  from './src/components/Workout'
import Nutrtions from './src/components/Nutritions';
import NutritionLoss from './src/components/NutritionLoss';
import WorkoutGym from './src/components/WorkoutGym';
import MyStack from './Navigatorr';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>  
  );
}


