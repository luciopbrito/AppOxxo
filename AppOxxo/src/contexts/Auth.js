import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Users } from '../datas/users';
import { Alert } from 'react-native';

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [authData, setAuthData] = useState(false)
    const [firstTry, setFirstTry] = useState(0)
    const [user, setUser] = useState({})
    const [tryLogin, setTryLogin] = useState(0);
    const [askCreateAccount, setAskCreateAccount] = useState(false)
    const navigation = useNavigation();

    useEffect(() => {
        if (askCreateAccount) {
            // setTimeout(() => {
            Alert.alert('Faça um cadastro', 'Deseja iniciar um cadastro?', [
                {
                    text: 'Não',
                    onPress: () => null,
                    style: 'cancel'
                },
                {
                    text: 'Sim',
                    onPress: () => navigation.navigate("RecoverPasswordScreen"),
                }
            ]);
            setAskCreateAccount(false);
            // }, 000)
            setTryLogin(0)
        }

        if (firstTry == 1) {
            setAskCreateAccount(true)
        }

    }, [askCreateAccount, firstTry]);

    function askRecoverPassword() {
        Alert.alert('Excesso de Tentativas', 'Deseja recuparar senha?', [
            {
                text: 'Não',
                onPress: () => null,
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: () => navigation.navigate("RecoverPasswordScreen")
            },
        ])
    }

    function signIn(email, password, type) {
        if (email == null || password == null) {
            setFirstTry(firstTry + 1)
            Alert.alert('Usuário Inválido', 'É necessário digitar o email e senha');
        }
        else {
            switch (type) {
                case 'cliente':
                    var findUser = null;
                    Users.forEach((user, index) => {
                        if (user.email == email && user.password == password) {
                            findUser = Users[index];
                        }
                        else if (user.email == email && user.password != password) {
                            if ((tryLogin + 1) == 3) {
                                askRecoverPassword()
                                setTryLogin(0)
                            }
                            else {
                                Alert.alert('Senha inválida', 'Tente novamente');
                                setTryLogin(tryLogin + 1);
                            }
                        }
                    })

                    if (findUser) {
                        setAuthData(true)
                        setUser(findUser)
                        console.log('auth: ', authData)
                        console.log('user: ', user)
                        console.log('logado por:', JSON.stringify({ email: email, senha: password }));
                        console.log("ir para home por botão enviar");
                    }
                case 'funcionario':
                // TODO: fazer rota para home funcionário
                case 'gerente':
                // TODO: fazer rota para home gerente
            }
        }
    }

    return (
        <AuthContext.Provider value={{ authData, setAuthData, setUser, signIn, user }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext)
    return context;
}


export default AuthProvider;
