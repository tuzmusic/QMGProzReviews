import React from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-elements";

export default ReviewsList = ({ customer, onStartReviewPress }) => {
  const { reviews } = customer;
  return (
    <View style={{ width: "100%" }}>
      <Text style={{ paddingTop: 5 }}>{/* blank line */} </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Text h2>Reviews</Text>
        <Button title="Leave a Review" onPress={onStartReviewPress} />
      </View>
      {reviews.map((review, i) => (
        <ReviewView review={review} key={i} />
      ))}
    </View>
  );
};
