# Mídias do site

Solte os arquivos aqui com estes nomes exatos. Enquanto o arquivo não existir,
o site mostra um placeholder da marca no lugar — nada quebra.

| Arquivo | Onde aparece | Formato sugerido |
|---|---|---|
| `agente-ia.png` | Seção Soluções — destaque do agente de IA | 4:3 · 1200×900 · print ou mock do agente atendendo |
| `case-bblaw.png` | Vitrine | 16:10 · 1600×1000 · tela do ERP/CRM jurídico |
| `case-formularios.png` | Vitrine | 16:10 · portal de formulários |
| `case-rbmotos.png` | Vitrine | 16:10 · site RB Moto Parts |
| `case-cicatribem.png` | Vitrine | 16:10 · agente multicanal |
| `case-pointify.png` | Vitrine | 16:10 · plataforma Pointify |
| `case-disparos.png` | Vitrine | 16:10 · painel de disparos |
| `empresa-bastidores.jpg` | Seção Empresa | 4:5 vertical · 1000×1250 · time, escritório ou bastidores |

## Vídeo

Qualquer item acima aceita vídeo. Troque o `src` para o `.mp4` e passe
`kind="video"` no `MediaFrame` correspondente:

```tsx
<MediaFrame src="/midia/agente-ia.mp4" kind="video" poster="/midia/agente-ia.png" ... />
```

O vídeo roda em autoplay, mudo e em loop — mantenha até ~10s e comprima
(H.264, largura máxima de 1280px, alvo de 2–4 MB).
