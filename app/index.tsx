import Main from "@/components/Main";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { useCallback, useRef } from "react";
import { Text, StyleSheet, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Index() {

  // const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // // callbacks
  // const handlePresentModalPress = useCallback(() => {
  //   bottomSheetModalRef.current?.present();
  // }, []);
  // const handleSheetChanges = useCallback((index: number) => {
  //   console.log('handleSheetChanges', index);
  // }, []);

  
return (
  <GestureHandlerRootView style={styles.contentContainer}>
      <Main />
      <StatusBar style="auto" />
  </GestureHandlerRootView>
);
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});