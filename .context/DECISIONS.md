# Registro de Decisões Arquiteturais (ADRs)

## ADR-001: Padronização de Favicons Quadrados 1:1 e Ícones PWA
- **Status:** Aceito
- **Contexto:** Google Search exige proporção 1:1 quadrada e múltiplos de 48px para exibir ícone nos snippets de pesquisa (SERP). Ícone anterior tinha proporção ~2:1 retangular, gerando fallback para o ícone de globo cinza.
- **Decisão:** Gerar `favicon.png` (512x512), `favicon-48x48.png` (48x48), `icon-192.png` (192x192), `icon-512.png` (512x512) e `apple-touch-icon.png` (180x180) com fundo escuro `#0F172A` para visibilidade perfeita no Google claro e escuro.
- **Consequências:** Favicons em total conformidade com diretrizes do Googlebot-Image.
