import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Nutrition from './src/components/NutritionAndTraining';
import Nutritions from './src/components/Nutritions';
import Workout from './src/components/Workout';
import WorkoutGym from './src/components/WorkoutGym';
import WorkoutHome from './src/components/WorkoutHome';
import WorkoutHomeAdd from './src/components/WorkoutHomeAdd';
import NutritionDrying from './src/components/NutritionDrying';
import NutritionGain from './src/components/NutritionGain';
import NutritionLoss from './src/components/NutritionLoss';


const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="Nutrition" component={Nutrition} options={{ title: 'Главная' }}/>
        <Stack.Screen name="Nutritions" component={Nutritions} options={{ title: 'Питание' }}/>
        <Stack.Screen name="Workout" component={Workout} options={{ title: 'Тренировки' }}/>
        <Stack.Screen name="WorkoutGym" component={WorkoutGym} options={{ title: 'Зал' }} />
        <Stack.Screen name="WorkoutHome" component={WorkoutHome} options={{ title: 'Дом' }} />
        <Stack.Screen name="WorkoutHomeAdd" component={WorkoutHomeAdd} options={{ title: 'Дом +' }} />
        <Stack.Screen name="NutritionDrying" component={NutritionDrying} options={{ title: 'Сушка' }}/>
        <Stack.Screen name="NutritionGain" component={NutritionGain} options={{ title: 'Набор' }}/>
        <Stack.Screen name="NutritionLoss" component={NutritionLoss} options={{ title: 'Похудение' }}/>
      </Stack.Navigator>
  
  );
};

