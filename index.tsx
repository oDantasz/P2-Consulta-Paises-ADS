import {
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";

import Paisporcapital from "../components/Paisporcapital";
import Paispornome from "../components/Paispornome";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.mainTitle}>
        Consulta de Países
      </Text>

      <Paispornome />

      <Paisporcapital />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },

  mainTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
});