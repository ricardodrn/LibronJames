import { Screen } from "@/components/Screen";
import { ScrollView, Text, View, Image, StyleSheet, Pressable } from "react-native";
import { useLocalSearchParams, Stack, router } from "expo-router";
import { useEffect } from "react";
import { addBookToLibrary } from "@/services/books";
import React from "react";


export default function BookDetails() {
    const book = useLocalSearchParams<{ author: string; title: string; image: string; description: string, fromSearch: string }>();
    
    async function handleAddToLibrary(book: any) {
        await addBookToLibrary(book)
            .then((response) => {
                console.log('response', response);
                if(response.status === 'success') {
                    console.log('Book added to library');

                    router.navigate({
                        pathname: '/',
                        // params: {updated: true},
                    })
                }
            }
        );
    }

    useEffect(() => {
        console.log('El pichulas',book.fromSearch);
    }, []);
    return(
        <Screen className="flex-1 items-center">
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "#ffee00" },
                    headerTintColor: "black",
                    headerLeft: () => null,
                    headerTitle: `${book.author} - ${book.title}`,
                    headerRight: () => null,
                }}
            />
            <View>
            {
                        book.fromSearch === "false" ?
                            null
                        :
                            <Pressable className="bg-white/20 py-2 rounded-md" onPress={() => {handleAddToLibrary(book)}}>
                                <Text className="text-white text-center">Add to library</Text>
                            </Pressable>
                        } 
                <ScrollView>
                    <View className="justify-center items-center text-center">
                        <Text className="text-white text-center font-bold text-xl mb-1">{book.title}</Text>
                        <Image className="mb-4 rounded" source={{ uri: book.image as string }} style={{ width: 214, height: 294 }} />
                        <Text className="text-white/70 mt-4 text-left mb-8 text-base">
                            {book.description === '' ? '(No description available)' : book.description}
                        </Text>
  
                    </View>
                </ScrollView>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 147,
        borderRadius: 10,
    },
    title: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
    },
    description: {
        color: "white",
        fontSize: 16,
    },
})