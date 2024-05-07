import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addBookmark, removeBookmark } from "../reducers/bookmarks";

export default function RecipesScreen({ route, navigation }) {
  const { recipe } = route.params;
  const [portion, setportion] = useState(1);
  const bookmarks = useSelector((state) => state.bookmarks.value);
  const dispatch = useDispatch();

  if (portion < 1) {
    setportion(1);
  }
  console.log(recipe.id);

  const isBookmarked = bookmarks.some((bookmark) => bookmark.id === recipe.id);

  function handleBookMark() {
    if (isBookmarked) {
      dispatch(removeBookmark(recipe));
    } else {
      dispatch(addBookmark(recipe));
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <View style={[, { backgroundColor: recipe.color }]}>
          <Image style={styles.image} source={recipe.image} />
        </View>
      </View>
      <View style={[styles.thirdContainer, { backgroundColor: recipe.color }]}>
        <TouchableOpacity
          style={styles.radius}
          onPress={() => handleBookMark()}
        >
          {!isBookmarked ? (
            <FontAwesome name={"bookmark-o"} style={styles.icon} size={30} />
          ) : (
            <FontAwesome name={"bookmark"} style={styles.icon} size={30} />
          )}
        </TouchableOpacity>
        <View style={styles.fourthContainer}>
          <View style={styles.difficulty}>
            <View style={styles.iconContainer}>
              <FontAwesome
                name={"thermometer"}
                style={{ color: "#FFD43B" }}
                size={20}
              />
              <Text style={styles.textIcon}>{recipe.level}</Text>
            </View>
            <View style={styles.iconContainer}>
              <FontAwesome
                name={"clock-o"}
                style={{ color: "#FFD43B" }}
                size={20}
              />
              <Text style={styles.textIcon}>{recipe.time}</Text>
            </View>
            <View style={styles.iconContainer}>
              <FontAwesome
                name={"star-o"}
                style={{ color: "#FFD43B" }}
                size={20}
              />
              <Text style={styles.textIcon}>{recipe.rating}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.title}>{recipe.name}</Text>
            <Text style={styles.desc}>{recipe.longDesc}</Text>
          </View>
          <View style={styles.ingredientsContainer}>
            <View style={styles.quantityContainer}>
              <Text style={styles.quantityTitle}>Ingredients</Text>
              <Text style={styles.quantitySub}>How many servings?</Text>
            </View>
            <View style={styles.inputContainer}>
              <Text
                style={styles.button}
                onPress={() => setportion(portion - 1)}
              >
                -
              </Text>
              <Text>{portion}</Text>
              <Text
                style={styles.button}
                onPress={() => setportion(portion + 1)}
              >
                +
              </Text>
            </View>
          </View>
          <ScrollView style={{ flex: 1 }}>
            <View style={styles.listIngredientContainer}>
              {recipe.ingredients.map((recipes) => (
                <View key={recipes.id} style={styles.listIngredient}>
                  <Text>{recipes.name}</Text>
                  <Text>
                    {recipes.amount * portion} {""}
                    {recipes.unit}
                  </Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },
  firstContainer: {
    width: "100%",
    height: "25%",
  },
  image: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignSelf: "center",
  },
  secondContainer: {
    width: "100%",
    height: "100%",

    borderBottomLeftRadius: 200,
  },
  thirdContainer: {
    width: "100%",
    height: "80%",
  },

  radius: {
    backgroundColor: "purple",
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 50,
    top: "0%",
    position: "absolute",
    right: "13%",
  },
  icon: {
    color: "white",
  },
  fourthContainer: {
    backgroundColor: "white",
    borderTopRightRadius: 200,
    height: "100%",
    width: "100%",
  },

  difficulty: {
    zIndex: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: 300,
    marginTop: 50,
  },
  iconContainer: {
    alignItems: "center",
  },
  textIcon: {
    fontWeight: "bold",
    marginTop: 5,
  },
  title: {
    marginLeft: 30,
    fontSize: 40,
    marginTop: 10,
  },
  desc: {
    marginLeft: 30,
    color: "gray",
    width: 300,
  },
  ingredientsContainer: {
    flexDirection: "row",
    marginLeft: 30,
    marginTop: 15,
  },

  quantityContainer: {},
  quantityTitle: {
    fontWeight: "bold",
  },
  quantitySub: {
    color: "gray",
  },

  inputContainer: {
    marginLeft: "auto",
    marginRight: 30,
    flexDirection: "row",
    backgroundColor: "#d1d5db",
    width: 100,
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 20,
  },
  listIngredientContainer: {
    width: 300,

    marginLeft: 30,
    marginRight: 30,
    marginTop: 15,
  },
  listIngredient: {
    color: "gray",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  button: {
    paddin: 20,
  },
});
