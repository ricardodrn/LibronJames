import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  Pressable,
} from "react-native";
// import { Score } from "./Score";
import { Link } from "expo-router";

import { styled } from "nativewind";
import { BookInterface } from "@/services/books";

import noCoverImage from "../assets/no-cover.png";

const StyledPressable = styled(Pressable);

export function BookCard({ book }: { book: BookInterface }) {
  // const { title, genre, description, image, isbn } = book;

  return (
    <Link
      href={{
        pathname: `/book`,
        params: { ...book, fromSearch: "false" },
      }}
      asChild
    >
      <StyledPressable className="active:opacity-70 border border-black active:border-white/50 ">
        <View
          className="flex-row bg-slate-500/10 p-4 rounded-xl gap-4 mb-10"
          key={book.isbn}
        >
          <Image defaultSource={noCoverImage} source={{ uri: book.image || undefined }} style={styles.image} />
          <View className="flex-shrink">
            <Text className="mb-1" style={styles.title}>
              {book.title}
            </Text>
            <Text className="text-white mt-2 flex-shrink">{book.genre}</Text>
            <Text className="mt-2 flex-shrink" style={styles.description}>
              {book.description.slice(0, 100) === '' ? '(No description available)' : book.description.slice(0, 100) + '...'}
            </Text>
          </View>
        </View>
      </StyledPressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: { marginBottom: 42 },
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
    color: "#eee",
    fontSize: 16,
  },
  score: {
    color: "green",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export function AnimatedBookCard({ book, index }: any) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <BookCard book={book} />
    </Animated.View>
  );
}
