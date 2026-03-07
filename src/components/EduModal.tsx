"use client";

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useLanguage } from '@/components/LanguageContext';
import { generateSimplifiedCryptoContent, GenerateSimplifiedCryptoContentOutput } from '@/ai/flows/generate-simplified-crypto-content-flow';
import { STATIC_EDU_CONTENT } from '@/app/lib/constants';
import { Button } from '@/components/ui/button';
import { Loader2, Sparkles, Languages, CheckCircle2, ChevronRight, ChevronLeft, RotateCcw } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface EduModalProps {
  topic: { id: string; name: string };
  isOpen: boolean;
  onClose: () => void;
}

export function EduModal({ topic, isOpen, onClose }: EduModalProps) {
  const { t, language, setLanguage } = useLanguage();
  const [data, setData] = useState<GenerateSimplifiedCryptoContentOutput | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentFlashcard, setCurrentFlashcard] = useState(0);
  const [showFlashcardAnswer, setShowFlashcardAnswer] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    async function loadContent() {
      if (!isOpen) return;
      setLoading(true);
      
      // Intentar cargar contenido estático primero
      if (STATIC_EDU_CONTENT[topic.id]) {
        setData(STATIC_EDU_CONTENT[topic.id]);
        setLoading(false);
        return;
      }

      // Si no hay estático, usar IA
      try {
        const result = await generateSimplifiedCryptoContent({ topic: topic.name });
        setData(result);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    loadContent();
  }, [isOpen, topic.id, topic.name]);

  const handleNextFlashcard = () => {
    if (!data) return;
    if (currentFlashcard < data.flashcards.length - 1) {
      setCurrentFlashcard(prev => prev + 1);
      setShowFlashcardAnswer(false);
    } else {
      setCompleted(true);
    }
  };

  const resetFlashcards = () => {
    setCurrentFlashcard(0);
    setShowFlashcardAnswer(false);
    setCompleted(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl bg-card border-primary/20 h-[80vh] flex flex-col p-0 overflow-hidden rounded-3xl">
        <DialogHeader className="p-6 border-b border-white/5 bg-gradient-to-r from-primary/10 to-transparent">
          <div className="flex items-center justify-between mb-2">
            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
              <Sparkles className="text-primary w-6 h-6" />
              {topic.name}
            </DialogTitle>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="gap-2 text-muted-foreground hover:text-primary"
            >
              <Languages className="w-4 h-4" />
              {language.toUpperCase()}
            </Button>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-hidden relative">
          {loading ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 animate-in fade-in">
              <Loader2 className="w-12 h-12 text-primary animate-spin" />
              <p className="text-lg font-medium text-muted-foreground italic">{t.loading}</p>
            </div>
          ) : data ? (
            <ScrollArea className="h-full p-6">
              <Tabs defaultValue="explanation" className="w-full">
                <TabsList className="w-full grid grid-cols-3 bg-secondary/30 p-1 mb-6 rounded-xl">
                  <TabsTrigger value="explanation" className="rounded-lg">{language === 'es' ? 'Explicación' : 'Explanation'}</TabsTrigger>
                  <TabsTrigger value="analogies" className="rounded-lg">{t.analogies}</TabsTrigger>
                  <TabsTrigger value="quiz" className="rounded-lg">{language === 'es' ? 'Validación' : 'Quiz'}</TabsTrigger>
                </TabsList>

                <TabsContent value="explanation" className="space-y-4 animate-in slide-in-from-bottom-2 duration-300">
                  <div className="prose prose-invert max-w-none">
                    <p className="text-lg leading-relaxed text-foreground/90 bg-primary/5 p-6 rounded-2xl border border-primary/10 whitespace-pre-wrap">
                      {data.explanation}
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="analogies" className="space-y-4 animate-in slide-in-from-bottom-2 duration-300">
                  {data.analogies.map((analogy, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-accent/5 border border-accent/10 flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0 text-accent font-bold">
                        {i + 1}
                      </div>
                      <p className="text-foreground/80 italic leading-relaxed">{analogy}</p>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="quiz" className="space-y-6 animate-in slide-in-from-bottom-2 duration-300">
                  {!completed ? (
                    <div className="flex flex-col items-center">
                      <div className="w-full mb-4 flex justify-between items-center text-xs font-bold text-muted-foreground uppercase tracking-widest">
                        <span>Card {currentFlashcard + 1} of {data.flashcards.length}</span>
                        <div className="flex gap-1">
                          {data.flashcards.map((_, i) => (
                            <div key={i} className={`h-1 w-4 rounded-full ${i <= currentFlashcard ? 'bg-primary' : 'bg-muted'}`} />
                          ))}
                        </div>
                      </div>

                      <div 
                        className={`w-full min-h-[200px] flex items-center justify-center p-8 rounded-3xl cursor-pointer transition-all duration-500 perspective-1000 transform-style-3d relative ${showFlashcardAnswer ? 'bg-accent/10 border-accent/30' : 'bg-secondary/40 border-white/5 shadow-xl'}`}
                        onClick={() => setShowFlashcardAnswer(!showFlashcardAnswer)}
                      >
                         <p className="text-xl font-medium text-center leading-snug">
                           {showFlashcardAnswer ? data.flashcards[currentFlashcard].answer : data.flashcards[currentFlashcard].question}
                         </p>
                         <div className="absolute bottom-4 right-4 text-[10px] text-muted-foreground opacity-50 uppercase font-bold flex items-center gap-1">
                           <RotateCcw className="w-3 h-3" />
                           {t.flip}
                         </div>
                      </div>

                      <div className="flex gap-4 w-full mt-6">
                        <Button 
                          variant="outline" 
                          className="flex-1 rounded-xl py-6"
                          disabled={currentFlashcard === 0}
                          onClick={() => { setCurrentFlashcard(prev => prev - 1); setShowFlashcardAnswer(false); }}
                        >
                          <ChevronLeft className="w-4 h-4 mr-2" />
                          {t.previous}
                        </Button>
                        <Button 
                          className="flex-1 rounded-xl py-6 bg-primary hover:bg-primary/90"
                          onClick={handleNextFlashcard}
                        >
                          {currentFlashcard === data.flashcards.length - 1 ? (language === 'es' ? 'Terminar' : 'Finish') : t.next}
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center p-12 text-center space-y-6 animate-in zoom-in duration-300">
                      <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                        <CheckCircle2 className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="text-3xl font-bold text-primary">{t.congrats}</h3>
                      <p className="text-muted-foreground">{language === 'es' ? 'Has completado este tema educativo.' : 'You have completed this educational topic.'}</p>
                      <Button onClick={resetFlashcards} variant="outline" className="rounded-xl px-8 border-primary text-primary hover:bg-primary/10">
                        {t.restart}
                      </Button>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </ScrollArea>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
