import { Pressable, View, StyleSheet,Text } from "react-native";
import { Link, Stack } from "expo-router";
import { SearchIcon, Logo } from "@/components/Icons";
import { BottomSheetModal, BottomSheetModalProvider, BottomSheetView, useBottomSheetModal } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { useCallback, useMemo, useRef, useState } from "react";
import BarcodeScan from "@/components/BarcodeScan";


export default function IndexLayout(){
    const [search, setSearch] = useState(false);
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const [open, setOpen] = useState(false);

    // const handleSearch = () => {
    //     // console.log('caca')
    //     setSearch(!search);
    //     // handlePresentModalPress
        
    // }

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
            {/* {    open &&
                <BarcodeScan handleDismiss={handleDismissModalPress} />
             }    */}
            <BottomSheetModalProvider>
                <BottomSheetModal
                    ref={bottomSheetModalRef}
                    onChange={handleSheetChanges}
                    snapPoints={['45%']}
                >
                    <BottomSheetView  
                        style={styles.contentContainer}
                    > 
                        {/* <Text>Search</Text> */}
                        <ScrollView>
                        <BarcodeScan handleDismiss={handleDismissModalPress} open={open} />
                        </ScrollView>
                    </BottomSheetView>
                </BottomSheetModal>
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
    //   alignItems: 'center',
    //   marginBottom: 150,
    },
    camera: {
        flex: 1,
    },
  });