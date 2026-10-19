import { AppState } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
        storage: AsyncStorage, // guarda a sessão de login no aparelho
        autoRefreshToken: true, // renova o login sozinho
        persistSession: true, // mantém a pessoa logada ao fechar o app
        detectSessionInUrl: false, // não se aplica a apps de celular
    },
});

// Só renova o login enquanto o app está aberto (economiza bateria)
AppState.addEventListener("change", (estado) => {
    if (estado === "active") {
        supabase.auth.startAutoRefresh();
    } else {
        supabase.auth.stopAutoRefresh();
    }
});