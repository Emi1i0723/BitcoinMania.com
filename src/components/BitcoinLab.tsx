"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/LanguageContext';
import { FlaskConical, ExternalLink } from 'lucide-react';

export function BitcoinLab() {
  const { t } = useLanguage();
  const labUrl = "https://preview--vault-vibe-lab.lovable.app/?__lovable_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOFdiRm9BeHlMM2VqUWVQY3RZZ1QxVnhRUGN5MiIsInByb2plY3RfaWQiOiJhMGFkNTg3NS03Zjc2LTQwNmMtYmJhYy1iZDI3YTdmMzc0ZDQiLCJhY2Nlc3NfdHlwZSI6InByb2plY3QiLCJpc3MiOiJsb3ZhYmxlLWFwaSIsInN1YiI6ImEwYWQ1ODc1LTdmNzYtNDA2Yy1iYmFjLWJkMjdhN2YzNzRkNCIsImF1ZCI6WyJsb3ZhYmxlLWFwcCJdLCJleHAiOjE3NzM2MDU0NTIsIm5iZiI6MTc3MzAwMDY1MiwiaWF0IjoxNzczMDAwNjUyfQ.o3FyZ6kT4cugcKJYHQHEEIzTWM28xMeQizlBYbYVQ1qlVoka_vbTMn88FCJ0yXT4S-V1nkK7VhEGeC1WaCinYBZqftFcW-k8pNmaTIP-Fa9Kr7Zf-eZhNxf3dCG8_ul56_VOcx0bFnrfGyK_nppkyAFi93RgKs65ReamykhP2WSOFzeMcfDahEej88YKc1X6wfIx5ZKnmO--jHj1fSpRL3Pai0dF_dn6CTgcl-oggxhjLLpnLX-q27Gx1l0uRpI7e73kYKFL9PpDY3RRqlYvcEFPmYDPZm7lqM7-TdUA_H-_FQtYF2NUxkDRookDtjaoUnt0vPjmxq-T_EHGBVlEKVwq1sJlzaQZgkyHJ8zZyH4MlB7k12DCrSoDX9qZnkxkOZatbS7brMEj4CewSDjcz6YNDosT9TATH_-7AHIw5naxqPOos0EAw87TN-8bKteojWJnuam9cuBR8HgE4msHWdWMS1zkyFVCsOY322DZKk1vtcC_lB9_ZJ_bKHAu7ldXa9Uxiz9YXmYbdJk66GkHx4k_AbdwS4y1T0GHwjvsXFAQ3FQ2KvOQqK5a8KZhPcO6FQiYWip1Ey-lLidP8Nfp9w1uM0cRQ9IXvjBVCHKJMnf4TfofMiYS8s00-T1PzhDScozfaSfvHody7yL8DDLoQ0LRN_Tl-OQHvcy8KaWhZwI";

  return (
    <Card className="glass-card hover-glow border-primary/20 bg-gradient-to-br from-card to-background">
      <CardHeader>
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          <FlaskConical className="text-primary w-5 h-5" />
          {t.bitcoinLab}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {t.bitcoinLabDesc}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          asChild 
          className="w-full py-6 rounded-xl bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 group"
        >
          <a href={labUrl} target="_blank" rel="noopener noreferrer">
            {t.accessLab}
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
