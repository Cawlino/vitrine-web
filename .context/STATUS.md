# Status do Projeto (STATUS.md)

- **Última Atualização:** 2026-11-11T20:23:00-03:00
- **Status Geral:** Portfólio atualizado com Thaíssa Simitan (2º lugar) e redirect 308 de `.vercel.app` para `.com.br`

## 📍 Ponto Exato de Parada / Onde Estamos
Projeto Thaíssa Simitan (`https://thaissasimitan.com.br`) adicionado em 2º lugar e redirecionamento permanente (`308`) de `agenciavitrineweb.vercel.app` para `https://agenciavitrineweb.com.br` configurado em `vercel.json`, pronto para commit e deploy em produção.

## ✅ Tarefas Concluídas Recentemente
1. Adicionada imagem oficial desktop + mobile (`public/thaissa-simitan.png`, 1400×840) e inserido o case `thaissa-simitan` em 2º lugar (`Showcase.jsx`, `ProjectDetail.jsx`, `LandingPageService.jsx`, `sitemap.xml`, `src/index.css`).
2. Configurado redirect permanente `308` em `vercel.json` de `agenciavitrineweb.vercel.app` para `https://agenciavitrineweb.com.br/$1` (ADR-002).
3. Validado com `npm run lint` (0 erros) e `npm run build` com sucesso.

## ⏳ Tarefas em Andamento
1. Commit e push para `origin main` na Vercel e verificação ao vivo do redirect 308 e da página em produção.

## 🎯 Próxima Ação Imediata
Confirmar propagação do deploy na Vercel e testar `https://agenciavitrineweb.com.br/` e `https://agenciavitrineweb.vercel.app/`.
