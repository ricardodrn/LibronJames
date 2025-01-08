import { Pressable, View, StyleSheet,Text } from "react-native";
import { Stack } from "expo-router";
import { SearchIcon, Logo } from "@/components/Icons";
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useCallback, useRef, useState } from "react";
import BottomScanModal from "@/components/BottomScanModal";


export default function IndexLayout(){
    const [search, setSearch] = useState(false);
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const [open, setOpen] = useState(false);

    const handlePresentModalPress = () => {
        setOpen(!open);
        setSearch(!search);
        if(!open) bottomSheetModalRef.current?.present(); 
        else bottomSheetModalRef.current?.close();
    }

    function handleDismissModalPress() {
        bottomSheetModalRef.current?.close();
    }

    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);


    return(
        <GestureHandlerRootView >
            <View className="flex-1">
                <Stack 
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: "#000",
                        },
                        headerTintColor: "#fff",
                        headerTitle: "",
                        headerLeft: () => <Logo />,
                        headerRight: () => (
                            <Pressable onPress={handlePresentModalPress} >
                                <SearchIcon />
                            </Pressable>
                        ),
                    }}
                />
                <BottomSheetModalProvider>
                    <BottomScanModal 
                        handleSheetChanges={handleSheetChanges}
                        styles={styles}
                        bottomSheetModalRef={bottomSheetModalRef}
                        handleDismissModalPress={handleDismissModalPress}
                        open={open}
                    />
                </BottomSheetModalProvider>   
            </View>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      justifyContent: 'center',
      backgroundColor: 'grey',
    },
    contentContainer: {
      flex: 1,
    },
    camera: {
        flex: 1,
    },
  });