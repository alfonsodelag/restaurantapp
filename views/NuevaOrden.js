import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Button, Text } from "native-base";
import globalStyles from "../styles/global";
import { useNavigation } from "@react-navigation/native";

export default function NuevaOrden() {

    const navigation = useNavigation();

    return (
        <Container style={globalStyles.contenedor}>
            <View style={[globalStyles.contenido, styles.contenido]}>
                <Button
                    style={globalStyles.boton}
                    rounded
                    block
                    onPress={() => navigation.navigate("Menu")}
                >
                    <Text style={[globalStyles.botonTexto]}>Crear Nueva Orden</Text>
                </Button>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    contenido: {
        flexDirection: 'column',
        justifyContent: 'center'
    }
})
