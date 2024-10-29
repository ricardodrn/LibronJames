// import { useState } from "react";

export interface BookInterface {
  id: number;
  author: string;
  title: string;
  isbn: string;
  description: string;
  image: string;
  genre: string;
  publicationYear: number;
}

export async function getBooks(): Promise<BookInterface[]> {
  const BOOKS = process.env.EXPO_PUBLIC_API_URL + "/api/book";

  return await fetch(BOOKS, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log("error:", error));
}

export async function addBookToLibrary(book: BookInterface) {
  const response = await fetch(process.env.EXPO_PUBLIC_API_URL + "/api/book", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(book),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log("error:", error));

  return response;
}

export async function findBookByIsbn(isbn: string) {

  const BOOK = process.env.EXPO_PUBLIC_API_URL + "/api/book/search?isbn=" + isbn;

  return await fetch(BOOK, {})
    .then((response) => response.json())
    .then((data) => {
      return data;
    }).catch((error) => console.log("error:", error));
}