// src/pages/AuthPage.jsx
import { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  // form handling...
  async function handleAuth() {
    let { error, user } = isLogin
      ? await supabase.auth.signIn({ email, password })
      : await supabase.auth.signUp({ email, password });
    if (error) setError(error.message);
  }
  // render email/password inputs, toggle login/signup, call handleAuth()
}
