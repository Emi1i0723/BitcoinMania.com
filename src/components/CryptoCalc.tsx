"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/components/LanguageContext';
import { CRYPTO_PRICES, EXCHANGE_RATES } from '@/app/lib/constants';
import { Calculator, RefreshCcw } from 'lucide-react';

export function CryptoCalc() {
  const { t } = useLanguage();
  
  // Conversion state
  const [convAmount, setConvAmount] = useState<string>('1');
  const [convCrypto, setConvCrypto] = useState<string>('BTC');
  
  // Comparison state
  const [compAmount, setCompAmount] = useState<string>('1');
  const [compFrom, setCompFrom] = useState<string>('BTC');
  const [compTo, setCompTo] = useState<string>('ETH');

  const cryptoList = Object.keys(CRYPTO_PRICES) as Array<keyof typeof CRYPTO_PRICES>;

  const getConversion = () => {
    const val = parseFloat(convAmount) || 0;
    const usd = val * CRYPTO_PRICES[convCrypto as keyof typeof CRYPTO_PRICES].price;
    const mxn = usd * EXCHANGE_RATES.USD_TO_MXN;
    return { usd, mxn };
  };

  const getComparison = () => {
    const val = parseFloat(compAmount) || 0;
    const priceFrom = CRYPTO_PRICES[compFrom as keyof typeof CRYPTO_PRICES].price;
    const priceTo = CRYPTO_PRICES[compTo as keyof typeof CRYPTO_PRICES].price;
    if (!priceTo) return 0;
    return (val * priceFrom) / priceTo;
  };

  const conversions = getConversion();
  const comparison = getComparison();

  // Formatear el resultado para quitar ceros innecesarios (ej. 34.0000 -> 34)
  const formattedComparison = Number(comparison.toFixed(4)).toString();

  return (
    <Card className="glass-card hover-glow border-accent/20">
      <CardHeader>
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          <Calculator className="text-accent w-5 h-5" />
          {t.cryptoCalc}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="conversion" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-secondary/50 p-1 mb-6">
            <TabsTrigger value="conversion" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              {t.conversion}
            </TabsTrigger>
            <TabsTrigger value="comparison" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              {t.comparison}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="conversion" className="space-y-4 animate-in fade-in duration-300">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground uppercase">{t.amount}</label>
                <Input 
                  type="number" 
                  value={convAmount} 
                  onChange={(e) => setConvAmount(e.target.value)}
                  className="bg-background/50 border-white/10"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground uppercase">Crypto</label>
                <Select value={convCrypto} onValueChange={setConvCrypto}>
                  <SelectTrigger className="bg-background/50 border-white/10">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {cryptoList.map(c => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                <p className="text-xs text-primary font-bold uppercase mb-1">USD</p>
                <p className="text-2xl font-bold">${conversions.usd.toLocaleString()}</p>
              </div>
              <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                <p className="text-xs text-accent font-bold uppercase mb-1">MXN</p>
                <p className="text-2xl font-bold">${conversions.mxn.toLocaleString()}</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="comparison" className="space-y-4 animate-in fade-in duration-300">
            <div className="grid grid-cols-3 gap-2 items-end">
              <div className="space-y-2 col-span-1">
                <label className="text-xs font-semibold text-muted-foreground uppercase">{t.amount}</label>
                <Input 
                  type="number" 
                  value={compAmount} 
                  onChange={(e) => setCompAmount(e.target.value)}
                  className="bg-background/50 border-white/10"
                />
              </div>
              <div className="space-y-2 col-span-1">
                <label className="text-xs font-semibold text-muted-foreground uppercase">{t.from}</label>
                <Select value={compFrom} onValueChange={setCompFrom}>
                  <SelectTrigger className="bg-background/50 border-white/10">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {cryptoList.map(c => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 col-span-1">
                <label className="text-xs font-semibold text-muted-foreground uppercase">{t.to}</label>
                <Select value={compTo} onValueChange={setCompTo}>
                  <SelectTrigger className="bg-background/50 border-white/10">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {cryptoList.map(c => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-6 flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-white/5">
               <p className="text-sm text-muted-foreground mb-2">{compAmount} {compFrom} is equal to</p>
               <div className="flex items-center gap-4">
                 <span className="text-4xl font-extrabold text-primary">{formattedComparison}</span>
                 <span className="text-2xl font-bold text-accent">{compTo}</span>
               </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
