import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../services/supabase";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [sessao, setSessao] = useState(null);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        // Pega o login que já estava guardado no aparelho, se houver
        supabase.auth.getSession().then(({ data }) => {
            setSessao(data.session);
            setCarregando(false);
        });

        // Fica escutando: entrou, saiu, o login foi renovado...
        const { data: escuta } = supabase.auth.onAuthStateChange((_evento, novaSessao) => {
            setSessao(novaSessao);
        });

        return () => escuta.subscription.unsubscribe();
    }, []);

    return <AuthContext.Provider value={{ sessao, carregando }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    return useContext(AuthContext);
}