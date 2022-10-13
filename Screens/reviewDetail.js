import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from "../shared/card";

export default function ReviewDetail({ navigation }) {
  //   const onPressHandler = () => {
  //     navigation.goBack();
  //   };
  //   return (
  //     <View style={globalStyles.container}>
  //       <Text>ReviewDetail screen</Text>
  //       <Button title="Go back to home screen" onPress={onPressHandler} />
  //     </View>
  //   );
  // }

  const rating = navigation.getParam("rating");

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>
          {navigation.getParam("title")}
        </Text>
        <Text>{navigation.getParam("body")}</Text>
        {/* <Text>{navigation.getParam("rating")}</Text> */}
        <View style={styles.rating}>
          <Text>Review App Rating:</Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
