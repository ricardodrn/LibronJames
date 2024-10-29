import Feather from '@expo/vector-icons/Feather';
// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { FontAwesome } from "@expo/vector-icons";
import { View, Text } from 'react-native';
// import Svg, { Text as SVGText } from 'react-native-svg';

export function Logo() {
    return (
        <View className='flex-row justify-center items-center'>
            <Feather name="book" size={32} color="white" />
            <Text className="text-white pl-2 text-2xl font-bold">LibronJames</Text>
            {/* <Svg height="32" width="200">
                <SVGText
                    fill="none"
                    stroke="white"
                    fontSize="28"
                    fontWeight=""
                    x="80"
                    y="25"
                    textAnchor="middle">
                    LibronJames
                </SVGText>
            </Svg> */}
        </View>
    );
}

// export function SearchIcon() {
//   return <MaterialIcons name="search" size={32} color="white" />;
// }

export const SearchIcon = (props: any) => (
    <FontAwesome name="search" size={24} color="white" {...props} />
);