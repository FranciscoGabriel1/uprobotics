# Spec 01 — Design Foundation

| Campo | Valor |
|---|---|
| Status | `implementing` |
| Épico | 1 — Foundation |
| Autor | Francisco Gabriel |
| Data | 2026-04-16 |

---

## Objetivo

Estabelecer identidade visual moderna para o UpRobotics, eliminando Bootstrap e
styled-components, adotando Tailwind CSS, dark mode, i18n e design system coerente
com paleta inspirada no Google Material Design 3.

---

## Contexto

O projeto usava Bootstrap + styled-components de forma mista, gerando:
- Conflito de responsabilidades de estilo
- Dificuldade para implementar dark mode consistente
- Bundle maior que o necessário
- Setup complexo com dois sistemas de CSS competindo

---

## Decisões técnicas

| Decisão | Escolha | Justificativa |
|---|---|---|
| CSS framework | Tailwind CSS v3 | Utility-first, purge automático, dark mode nativo via classe |
| Ícones | Lucide React | SVG tree-shakable, 1100+ ícones, estilo linha consistente |
| Fontes | Space Grotesk + Inter + JetBrains Mono | Modernas, legíveis, via `next/font` (sem request externo) |
| Dark mode | Classe `dark` no `<html>` | Controle manual + respeita sistema; script inline previne flash |
| i18n | next-intl v3 | `NextIntlClientProvider`, mensagens em `src/messages/` |
| Design tokens | Paleta Google-inspired | Ver seção abaixo |

---

## Paleta de Cores

### Brand

| Token | Hex | Uso |
|---|---|---|
| `primary` | `#4285F4` | Botões principais, links, destaques |
| `primary-hover` | `#1A6FE8` | Estado hover do primary |
| `primary-light` | `#7BAFF8` | Primary em dark mode |
| `accent` | `#FBBC05` | CTAs secundários, badges, highlights |
| `success` | `#34A853` | Feedback positivo |
| `danger` | `#EA4335` | Erros, alertas |

### Superfícies — Light mode

| Token CSS | Valor |
|---|---|
| `--surface` | `#FFFFFF` |
| `--surface-raised` | `#F8F9FA` |
| `--border` | `#E1E4E8` |
| Background Tailwind | `gray-50` → `#F8F9FA` |

### Superfícies — Dark mode

| Token CSS | Valor |
|---|---|
| `--surface` | `#161B22` |
| `--surface-raised` | `#1C2128` |
| `--border` | `#30363D` |
| Background Tailwind | `[#0a0e1a]` |

---

## Tipografia

| Papel | Fonte | Uso |
|---|---|---|
| Display / Headings | Space Grotesk | Títulos, hero, seções |
| Body / UI | Inter | Texto corrido, labels, botões |
| Código | JetBrains Mono | Exibição de código gerado |

---

## Componentes do Design System

```
Button (primary, secondary, ghost, danger — sm/md/lg)
Badge
Input
Card
Tabs
Footer
Header (com dark toggle + lang toggle)
```

---

## Critérios de aceite

- [ ] Bootstrap e react-bootstrap removidos
- [ ] styled-components removido
- [ ] Tailwind CSS v3 configurado com design tokens
- [ ] Dark mode funcional via toggle (ícone sol/lua no Header)
- [ ] Preferência de tema salva em `localStorage` + respeita `prefers-color-scheme`
- [ ] Sem flash de tema errado na hidratação (script inline no `_document`)
- [ ] i18n configurado com next-intl — suporte `pt-BR` e `en`
- [ ] Toggle de idioma no Header
- [ ] Fontes Space Grotesk + Inter via `next/font`
- [ ] Páginas `/`, `/create`, `/tutorial`, `/about` reescritas com novo visual
- [ ] Sem regressão funcional nas páginas existentes
- [ ] `yarn build` conclui sem erros

---

## Fora do escopo deste spec

- Blockly local sem iframe (Épico 3)
- Auth e login (Épico 4)
- Rota `/v2` com novo ambiente (Épico 2)
- Backend e banco de dados (Épico 4+)
- Simulação 3D com Three.js (Épico 6)
- Exportação `.ino` (Épico 7)
