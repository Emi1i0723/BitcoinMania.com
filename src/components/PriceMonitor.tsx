"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/LanguageContext';
import { CRYPTO_PRICES } from '@/app/lib/constants';
import { TrendingUp, ArrowRightLeft } from 'lucide-react';

const cryptos = Object.values(CRYPTO_PRICES);

export function PriceMonitor() {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const current = cryptos[index];

  const handleCycle = () => {
    setIndex((prev) => (prev + 1) % cryptos.length);
  };

  return (
    <Card className="glass-card hover-glow h-full border-primary/20 bg-gradient-to-br from-card to-background">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          <TrendingUp className="text-primary w-5 h-5" />
          {t.priceMonitor}
        </CardTitle>
        <Button 
          variant="outline" 
          size="icon" 
          onClick={handleCycle} 
          className="rounded-full hover:bg-primary/20 border-primary/30"
        >
          <ArrowRightLeft className="w-4 h-4 text-accent" />
        </Button>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center pt-4 space-y-4">
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg shadow-black/40 animate-pulse"
          style={{ backgroundColor: `${current.color}33`, color: current.color, border: `2px solid ${current.color}` }}
        >
          {current.symbol[0]}
        </div>
        <div className="text-center">
          <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs mb-1">
            {current.name}
          </p>
          <p className="text-4xl font-extrabold text-white">
            ${current.price.toLocaleString()}
            <span className="text-lg text-muted-foreground ml-2">USD</span>
          </p>
        </div>
        <div className="flex gap-2">
          {cryptos.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-primary' : 'w-2 bg-muted'}`} 
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
