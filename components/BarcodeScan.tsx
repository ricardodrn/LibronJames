import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Redirect, router } from 'expo-router';
import { useBottomSheetModal } from '@gorhom/bottom-sheet';
import { findBookByIsbn } from '@/services/books';

export default function BarcodeScan({handleDismiss , open}: {handleDismiss: () => void, open: Boolean}){
    const [permission, requestPermission] = useCameraPermissions();
    const [useCamera, setUseCamera] = useState(false);

    // const { dismiss, dismissAll } = useBottomSheetModal();

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
            <View style={styles.container}>
            <Text style={styles.message}>
              We need your permission to show the camera
            </Text>
            <Pressable onPress={requestPermission}>
              <Text style={styles.message}>Grant permission</Text>
            </Pressable>
          </View>
        );
    }

    const scanHandler = async({ type, data }: { type: string; data: string }) => {
        setUseCamera(true);
        handleDismiss()
        let book = await findBookByIsbn(data);
        // console.log('Data from endpoints type Book', bookNEW);

        router.push({
            pathname: '/book',
            params: {...book},
        });
    }
    return(
        <View className="flex-1 justify-center">
            {
                useCamera ?
                    <View />
                :
                    <CameraView 
                        // style={styles.camera} 
                        style={{ width: '100%', height: 400 }}
                        facing={'back'}
                        barcodeScannerSettings={{
                            barcodeTypes: ["qr", "ean13"],
                        }}
                        onBarcodeScanned={scanHandler}
                    />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    // camera: {
    //     flex: 1,
    // },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
})