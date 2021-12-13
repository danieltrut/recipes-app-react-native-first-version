import { StyleSheet } from "react-native";
import { RecipeCard } from "../../AppStyles";

const styles = StyleSheet.create({
  flatList: {
    paddingVertical: 30,
    paddingHorizontal: 20
  },
  container: {
    marginBottom: 20
  },
  photo: {
    width: '100%',
    height: 110,
  },
  title: {
    fontSize: 15,
    color: '#000'
  },
  category: RecipeCard.category,
  btnIcon: {
    height: 14,
    width: 14,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EDEDED",
    borderRadius: 10,
    width: 250,
    justifyContent: "space-around"
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: 'grey'
  },
  searchInput: {
    backgroundColor: "#EDEDED",
    color: "black",
    width: 180,
    height: 50,
  }
});

export default styles;
