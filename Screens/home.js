import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./reviewForm";

// export default function Home({ navigation }) {
//   const onPressHandler = () => {
//     navigation.navigate("ReviewDetail");
//   };
//   return (
//     <View style={globalStyles.container}>
//       <Text style={globalStyles.titleText}>Home Screen</Text>
//       <Button title="Goto review details" onPress={onPressHandler} />
//     </View>
//   );
// }

import React, { useState } from "react";

export default function home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);

  const [reviews, setReviews] = useState([
    {
      title: "Breath of air",
      rating: 4,
      body: "Lorem ipsum dolar",
      key: "1",
    },
    {
      title: "Love and peace",
      rating: 5,
      body: "Lorem ipsum dolar",
      key: "2",
    },
    {
      title: "Grass in green",
      rating: 3,
      body: "Lorem ipsum dolar",
      key: "3",
    },
    {
      title: "Sea of breeze",
      rating: 4,
      body: "Lorem ipsum dolar",
      key: "4",
    },
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              style={{ ...styles.modalOpen, ...styles.modalClose }}
              onPress={() => setModalOpen(false)}
            />
            {/* <Text>Hello from the Modal :)</Text> */}
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalOpen}
        onPress={() => setModalOpen(true)}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetail", item)}
          >
            <Card>
              <Text style={globalStyles.textTitle}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalOpen: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});
