# 📦 Estrutura do Projeto - E-commerce ML Recommendation

## 🌳 Estrutura de Arquivos

```
modulo03template/
├── 📄 index.html                    # Página principal
├── 🎨 style.css                     # Estilos globais
│
├── 📋 Configuração e Deploy
│   ├── package.json                 # Dependências e scripts
│   ├── netlify.toml                 # ⭐ Configuração do Netlify
│   ├── .env.example                 # ⭐ Template de variáveis
│   ├── .env.local.example           # ⭐ Template local
│   └── .gitignore                   # ⭐ Arquivos ignorados
│
├── 📚 Documentação
│   ├── README.md                    # ⭐ Documentação principal
│   ├── SUPABASE.md                  # Guia Supabase
│   ├── DEPLOY.md                    # ⭐ Guia de deploy Netlify
│   └── CHANGELOG.md                 # ⭐ Histórico de mudanças
│
├── 📊 data/
│   ├── products.json                # Dados de produtos (backup)
│   └── users.json                   # Dados de usuários (backup)
│
└── 💻 src/
    ├── index.js                     # Ponto de entrada
    │
    ├── ⚙️ config/
    │   └── env.js                   # ⭐ Configuração de variáveis
    │
    ├── 🎮 controller/
    │   ├── ModelTrainingController.js
    │   ├── ProductController.js
    │   ├── TFVisorController.js
    │   ├── UserController.js
    │   └── WorkerController.js
    │
    ├── 📡 service/
    │   ├── supabaseClient.js        # ⭐ Cliente Supabase (atualizado)
    │   ├── ProductService.js        # Serviço de produtos
    │   └── UserService.js           # Serviço de usuários
    │
    ├── 🎨 view/
    │   ├── View.js
    │   ├── ModelTrainingView.js
    │   ├── ProductView.js
    │   ├── TFVisorView.js
    │   ├── UserView.js
    │   └── templates/
    │       ├── past-purchase.html
    │       └── product-card.html
    │
    ├── 📢 events/
    │   ├── constants.js
    │   └── events.js
    │
    └── 👷 workers/
        └── modelTrainingWorker.js

⭐ = Arquivos novos ou modificados para deploy
```

## 🔄 Fluxo de Variáveis de Ambiente

### Desenvolvimento Local
```
.env.local (não commitado)
    ↓
src/config/env.js (lê import.meta.env)
    ↓
src/service/supabaseClient.js
    ↓
Services (ProductService, UserService)
```

### Produção (Netlify)
```
Netlify Environment Variables
    ↓
Injetadas durante o build
    ↓
src/config/env.js (lê import.meta.env)
    ↓
src/service/supabaseClient.js
    ↓
Services (ProductService, UserService)
```

## 🌐 Variáveis de Ambiente

| Variável | Descrição | Onde Configurar |
|----------|-----------|-----------------|
| `VITE_SUPABASE_PRODUCTS_URL` | URL do Supabase (produtos) | Netlify UI |
| `VITE_SUPABASE_PRODUCTS_KEY` | Chave pública (produtos) | Netlify UI |
| `VITE_SUPABASE_USERS_URL` | URL do Supabase (usuários) | Netlify UI |
| `VITE_SUPABASE_USERS_KEY` | Chave pública (usuários) | Netlify UI |

## 🚀 Scripts NPM

```bash
npm start           # Inicia servidor local (browser-sync)
npm run dev         # Alias para start
npm run netlify:dev # Testa com Netlify CLI
npm run deploy      # Deploy para produção
```

## 📝 Checklist de Deploy

### Antes do Deploy
- [ ] Código testado localmente
- [ ] Variáveis de ambiente configuradas no `netlify.toml`
- [ ] `.env` files não commitados
- [ ] README atualizado
- [ ] Código commitado no Git

### No Netlify
- [ ] Repositório conectado
- [ ] Variáveis de ambiente configuradas
- [ ] Build configurado corretamente
- [ ] Deploy realizado

### Após o Deploy
- [ ] Site acessível
- [ ] Console sem erros
- [ ] Conexão com Supabase OK
- [ ] ML funcionando

## 🔐 Segurança

### Arquivos Protegidos (.gitignore)
- `.env`
- `.env.local`
- `.env.*.local`
- `.netlify/`
- `node_modules/`

### Boas Práticas
✅ Use chaves **públicas** (anon key) no frontend
✅ Nunca commite arquivos `.env`
✅ Configure RLS no Supabase para produção
✅ Use variáveis de ambiente para credenciais

## 📊 Arquitetura

```
┌─────────────┐
│   Netlify   │
│   Hosting   │
└──────┬──────┘
       │
       ▼
┌─────────────┐     ┌──────────────┐
│  Frontend   │────▶│   Supabase   │
│  (SPA)      │     │  (Products)  │
└──────┬──────┘     └──────────────┘
       │
       │            ┌──────────────┐
       └───────────▶│   Supabase   │
                    │   (Users)    │
                    └──────────────┘
```

## 🎯 Próximos Passos

1. [ ] Configurar domínio personalizado
2. [ ] Adicionar Analytics
3. [ ] Implementar CI/CD
4. [ ] Adicionar testes E2E
5. [ ] Otimizar performance
