import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

const BotonTema = ({ onPress, disabled, title }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={[
                styles.button,
                { backgroundColor: disabled ? "#9ba1a7ff" : "#9dc1e9ff" },
            ]}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        width: 300,
        height: 50,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default BotonTema;
