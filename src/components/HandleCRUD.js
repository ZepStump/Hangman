/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import firebase from "firebase/app";
import "firebase/firestore";


// Example usage:
const [name, setName] = useState("");
const [score, setScore] = useState(0);
const [wins, setWins] = useState(0);

const addUser = (name, score, wins) => {
  const db = firebase.firestore();

  // Add a new user with the given name, score, and wins
  db.collection("users").add({
    name: name,
    score: score,
    wins: wins,
  })
  .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
  });
};

const updateUser = (id, score, wins) => {
  const db = firebase.firestore();

  // Update the score and wins for the user with the given ID
  db.collection("users").doc(id).update({
    score: score,
    wins: wins,
  })
  .then(() => {
    console.log("Document successfully updated!");
  })
  .catch((error) => {
    console.error("Error updating document: ", error);
  });
};

const handleAddUser = () => {
  addUser(name, score, wins);
};

const handleUpdateUser = (id) => {
  updateUser(id, score, wins);
};
