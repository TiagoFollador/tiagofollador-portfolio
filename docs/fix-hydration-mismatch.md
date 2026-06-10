# Fix: React Hydration Mismatch (v1.4 branch)

**Branch:** `feat/v1.4-dynamic-favicon`
**Date:** 2026-06-10

---

## Problema

Ao abrir o site, o React lançava um erro de hidratação:

```
Hydration failed because the server rendered text didn't match the client.
+ Sobre   (client)
- About   (server)
```

O erro apontava para `src/components/layout/Header.tsx:94`, onde os labels de navegação são renderizados com base no locale atual.

---

## Causa Raiz

**Arquivo:** `src/context/LocaleContext.tsx`

A função `detectLocale` era passada diretamente como inicializador lazy do `useState`:

```ts
// Antes — ERRADO
const [locale, setLocale] = useState<Locale>(detectLocale)
```

No servidor (SSR), `detectLocale` retorna `'en'` porque `typeof window === 'undefined'`. No cliente, a mesma função roda imediatamente na montagem do componente e acessa `navigator.language` — se o navegador do usuário estiver em `pt-BR`, retorna `'pt'`. O React tenta hidratar o HTML do servidor (`"About"`) com o virtual DOM do cliente (`"Sobre"`), causando o mismatch.

---

## Arquivos Alterados

### `src/context/LocaleContext.tsx`

**O que mudou:** O estado inicial agora sempre começa com `'en'` (seguro para SSR). A detecção do locale do navegador foi movida para um `useEffect`, que só executa no cliente após a hidratação.

```ts
// Depois — CORRETO
const [locale, setLocale] = useState<Locale>('en')

useEffect(() => {
  const detected = detectLocale()
  if (detected !== 'en') setLocale(detected)
}, [])
```

**Impacto:** Usuários com navegador em português verão um flash momentâneo de inglês → português no primeiro carregamento. Este é o comportamento esperado e correto para estado derivado do browser. Não há mais erro de hidratação.

---

### `src/context/AudienceContext.tsx`

**O que mudou:** O valor padrão do `createContext` foi alinhado com o estado inicial do `useState`.

```ts
// Antes — inconsistente
const AudienceContext = createContext<AudienceContextValue>({
  audience: 'devs',   // ← divergia do useState abaixo
  ...
})
const [audience, setAudience] = useState<Audience>('leaders')

// Depois — consistente
const AudienceContext = createContext<AudienceContextValue>({
  audience: 'leaders',  // ← alinhado
  ...
})
```

**Impacto:** Nenhum impacto visual — o default do contexto só é usado se um consumer estiver fora da árvore do Provider, o que não ocorre na aplicação. Corrige uma inconsistência que poderia causar bugs futuros.

---

## Como Verificar

1. `pnpm dev` — abrir o site com o navegador configurado em `pt-BR`
2. Verificar que o console **não** exibe erro de hidratação
3. Os labels de navegação devem aparecer em inglês e alternar para português após a hidratação
4. O botão de idioma (Globe) deve continuar funcionando normalmente
5. Recarregar a página — confirmar que não há erro no segundo carregamento
