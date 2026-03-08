"use client";

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/LanguageContext';
import { ABOUT_US_CONTENT } from '@/app/lib/constants';
import { Info, Languages, Mail, Linkedin, Youtube } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

export function AboutUsModal() {
  const { t, language, setLanguage } = useLanguage();
  const content = ABOUT_US_CONTENT[language];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="items-center gap-2 text-muted-foreground hover:text-primary rounded-full px-4"
        >
          <Info className="w-4 h-4" />
          <span className="hidden sm:inline">{t.aboutUs}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-card border-primary/20 h-[80vh] flex flex-col p-0 overflow-hidden rounded-3xl">
        <DialogHeader className="p-6 border-b border-white/5 bg-gradient-to-r from-primary/10 to-transparent">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
              <Info className="text-primary w-6 h-6" />
              {content.title}
            </DialogTitle>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="gap-2 border-primary/30 text-primary hover:bg-primary/10 rounded-full"
            >
              <Languages className="w-4 h-4" />
              {language === 'en' ? 'Español' : 'English'}
            </Button>
          </div>
        </DialogHeader>

        <ScrollArea className="flex-1 p-6">
          <div className="prose prose-invert max-w-none space-y-6">
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 whitespace-pre-wrap text-foreground/90 leading-relaxed">
              {content.content}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <a 
                href="https://www.linkedin.com/in/emilio-cervera" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-secondary/40 border border-white/5 hover:border-primary/30 transition-all group"
              >
                <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20">
                  <Linkedin className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase">LinkedIn</p>
                  <p className="text-sm font-medium">Emilio Cervera</p>
                </div>
              </a>
              
              <a 
                href="https://www.youtube.com/@AstralKin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-secondary/40 border border-white/5 hover:border-red-500/30 transition-all group"
              >
                <div className="p-2 bg-red-500/10 rounded-lg group-hover:bg-red-500/20">
                  <Youtube className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase">YouTube</p>
                  <p className="text-sm font-medium">@AstralKin</p>
                </div>
              </a>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
