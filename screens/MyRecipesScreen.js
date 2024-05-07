import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { useSelector } from "react-redux";

export default function MyRecipesScreen({ navigation }) {
  const bookmarks = useSelector((state) => state.bookmarks.value || []);
  console.log(bookmarks);
  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.title}>The best one...</Text>

          <View style={styles.recipeContainer}>
            {bookmarks.map((recipe) => (
              <TouchableOpacity
                key={recipe.id}
                style={[styles.recipes, { backgroundColor: recipe.color }]}
                onPress={() =>
                  navigation.navigate("Recipe", { recipe: recipe })
                }
              >
                <Image source={recipe.image} style={styles.image} />
                <Text style={styles.recipeTitle}>{recipe.name}</Text>
                <Text style={styles.recipeDescription}>{recipe.desc}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    color: "#581c87",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  subtitle: {
    color: "gray",
    marginLeft: 20,
  },

  recipeContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
  },
  recipes: {
    borderTopLeftRadius: 10,
    borderTopEndRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 10,
    height: 200,
    width: "48%",
    marginBottom: 15,
    marginRight: 5,
  },
  image: {
    marginTop: 30,
    justifyContent: "center",
    alignSelf: "center",
    width: 90,
    height: 90,
  },
  recipeTitle: {
    textAlign: "right",
    fontWeight: "bold",
    marginRight: 10,
  },
  recipeDescription: {
    textAlign: "right",
    marginRight: 10,
    fontSize: 12,
  },
});
