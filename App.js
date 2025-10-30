import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Alert } from "react-native";
import BotonTema from "./BotonTema";

const App = () => {
  const [log, setLog] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  console.log("Renderizando componente App");

  const logginP = () => {
    setLog(true);
    console.log("Botón presionado");
  };

  const showAlert = () => {
    Alert.alert("Sesión Iniciada", "Usuario autenticado con éxito");
    console.log("Alerta Recibida");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>David Alejandro Gutiérrez Sánchez</Text>
      </View>
      <Text style={styles.title}>Bienvenido al Login!</Text>
      <View>
        <Text style={styles.label}>Usuario:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu usuario"
          onChangeText={setUsuario}
        />      
        <Text style={styles.label}>Contraseña:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu contraseña"
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        </View>
      <BotonTema
        onPress={() => {
          logginP();
          showAlert();
          console.log("Procesando");
        }}
        disabled={log}
        title={log ? "Sesión Iniciada" : "Iniciar Sesión"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f3f3ff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    width: "105%",
    backgroundColor: "#9dc1e9ff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    color: "#333",
  },
  label: {
    marginLeft: 10,
    marginTop: 10,
    color: "#333",
  },
  input: {
    width: 300,
    height: 45,
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export default App;
