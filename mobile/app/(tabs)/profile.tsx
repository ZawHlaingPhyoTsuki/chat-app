import { useAuth } from "@clerk/clerk-expo";
import { Pressable, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileTab = () => {
  const { signOut } = useAuth();

  return (
    <SafeAreaView className="bg-surface flex-1">
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text className="text-white">ProfileTab</Text>
        <Pressable
          onPress={() => signOut()}
          className="mt-4 items-center px-6 py-2 rounded-full bg-red-500"
        >
          <Text className="text-white">Sign Out</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileTab;
