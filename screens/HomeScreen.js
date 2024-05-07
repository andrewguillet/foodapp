import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/home.jpg")}
      ></Image>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>FoodApp</Text>

        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate("DrawerNavigator")}
        >
          <Text style={styles.text}>Let's go!</Text>
          <FontAwesome name={"arrow-right"} style={styles.icon} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#581c87",
  },
  image: {
    width: "100%",
    height: "75%",
    borderBottomLeftRadius: 200,
  },
  titleContainer: {
    height: 400,

    paddingRight: 20,
  },
  title: {
    color: "#fff",
    fontSize: 60,
    fontWeight: "bold",
    textAlign: "right",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  iconContainer: {
    color: "#fff",
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  icon: {
    color: "#fff",
    marginTop: 2,
    marginLeft: 10,
  },
});
