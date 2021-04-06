import React from 'react';
import "react-native-gesture-handler";
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NuevaOrden from './views/NuevaOrden';
import Menu from './views/Menu';
import FormularioPlatillo from './views/FormularioPlatillo';
import ResumenPedido from './views/ResumenPedido';
import ProgresoPedido from './views/ProgresoPedido';
import DetallePlatillo from './views/DetallePlatillo';

// Importar state de Context
//import FirebaseState from "./context/firebase/firebaseState";
import PedidoState from "./context/pedidos/pedidosState";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <PedidoState>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#FFDA00"
              }, TextheadreTitleStyle: {
                fontWeight: "bold"
              },
              headerTintColor: "#000"
            }}
          >
            <Stack.Screen
              name="NuevaOrden"
              component={NuevaOrden}
              options={{
                title: "Nueva Orden"
              }}
            />
            <Stack.Screen
              name="Menu"
              component={Menu}
              options={{
                title: "Menu"
              }}
            />
            <Stack.Screen
              name="DetallePlatillo"
              component={DetallePlatillo}
              options={{
                title: "Detalle Platillo"
              }}
            />

            <Stack.Screen
              name="FormularioPlatillo"
              component={FormularioPlatillo}
              options={{
                title: "Ordenar Platillo"
              }}
            />
            <Stack.Screen
              name="ResumenPedido"
              component={ResumenPedido}
              options={{
                title: "ResumenPedido"
              }}
            />
            <Stack.Screen
              name="ProgresoPedido"
              component={ProgresoPedido}
              options={{
                title: "Progreso de Pedido"
              }}
            />

          </Stack.Navigator>
        </NavigationContainer>
      </PedidoState>
    </>
  );
}

const styles = StyleSheet.create({

});
