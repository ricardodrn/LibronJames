import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { ScrollView, StyleProp, View, ViewStyle } from "react-native";
import BarcodeScan from "./BarcodeScan";

interface BottomSheetContainerProps {
    handleSheetChanges: (index: number) => void;
    styles: { contentContainer: StyleProp<ViewStyle> };
    bottomSheetModalRef: React.RefObject<BottomSheetModal>;
    handleDismissModalPress: () => void;
    open: boolean;
}

export default function BottomSheetContainer({ handleSheetChanges, styles, bottomSheetModalRef, handleDismissModalPress, open }: BottomSheetContainerProps) {

    return(    
        <View>
            <BottomSheetModal
                ref={bottomSheetModalRef}
                onChange={handleSheetChanges}
                snapPoints={['45%']}
            >
                <BottomSheetView  
                    style={styles.contentContainer}
                > 
                    <ScrollView>
                        <BarcodeScan handleDismiss={handleDismissModalPress} open={open} />
                    </ScrollView>
                </BottomSheetView>
            </BottomSheetModal>
        </View>
    )
}