# Mídias do site

## Já em uso

| Arquivo | Onde aparece |
|---|---|
| `equipe-dashboard.jpg` | Soluções — moldura do destaque do agente de IA |
| `equipe-escritorio.jpg` | Empresa — moldura ao lado do texto institucional |
| `equipe-recepcao.jpg` | Processo — fundo lateral com degradê |
| `equipe-reuniao.jpg` | Comparativo — fundo lateral com degradê |
| `disparos-predio.jpg` | Disparos — fundo lateral com degradê |
| `disparos-loop.mp4` | Disparos — loop de notificações no celular |
| `disparos-loop-poster.jpg` | Poster do loop (aparece antes do vídeo carregar) |
| `disparos-notificacoes.jpg` | Vitrine — card de campanhas multicanal |

## Ainda faltando — Vitrine

A Vitrine espera prints reais de sistema. Enquanto o arquivo não existir,
o card mostra um placeholder da marca e nada quebra.

| Arquivo | Conteúdo esperado | Formato |
|---|---|---|
| `case-bblaw.png` | Tela do ERP/CRM jurídico | 16:10 · 1600×1000 |
| `case-formularios.png` | Portal de formulários | 16:10 |
| `case-rbmotos.png` | Site RB Moto Parts | 16:10 |
| `case-cicatribem.png` | Agente multicanal | 16:10 |
| `case-pointify.png` | Plataforma Pointify | 16:10 |

## Padrão de otimização

Imagem: 1600–1800px de largura, JPEG qualidade ~5 no ffmpeg (`-q:v 5`),
alvo de 80–300 KB.

```bash
ffmpeg -i original.jpeg -vf scale=1800:-2 -q:v 5 saida.jpg
```

Vídeo: sempre sem áudio, H.264, 1000px de largura, alvo de 200–400 KB.
Roda em autoplay, mudo e em loop — mantenha até ~10s.

```bash
ffmpeg -i original.mp4 -an -vf scale=1000:-2 -c:v libx264 -profile:v main \
  -pix_fmt yuv420p -crf 28 -preset slow -movflags +faststart saida.mp4
```

Para usar um vídeo em qualquer slot, troque o `src` e passe `kind="video"`
com um `poster`:

```tsx
<MediaFrame src="/midia/arquivo.mp4" kind="video" poster="/midia/arquivo.jpg" ... />
```
