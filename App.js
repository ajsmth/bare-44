import { Text, View } from "react-native";
import { useEffect } from "react";
import * as Notifications from "expo-notifications";

export default function App() {
  useEffect(async () => {
    await Notifications.getDevicePushTokenAsync();
    const subscription = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log({ response });
      }
    );
    return () => subscription.remove();
  }, []);
  console.log("hi");
  return (
    <View style={{ paddingTop: 100, flex: 1, backgroundColor: "red" }}>
      <Text>Hi</Text>
    </View>
  );
}
