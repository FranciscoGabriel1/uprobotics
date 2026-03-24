# UpRobotics — Prompt de Refatoração Completa

## Visão Geral do Projeto

**UpRobotics** é uma plataforma educacional de robótica desplugada voltada para todas as idades. O objetivo central é permitir que qualquer pessoa — criança, estudante ou educador — programe robôs educacionais usando blocos arrastavéis (Google Blockly) e visualize os movimentos em tempo real por meio de um simulador 3D integrado.

O projeto atual (Next.js 9.5.2 + iframe externo) deve ser completamente refatorado para uma arquitetura moderna, escalável e acessível.

---

## Estado Atual (antes da refatoração)

- Next.js 9.5.2, React 17, TypeScript (parcial)
- Editor Blockly servido via iframe de deploy externo (Vercel separado)
- Sem i18n — todo conteúdo hardcoded em português
- Sem light/dark mode
- Styled-components + Bootstrap misturados sem design system definido
- Sem simulador 3D integrado — dependência de Webots e Tinkercad externos
- Sem formulário de contato funcional
- Sem autenticação

---

## Stack Tecnológica Alvo

| Camada | Tecnologia |
|---|---|
| Framework | **Next.js 15** (App Router, Server Components) |
| UI | **React 19** |
| Linguagem | **TypeScript 5** (strict mode, arrow functions, sem `any`) |
| Estilização | **Tailwind CSS v4** + **CSS Variables** para tokens do design system |
| Animações | **Framer Motion v11** |
| Lottie | **`@lottiefiles/dotlottie-react`** (substitui o player legado) |
| 3D / Simulador | **`@react-three/fiber`** + **`@react-three/drei`** + **`three`** |
| Blockly | **`blockly`** (npm) — migrado do iframe para componente React |
| i18n | **`next-intl`** com arquivos `.json` por idioma |
| Traduções automáticas | Script `npm run translate` usando **DeepL API Free** |
| Formulário de contato | **Resend** (API Route no Next.js) |
| Ícones | **Lucide React** (consistente, tree-shakeable, acessível) |
| Fontes | **Geist** (Vercel/Next.js 15 default) — sans + mono |
| Temas | **`next-themes`** para light/dark mode com persistência |
| Autenticação (futuro) | Preparado para **NextAuth.js v5** (Auth.js) |
| Salvamento de projetos (futuro) | Preparado para **Prisma + PostgreSQL** ou **Supabase** |
| Linting | **ESLint** (Next.js config) + **Prettier** |

**Remover completamente:**
- `bootstrap`, `react-bootstrap`
- `@zeit/next-css`, `next-images` (obsoletos no Next.js 15)
- `styled-components` (substituído por Tailwind)
- `react-content-loader`, `boxicons`, `unicons`, `iconify`
- Dependência do iframe externo (`workstation-six.vercel.app`)

---

## Arquitetura

Utilizar **Feature-Sliced Design (FSD)** adaptado para Next.js App Router:

```
src/
├── app/                          # Next.js App Router
│   ├── [locale]/                 # Rotas internacionalizadas
│   │   ├── layout.tsx
│   │   ├── page.tsx              # Home
│   │   ├── create/
│   │   │   └── page.tsx          # Editor Blockly + Simulador 3D
│   │   ├── tutorial/
│   │   │   └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   └── api/
│       └── contact/
│           └── route.ts          # Endpoint Resend
│
├── features/                     # Lógica de negócio por funcionalidade
│   ├── blockly-editor/
│   │   ├── components/
│   │   │   └── BlocklyWorkspace.tsx
│   │   ├── blocks/               # Blocos customizados migrados
│   │   │   ├── arm-blocks.ts
│   │   │   └── control-blocks.ts
│   │   ├── generators/           # Geradores de código
│   │   │   └── arduino.ts
│   │   └── hooks/
│   │       └── useBlockly.ts
│   │
│   ├── robot-simulator/
│   │   ├── components/
│   │   │   ├── SimulatorCanvas.tsx
│   │   │   ├── RoboticArm.tsx
│   │   │   └── SimulatorControls.tsx
│   │   ├── hooks/
│   │   │   └── useArmAnimation.ts
│   │   └── types/
│   │       └── arm-commands.ts
│   │
│   └── contact-form/
│       ├── components/
│       │   └── ContactForm.tsx
│       └── actions/
│           └── sendEmail.ts
│
├── components/                   # Componentes reutilizáveis (UI atômico)
│   ├── ui/
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Badge/
│   │   ├── Input/
│   │   └── Textarea/
│   ├── layout/
│   │   ├── Header/
│   │   ├── Footer/
│   │   └── PageWrapper/
│   └── sections/
│       ├── Hero/
│       ├── Features/
│       └── RobotsShowcase/
│
├── lib/                          # Utilitários e configurações
│   ├── i18n/
│   │   └── config.ts
│   ├── resend/
│   │   └── client.ts
│   └── utils.ts                  # cn(), formatters, helpers
│
├── messages/                     # Arquivos de tradução
│   ├── pt.json
│   ├── en.json
│   ├── es.json
│   ├── fr.json
│   ├── de.json
│   ├── zh.json
│   └── ja.json
│
└── styles/
    ├── globals.css               # Tailwind base + CSS custom properties
    └── tokens.css                # Design tokens (cores, espaçamentos, radii)
```

---

## Design System

### Princípios

Inspirado no **Apple Human Interface Guidelines** e no **Google Material Design 3**:
- **Clareza** — hierarquia visual evidente, conteúdo sempre em primeiro lugar
- **Profundidade** — uso sutil de sombras, blur e camadas para indicar hierarquia
- **Consistência** — tokens de design aplicados de forma uniforme
- **Acessibilidade** — WCAG 2.1 AA mínimo, foco visível, contraste adequado, suporte a screen readers

---

### Paleta de Cores (CSS Custom Properties)

```css
/* Brand */
--color-brand-50:  #f0f4ff;
--color-brand-100: #dde6ff;
--color-brand-200: #c0ceff;
--color-brand-400: #7c9dff;
--color-brand-500: #5b82f5;   /* Primary */
--color-brand-600: #3d63e8;
--color-brand-800: #1e3a8a;
--color-brand-900: #0f2160;

/* Neutral (Gray Scale) */
--color-neutral-0:   #ffffff;
--color-neutral-50:  #f8f9fc;
--color-neutral-100: #f1f3f8;
--color-neutral-200: #e2e6f0;
--color-neutral-300: #cdd3e0;
--color-neutral-400: #9aa3b8;
--color-neutral-500: #6b7592;
--color-neutral-600: #4a5268;
--color-neutral-700: #333b52;
--color-neutral-800: #1e2436;
--color-neutral-900: #111827;
--color-neutral-950: #080c18;

/* Semantic */
--color-success: #22c55e;
--color-warning: #f59e0b;
--color-error:   #ef4444;
--color-info:    #3b82f6;

/* Surface tokens (trocam conforme o tema) */
--surface-bg:         light-dark(var(--color-neutral-50),  var(--color-neutral-950));
--surface-card:       light-dark(var(--color-neutral-0),   var(--color-neutral-900));
--surface-border:     light-dark(var(--color-neutral-200), var(--color-neutral-800));
--text-primary:       light-dark(var(--color-neutral-900), var(--color-neutral-50));
--text-secondary:     light-dark(var(--color-neutral-500), var(--color-neutral-400));
--text-disabled:      light-dark(var(--color-neutral-300), var(--color-neutral-600));
```

---

### Tipografia

Fonte principal: **Geist Sans** | Fonte de código: **Geist Mono**

```
Display XL  — 72px / 1.1 / -0.02em / 700
Display LG  — 56px / 1.15 / -0.02em / 700
Heading 1   — 40px / 1.2  / -0.01em / 700
Heading 2   — 32px / 1.25 / -0.01em / 600
Heading 3   — 24px / 1.3  /  0      / 600
Body LG     — 18px / 1.6  /  0      / 400
Body MD     — 16px / 1.6  /  0      / 400
Body SM     — 14px / 1.5  /  0      / 400
Caption     — 12px / 1.4  /  0.01em / 400
Code        — 14px / 1.5  /  0      / 400 (Geist Mono)
```

---

### Espaçamento e Border Radius

```
Spacing scale: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 128px

Radius:
  --radius-sm:   6px   (inputs, badges)
  --radius-md:   10px  (cards pequenos)
  --radius-lg:   16px  (cards principais)
  --radius-xl:   24px  (modais, painéis)
  --radius-full: 9999px (pills, avatars)
```

---

### Sombras

```
--shadow-sm:  0 1px 2px rgba(0,0,0,0.05);
--shadow-md:  0 4px 12px rgba(0,0,0,0.08);
--shadow-lg:  0 12px 32px rgba(0,0,0,0.12);
--shadow-xl:  0 24px 64px rgba(0,0,0,0.16);
```

---

### Ícones

Utilizar exclusivamente **Lucide React**:
- Tree-shakeable (sem bundle inchado)
- Consistent stroke width (1.5px padrão)
- Acessível (`aria-label` obrigatório quando decorativo não for o caso)
- Tamanhos: 16px (inline), 20px (default), 24px (destaque)

---

## Light Mode / Dark Mode

- Implementar com **`next-themes`** (`ThemeProvider` no root layout)
- Toggle no Header com ícone Sun/Moon (Lucide)
- Persistência via `localStorage`
- Evitar flash de tema errado: usar `suppressHydrationWarning` no `<html>`
- Todos os tokens de cor devem funcionar em ambos os modos via CSS `light-dark()`

---

## Internacionalização (i18n)

### Idiomas suportados

| Código | Idioma |
|---|---|
| `pt` | Português (padrão) |
| `en` | English |
| `es` | Español |
| `fr` | Français |
| `de` | Deutsch |
| `zh` | 中文 (Simplificado) |
| `ja` | 日本語 |

### Implementação

- Usar **`next-intl`** com rotas `[locale]`
- Idioma padrão: `pt`
- Locale detection automático via `Accept-Language` header
- Seletor de idioma no Header com bandeira + nome nativo

### Script de tradução automática

Criar `scripts/translate.ts` que:
1. Lê `messages/pt.json` como arquivo fonte
2. Para cada idioma alvo, chama **DeepL API Free** (`https://api-free.deepl.com/v2/translate`)
3. Preserva chaves existentes já traduzidas (não retraduza o que já existe)
4. Salva os resultados nos arquivos `.json` correspondentes
5. Exibe progresso no terminal

```
npm run translate
```

**Variável de ambiente necessária:**
```
DEEPL_API_KEY=your_deepl_free_api_key
```

### Estrutura dos arquivos de mensagem

```json
{
  "common": {
    "nav": {
      "home": "Início",
      "create": "Criar",
      "tutorial": "Tutorial",
      "about": "Sobre",
      "contact": "Contato"
    },
    "theme": {
      "light": "Modo claro",
      "dark": "Modo escuro"
    }
  },
  "home": {
    "hero": {
      "badge": "Robótica para todas as idades",
      "title": "...",
      "subtitle": "...",
      "cta_primary": "Começar agora",
      "cta_secondary": "Ver tutorial"
    },
    "features": { ... },
    "robots": { ... }
  },
  "create": { ... },
  "contact": { ... },
  "about": { ... }
}
```

---

## Páginas

### `/` — Home

**Hero Section:**

> **Referência visual principal: [discord.com](https://discord.com/)**
> O hero do Discord é a inspiração central — atmosfera dark, composição em camadas com ilustrações/personagens flutuantes, tipografia bold de impacto, CTAs centralizados com efeitos de hover animados e uma sensação de profundidade e energia sem poluição visual.

- **Background:** tema escuro por padrão no hero (independente do light/dark mode do app), com gradiente profundo do tipo `radial-gradient` saindo do centro — tons do brand (azul/roxo escuro) irradiando para um quase-preto nas bordas. Efeito similar ao fundo do Discord.
- **Composição em camadas (parallax):** ilustrações/mascotes de robôs educacionais (braço robótico, robô humanoide, drone) posicionados de forma assimétrica ao redor do conteúdo central, em camadas com profundidade — elementos mais próximos se movem mais rápido com scroll (efeito parallax via Framer Motion `useScroll` + `useTransform`)
- **Badge animado:** pill com ícone + texto curto (ex: "Robótica para todas as idades") com entrada slide-in suave (Framer Motion)
- **Headline:** Display XL (72px desktop), bold, centralizado — com uma ou duas palavras-chave em gradiente do brand (ex: `background-clip: text`). Fontes grandes e impactantes como no Discord ("Group chat that's **all fun & games**")
- **Subtítulo:** Body LG, `--text-secondary`, máx. 2 linhas, centralizado
- **Dois CTAs centralizados:**
  - Primário: filled com cor brand, border-radius pill, **seta animada** que desliza para direita no hover (igual ao Discord)
  - Secundário: ghost/outline, mesmo border-radius
  - Ambos com `whileHover` e `whileTap` do Framer Motion
- **Ilustração central:** Animação Lottie de braço robótico ou cena de robótica educacional, posicionada abaixo dos CTAs como elemento âncora visual (lazy loaded, `prefers-reduced-motion` respeitado)
- **Elementos decorativos de fundo:** partículas sutis ou grid de pontos (baixíssima opacidade), sem interferir na legibilidade
- **Scroll indicator animado:** ícone de seta ou mouse pulsando suavemente na parte inferior do hero

**Features Section:**
- 3 a 4 cards com ícone (Lucide), título e descrição
- Entrada com Framer Motion `staggerChildren` ao entrar no viewport (`useInView`)

**Robots Showcase:**
- Grid de cards dos robôs suportados (youBot, Spot, BB-8, e-puck, Mavic, Pioneer 3...)
- Cada card com imagem/ilustração, nome e badge de nível (Iniciante / Intermediário / Avançado)

**Parceiros/Instituições:**
- Logos de parceiros (UFAM, ICOMP, CAPES) em grayscale com hover colorido

---

### `/create` — Editor + Simulador

Layout dividido em dois painéis com redimensionamento (resizable split pane):

**Painel Esquerdo — Blockly Editor:**
- Componente React com `blockly` npm (sem iframe)
- Blocos customizados migrados de `blocos_up.js` e `ui_bloco.js`
- Toolbox categorizada e estilizada conforme o design system
- Área de código gerado (Arduino/C) com syntax highlighting
- Botões: `[ ▶ Simular ]` `[ ⬇ Exportar Código ]` `[ 🔄 Resetar ]`

**Painel Direito — Simulador 3D:**
- `<Canvas>` do React Three Fiber com fundo neutro
- Braço robótico 3D com 4 juntas: base (rotação Y), braço (rotação X), antebraço (rotação X), garra (abertura)
- Geometria construída com primitivas Three.js (BoxGeometry, CylinderGeometry) — cada segmento com material PBR
- Controles de câmera (OrbitControls do `@react-three/drei`) — rotacionar, zoom, pan
- Grid floor para referência espacial
- Iluminação: `ambientLight` + `directionalLight` com sombras suaves
- Animação: ao clicar "Simular", executa os comandos gerados pelos blocos em sequência, com interpolação suave (lerp/slerp nos quaternions)
- Painel de estado: mostra valores atuais de cada junta em graus

**Responsividade no /create:**
- Desktop (≥1024px): painéis lado a lado
- Tablet (768–1023px): painéis empilhados (editor em cima, simulador embaixo)
- Mobile (<768px): aviso recomendando uso em desktop + simulador apenas

**Preparado para Auth (futuro):**
- Botão "Salvar Projeto" visível mas desabilitado com tooltip "Faça login para salvar"
- Hook `useAuth()` já estruturado retornando `{ user: null, isLoading: false }` como placeholder
- Tipo `Project` já definido em `src/types/project.ts`

---

### `/tutorial` — Tutoriais

- Grid de cards de tutoriais categorizados por nível e robô
- Cada card com thumbnail, título, descrição curta, duração estimada e badge de nível
- Filtro por nível e por robô (client-side)
- (Placeholder: conteúdo pode ser mocado inicialmente)

---

### `/about` — Sobre

- Missão e visão do projeto
- Timeline da evolução do projeto
- Seção de parceiros institucionais
- Membros da equipe (grid de cards com foto, nome, papel)

---

### `/contact` — Contato

**Formulário com os campos:**
- Nome *
- E-mail *
- Assunto (select: Dúvida / Parceria / Bug / Sugestão / Outro)
- Mensagem *
- Botão de envio com loading state

**Backend:**
- API Route `app/api/contact/route.ts`
- Usa **Resend** (`resend` npm package)
- Variável de ambiente: `RESEND_API_KEY`
- Template de e-mail HTML responsivo
- Retorna feedback visual: toast de sucesso ou mensagem de erro inline
- Rate limiting básico por IP (middleware Next.js)

---

## Responsividade

Breakpoints (mobile-first, alinhados ao Tailwind):

| Breakpoint | Largura |
|---|---|
| `sm` | ≥ 640px |
| `md` | ≥ 768px |
| `lg` | ≥ 1024px |
| `xl` | ≥ 1280px |
| `2xl` | ≥ 1536px |

- Navegação mobile com menu hambúrguer animado (Framer Motion)
- Hero: texto centralizado em mobile, split layout em desktop
- Cards: 1 coluna (mobile) → 2 colunas (tablet) → 3–4 colunas (desktop)
- Touch-friendly: mínimo 44x44px para áreas clicáveis

---

## Acessibilidade

- Semântica HTML5 correta (`<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`, `<article>`)
- Todos os ícones decorativos com `aria-hidden="true"`, ícones funcionais com `aria-label`
- Ordem de foco lógica e visível (outline personalizado no design system, não removido)
- Contraste mínimo 4.5:1 para texto normal, 3:1 para texto grande (WCAG 2.1 AA)
- Lottie animations com `prefers-reduced-motion` respeitado
- Atributos `alt` descritivos em todas as imagens
- Formulário de contato com labels associados e mensagens de erro acessíveis

---

## Animações (Framer Motion)

Padrões de animação a usar consistentemente:

```ts
// Fade + slide up (entrada de seções)
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

// Stagger para listas de cards
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

// Scale suave para hover em cards
const cardHover = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.2 } }
}
```

- Usar `useInView` para disparar animações ao entrar no viewport
- Respeitar `prefers-reduced-motion` via `useReducedMotion()`

---

## Autenticação — Preparação para o Futuro

Mesmo sem implementar login agora, preparar a estrutura:

```ts
// src/lib/auth/types.ts
export type User = {
  id: string
  name: string
  email: string
  avatar?: string
}

// src/lib/auth/hooks.ts
export const useAuth = () => ({
  user: null as User | null,
  isLoading: false,
  signIn: () => Promise.resolve(),
  signOut: () => Promise.resolve(),
})
```

- `SignInButton` no Header renderizado mas com tooltip "Em breve"
- Estrutura de pastas `src/features/auth/` criada e documentada com `README.md`
- Comentários `// TODO: Auth — integrar NextAuth.js v5` nos pontos de integração

---

## Variáveis de Ambiente

```env
# Resend (formulário de contato)
RESEND_API_KEY=

# DeepL (traduções automáticas)
DEEPL_API_KEY=

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=UpRobotics

# Futuro — Auth
# AUTH_SECRET=
# AUTH_GOOGLE_ID=
# AUTH_GOOGLE_SECRET=

# Futuro — Banco de dados
# DATABASE_URL=
```

---

## Convenções de Código

- **Componentes:** Arrow functions + `export const` (sem `export default` em componentes para facilitar refactoring)
- **Props:** Interface nomeada `ComponentNameProps`, não `type`
- **Hooks customizados:** prefixo `use`, arquivo próprio em `hooks/`
- **Server vs Client Components:** Server Component por padrão, `'use client'` apenas quando necessário (interatividade, hooks de browser)
- **Paths absolutos:** `@/components/...`, `@/features/...`, `@/lib/...` (configurar em `tsconfig.json`)
- **Sem `any`:** TypeScript strict mode ativo
- **Comentários:** apenas onde a lógica não é autoevidente

---

## Prioridade de Implementação (Fases)

### Fase 1 — Fundação
1. Upgrade para Next.js 15 + React 19
2. Configurar Tailwind CSS v4 + design tokens
3. Configurar `next-themes` (light/dark)
4. Configurar `next-intl` + arquivos `pt.json` e `en.json` base
5. Criar componentes de layout: Header, Footer, PageWrapper
6. Implementar Hero da Home com Framer Motion + Lottie

### Fase 2 — Funcionalidades Core
7. Migrar Blockly do iframe para componente React (`features/blockly-editor`)
8. Implementar Simulador 3D (`features/robot-simulator`) com React Three Fiber
9. Conectar Blockly ↔ Simulador via estado React
10. Página `/create` completa

### Fase 3 — Conteúdo e Suporte
11. Páginas `/about`, `/tutorial`, `/contact`
12. Formulário de contato com Resend
13. Script `npm run translate` com DeepL API
14. Completar todos os idiomas

### Fase 4 — Qualidade e Lançamento
15. Testes (Playwright para E2E no fluxo /create)
16. Auditoria de acessibilidade
17. Auditoria de performance (Lighthouse ≥ 90 em todas as métricas)
18. Configurar `robots.txt`, `sitemap.xml`, meta tags SEO
19. Deploy em Vercel (configurar variáveis de ambiente de produção)
