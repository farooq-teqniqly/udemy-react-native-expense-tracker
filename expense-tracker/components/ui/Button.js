import { View, Pressable, Text, StyleSheet } from "react-native";
import Theme from "../../constants/themes";

export default function Button({ children, onPress, mode, style }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: Theme.colors.secondary,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    textAlign: "center",
  },
  flatText: {
    color: Theme.colors.secondary,
  },
  pressed: {
    opacity: 0.75,
    borderRadius: 4,
  },
});
