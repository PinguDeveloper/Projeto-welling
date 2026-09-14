import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';
import AppButton from '../src/components/AppBottom';
import AppInput from '../src/components/AppInput';

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  function handleRegister() {
    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      Alert.alert('Campos obrigatórios', 'Preencha todos os campos para criar sua conta.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Senhas diferentes', 'Digite a mesma senha nos dois campos.');
      return;
    }

    setLoading(true);
    // A integração com o serviço de autenticação pode ser adicionada aqui.
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Cadastro realizado', 'Sua conta foi criada com sucesso.');
      router.replace('/');
    }, 500);
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View>
        <Text style={styles.title}>Criar conta</Text>
        <Text style={styles.subtitle}>Comece a controlar suas finanças</Text>

        <AppInput
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
        />
        <AppInput
          label="E-mail"
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
        />
        <AppInput
          label="Senha"
          placeholder="Crie uma senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <AppInput
          label="Confirmar senha"
          placeholder="Digite a senha novamente"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <AppButton title="Criar conta" onPress={handleRegister} loading={loading} />

        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.link}>Já tenho uma conta</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 34,
    fontWeight: '900',
    color: '#2f3640',
    textAlign: 'center',
  },
  subtitle: {
    color: '#7f8c8d',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 32,
  },
  link: {
    color: '#008f72',
    textAlign: 'center',
    marginTop: 20,
    fontWeight: '700',
  },
});
