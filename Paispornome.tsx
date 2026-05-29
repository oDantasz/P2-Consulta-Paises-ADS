import { useState } from "react";

import {
    Button,
    Image,
    Linking,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

import api from "../services/api";

export default function Paispornome() {
  const [pais, setPais] = useState("");
  const [data, setData] = useState<any>(null);

  async function buscarPais() {
    try {
      const response = await api.get(`/name/${pais}`);

      setData(response.data[0]);
    } catch (error) {
      alert("País não encontrado");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar por País</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o nome do país"
        value={pais}
        onChangeText={setPais}
      />

      <Button title="Buscar" onPress={buscarPais} />

      {data && (
        <View style={styles.result}>
          <Text>
            Nome comum: {data.name.common}
          </Text>

          <Text>
            Nome oficial: {data.name.official}
          </Text>

          <Text>
            Nome em Russo: {data.translations.rus.common}
          </Text>

          <Image
            source={{ uri: data.flags.png }}
            style={styles.flag}
          />

          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL(data.maps.openStreetMaps)
            }
          >
            Abrir OpenStreetMap
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },

  result: {
    marginTop: 20,
  },

  flag: {
    width: 200,
    height: 120,
    marginTop: 15,
  },

  link: {
    color: "blue",
    marginTop: 10,
  },
});