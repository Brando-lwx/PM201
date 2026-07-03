import React, { useState } from 'react';
import {KeyboardAvoidingView, Platform, TextInput, Text, StyleSheet,} from 'react-native';

export default function KeyboardAvoidingViewDemo() {
  const [nombre, setNombre] = useState('');

  const behavior = Platform.OS === 'ios' ? 'padding' : 'height';

  return (
    <KeyboardAvoidingView
      behavior={behavior}
      style={styles.container}
      keyboardVerticalOffset={80}
    >
      <Text style={styles.titulo}>
        KeyboardAvoidingView
      </Text>

      <Text style={styles.descripcion}>
        Evita que el teclado oculte el campo de texto.
      </Text>

      <TextInput
        placeholder="Ingrese su nombre"
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
        autoCapitalize="words"
      />

      <Text style={styles.resultado}>
        Nombre: {nombre || 'Sin capturar'}
      </Text>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 3,
    marginBottom: 20,
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  descripcion: {
    color: '#444',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  resultado: {
    fontSize: 16,
  },
});