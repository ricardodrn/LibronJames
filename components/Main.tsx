import { FlatList, ActivityIndicator, Button, Text, View } from "react-native";
import { Screen } from "@/components/Screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useCallback, useEffect, useRef, useState } from "react";
import { getBooks } from "@/services/books";
import type { BookInterface } from "@/services/books";
import { AnimatedBookCard } from "@/components/BookCard";
import React from "react";

export default function Main() {
    const inserts = useSafeAreaInsets();

    const [books, setBooks] = useState<BookInterface[]>();

    useEffect(() => {
        console.log('Fetching books');
        getBooks().then((data) => {
            setBooks(data);
        });
    }, []);

    return(
        <Screen 
            style={{
                marginLeft: inserts.left,
                marginRight: inserts.right,
            }}
        >{
            books ?(
                    <FlatList
                        data={books}
                        keyExtractor={(book) => book.isbn}
                        renderItem={({ item, index }) => (
                            <AnimatedBookCard book={item} index={index} />
                        )} 
                    />
            ):
                <ActivityIndicator size="large" color="#fff" />
        }
        
        </Screen>
    )
}