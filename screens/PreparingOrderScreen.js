import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery")
    }, 4500);
  }, [])
  
  return (
    <SafeAreaView className="bg-[#00ccbb] flex-1 justify-center items-center" >
      <Animatable.Image
        source={require("../assets/delivery-boy.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  )
}

export default PreparingOrderScreen