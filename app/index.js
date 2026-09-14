import { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import AppButton from '../src/components/AppBottom';
import AppInput from '../src/components/AppInput';

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading] = useState(false);

    return (
    <KeyboardAvoidingView style={styles.container}
    behavior={Platform.OS==='ios'?'padding':undefined}>
    <View>
        <Text style={styles.title}>Meu Bolso</Text>
        <Text style={styles.subtitle}>Controle suas finanças</Text>

        <AppInput label="E-mail" placeholder="Digite seu e-mail"
        value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address"/>

        <AppInput label="Senha" value={password} onChangeText={setPassword} secureTextEntry placeholder="Digite sua Senha" />

        <AppButton title="Entrar" loading={loading} />

        <TouchableOpacity onPress={() => router.push('/register')}>
          <Text style={styles.link}>Criar nova conta</Text>
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
        backgroundColor: '#f8f9fa'
    },
    title: {
        fontSize: 34,
        fontWeight: '900',
        color: '#2f3640',
        textAlign:'center',
    },
    subtitle: {
        color: '#7f8c8d',
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 32
    },
    link: {
        color:'#008f72',
        textAlign: 'center',
        marginTop: 20,
        fontWeight: '700'
    }
})
