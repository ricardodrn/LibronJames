// import { Screen } from "@/components/Screen";
// import { Pressable, StyleSheet, Text, View } from "react-native";
// import { CameraView, useCameraPermissions } from 'expo-camera';
// import { useCallback, useMemo, useRef, useState } from "react";
// import BarcodeScan from "@/components/BarcodeScan";
// import BottomSheet, { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
// import Animated from "react-native-reanimated";
// import { GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";


// export default function Search() {
//     const snapPoints = useMemo(() => ['25%', '50%', '70%'], []);
//       // ref
//     const bottomSheetModalRef = useRef<BottomSheetModal>(null);

//     const handleSheetChanges = useCallback((index: number) => {
//         console.log('handleSheetChanges', index);
//     }, []);

//     const handlePresentModalPress = useCallback(() => {
//         bottomSheetModalRef.current?.present();
//     }, []);

//     return(
//         <GestureHandlerRootView style={styles.contentContainer}>
//             <Pressable onPress={handlePresentModalPress}>
//                 <Text className="text-black">Close</Text>
//             </Pressable>
//             <BottomSheet ref={bottomSheetModalRef} onChange={handleSheetChanges}>
//                 <BottomSheetView style={styles.contentContainer}>
//                     <Text>Awesome 🎉</Text>
//                 </BottomSheetView>
//                 {/* <Animated.View style={styles.container}>
//                     <BottomSheet snapPoints={snapPoints}>
//                         <View>
//                             <Text>This is awesome</Text>
//                         </View>
//                     </BottomSheet>
//                 </Animated.View> */}
//             </BottomSheet>
//         </GestureHandlerRootView>
//     )

//     // return <BarcodeScan />
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       padding: 24,
//       justifyContent: 'center',
//       backgroundColor: 'grey',
//     },
//     contentContainer: {
//       flex: 1,
//       alignItems: 'center',
//     },
//   });