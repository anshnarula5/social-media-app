import React from "react";
import { useParams } from "react-router";
import PlaceList from "../components/PlaceList";

const PLACES = [
  {
    id: "p1",
    title: "Burj Khalifa",
    description:
      "em Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five ce",
    image:
      "https://images.unsplash.com/photo-1572364769167-198dcb7b520c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
    address: "1 Sheikh Mohammed bin Rashid Blvd - Downtown Dubai",
    location: {
      lat: "25.1972",
      lng: "55.2744",
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Burj Khalifa",
    description:
      "em Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five ce",
    image:
      "https://images.unsplash.com/photo-1572364769167-198dcb7b520c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
    address: "1 Sheikh Mohammed bin Rashid Blvd - Downtown Dubai",
    location: {
      lat: "25.1972",
      lng: "55.2744",
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const { uid } = useParams();
  const filteredPlaces = PLACES.filter((place) => place.creator === uid);
  return <PlaceList items={filteredPlaces} />;
};

export default UserPlaces;
