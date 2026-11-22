# Do GPT ao Plugin - Bessa Web Design

Landing page editável em Next.js + TypeScript + CSS, preparada para divulgação e checkout de workshop ao vivo no Zoom.

## Executar

1. Instale Node.js 20 ou superior.
2. Abra esta pasta no VS Code ou Antigravity.
3. No terminal: `npm install`
4. Depois: `npm run dev`
5. Abra http://localhost:3000

## Checkout, Página de Obrigado e WhatsApp

Copie `.env.example` para `.env.local` e preencha:
- `NEXT_PUBLIC_HOTMART_AO_VIVO`: Link do checkout da Hotmart para o workshop ao vivo.
- `NEXT_PUBLIC_HOTMART_GRAVACAO`: Link do checkout da Hotmart para o workshop ao vivo + gravação.
- `NEXT_PUBLIC_WHATSAPP_GRUPO`: Link de convite do grupo VIP do WhatsApp (ex: `https://chat.whatsapp.com/...`).
- `NEXT_PUBLIC_WHATSAPP`: Número de suporte no WhatsApp (55 + DDD + número).

Reinicie o servidor após alterar o `.env.local`.

### Fluxo de Redirecionamento da Hotmart:
Na Hotmart, nas configurações do produto -> **Página de Pagamento** -> **Página de Agradecimento**, configure como **Página externa** e aponte para:
`https://seudominio.com.br/obrigado`

## Estrutura

- `app/page.tsx`: Landing page principal (conteúdo, preços, FAQ).
- `app/obrigado/page.tsx`: Página de agradecimento pós-compra com botão direto para entrar no grupo do WhatsApp.
- `app/globals.css`: Cores, tipografia e responsividade.
- `app/layout.tsx`: Metadados e SEO base.
