import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ChatsTab = () => {


  
  return (
    <SafeAreaView className="bg-surface flex-1">
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text className="text-white">ChatsTab</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChatsTab;
