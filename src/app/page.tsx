"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/components/LanguageContext';
import { PriceMonitor } from '@/components/PriceMonitor';
import { CryptoCalc } from '@/components/CryptoCalc';
import { EduSection } from '@/components/EduSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { LogOut, LayoutDashboard, Languages, Sparkles, LogIn, UserPlus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Home() {
  const { t, language, setLanguage } = useLanguage();
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAuth = (type: 'login' | 'signup') => {
    if (!email || !password) {
      toast({
        variant: "destructive",
        title: language === 'es' ? 'Error de autenticación' : 'Auth Error',
        description: language === 'es' ? 'Por favor completa todos los campos.' : 'Please fill in all fields.',
      });
      return;
    }
    setIsLoggedIn(true);
    toast({
      title: type === 'login' ? (language === 'es' ? '¡Bienvenido de nuevo!' : 'Welcome back!') : (language === 'es' ? 'Cuenta creada' : 'Account created'),
      description: language === 'es' ? 'Has iniciado sesión correctamente.' : 'Successfully logged in.',
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast({
      title: language === 'es' ? 'Sesión cerrada' : 'Logged out',
      description: language === 'es' ? 'Hasta pronto.' : 'See you soon.',
    });
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background">
        <div className="w-full max-w-md space-y-8 animate-in fade-in zoom-in duration-500">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-primary rounded-2xl mx-auto flex items-center justify-center shadow-lg shadow-primary/40 rotate-12 hover:rotate-0 transition-transform duration-300">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white mt-4">BitcoinMania</h1>
            <p className="text-muted-foreground">{t.welcome}</p>
          </div>

          <Card className="glass-card border-white/10">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">{t.login} / {t.signup}</CardTitle>
              <CardDescription className="text-center">
                {language === 'es' ? 'Ingresa tus credenciales para continuar' : 'Enter your credentials to continue'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Input 
                  type="email" 
                  placeholder="email@example.com" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-secondary/50 border-white/10 py-6"
                />
              </div>
              <div className="space-y-2">
                <Input 
                  type="password" 
                  placeholder="••••••••" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-secondary/50 border-white/10 py-6"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <Button variant="outline" onClick={() => handleAuth('signup')} className="py-6 rounded-xl border-primary/30 text-primary hover:bg-primary/10">
                  <UserPlus className="w-4 h-4 mr-2" />
                  {t.signup}
                </Button>
                <Button onClick={() => handleAuth('login')} className="py-6 rounded-xl bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                  <LogIn className="w-4 h-4 mr-2" />
                  {t.login}
                </Button>
              </div>
              
              <div className="pt-4 flex justify-center">
                <Button variant="ghost" size="sm" onClick={() => setLanguage(language === 'en' ? 'es' : 'en')} className="text-muted-foreground">
                  <Languages className="w-4 h-4 mr-2" />
                  {language === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-12">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 w-full border-b border-white/5 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white">BITCOINMANIA</span>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-primary rounded-full px-4"
            >
              <Languages className="w-4 h-4" />
              {language === 'en' ? 'EN' : 'ES'}
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleLogout}
              className="items-center gap-2 text-muted-foreground hover:text-destructive rounded-full px-4"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden md:inline">{t.logout}</span>
            </Button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-[0.2em] text-xs">
              <LayoutDashboard className="w-3 h-3" />
              {t.dashboard}
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-white">{language === 'es' ? 'Hola de nuevo!' : 'Hello again!'}</h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            {language === 'es' 
              ? 'Tu puerta de entrada al aprendizaje simplificado de criptomonedas y análisis de mercado en tiempo real.' 
              : 'Your gateway to simplified cryptocurrency learning and real-time market insights.'}
          </p>
        </header>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <PriceMonitor />
          </div>
          <div className="lg:col-span-2">
            <CryptoCalc />
          </div>
        </div>

        {/* EDU Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
             <div className="flex items-center gap-3">
               <div className="p-2 bg-primary/10 rounded-lg">
                 <Sparkles className="w-5 h-5 text-primary" />
               </div>
               <h3 className="text-2xl font-bold">{t.eduTitle}</h3>
             </div>
          </div>
          <EduSection />
        </section>
      </main>

      {/* Language toggle for mobile */}
      <div className="md:hidden fixed bottom-6 right-6">
        <Button 
          size="icon" 
          onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
          className="w-14 h-14 rounded-full bg-primary shadow-2xl text-white"
        >
          <Languages className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}
