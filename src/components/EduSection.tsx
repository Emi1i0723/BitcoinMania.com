"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/components/LanguageContext';
import { EDU_TOPICS } from '@/app/lib/constants';
import { BookOpen, Newspaper, ChevronRight, Heart } from 'lucide-react';
import { EduModal } from '@/components/EduModal';
import { Badge } from '@/components/ui/badge';

export function EduSection() {
  const { t, language } = useLanguage();
  const [selectedTopic, setSelectedTopic] = useState<{id: string, name: string} | null>(null);
  const [liked, setLiked] = useState<Set<string>>(new Set());

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Basics Section */}
      <Card className="glass-card border-primary/20">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            <BookOpen className="text-primary w-5 h-5" />
            {t.eduBasics}
          </CardTitle>
          <Badge variant="outline" className="border-primary text-primary">EDU</Badge>
        </CardHeader>
        <CardContent className="space-y-3">
          {EDU_TOPICS.basics.map(topic => (
            <div 
              key={topic.id}
              onClick={() => setSelectedTopic({ id: topic.id, name: topic[language] })}
              className="group flex items-center justify-between p-4 rounded-xl bg-background/40 hover:bg-primary/10 border border-white/5 hover:border-primary/30 cursor-pointer transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-medium group-hover:text-primary transition-colors">{topic[language]}</span>
              </div>
              <div className="flex items-center gap-4">
                <Heart 
                  className={`w-4 h-4 transition-all ${liked.has(topic.id) ? 'fill-primary text-primary scale-125' : 'text-muted-foreground hover:text-primary'}`}
                  onClick={(e) => toggleLike(topic.id, e)}
                />
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* News Section */}
      <Card className="glass-card border-accent/20">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            <Newspaper className="text-accent w-5 h-5" />
            {t.eduNews}
          </CardTitle>
          <Badge variant="outline" className="border-accent text-accent">NEW</Badge>
        </CardHeader>
        <CardContent className="space-y-3">
          {EDU_TOPICS.news.map(topic => (
            <div 
              key={topic.id}
              onClick={() => setSelectedTopic({ id: topic.id, name: topic[language] })}
              className="group flex items-center justify-between p-4 rounded-xl bg-background/40 hover:bg-accent/10 border border-white/5 hover:border-accent/30 cursor-pointer transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="font-medium group-hover:text-accent transition-colors">{topic[language]}</span>
              </div>
              <div className="flex items-center gap-4">
                <Heart 
                  className={`w-4 h-4 transition-all ${liked.has(topic.id) ? 'fill-accent text-accent scale-125' : 'text-muted-foreground hover:text-accent'}`}
                  onClick={(e) => toggleLike(topic.id, e)}
                />
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {selectedTopic && (
        <EduModal 
          topic={selectedTopic} 
          isOpen={!!selectedTopic} 
          onClose={() => setSelectedTopic(null)} 
        />
      )}
    </div>
  );
}
