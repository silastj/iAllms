# 🚀 Deploy Rápido - 5 Minutos

## ✅ Pré-requisitos
- [ ] Conta no GitHub
- [ ] Conta no Netlify
- [ ] Chaves do Supabase

## 📋 Passo a Passo

### 1️⃣ Preparar o Git (2 min)

```bash
# Inicializar repositório (se ainda não fez)
git init

# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "✨ Projeto pronto para deploy no Netlify"

# Criar repositório no GitHub e conectar
git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
git branch -M main
git push -u origin main
```

### 2️⃣ Deploy no Netlify (2 min)

1. Acesse: https://app.netlify.com/start
2. Clique em **"Import from Git"**
3. Selecione **GitHub**
4. Escolha seu repositório
5. Configure:
   - **Build command**: deixe vazio ou `echo "Static site"`
   - **Publish directory**: `.`
6. Clique em **"Deploy site"**

### 3️⃣ Configurar Variáveis (1 min)

No painel do Netlify:

**Site settings** → **Build & deploy** → **Environment** → **Edit variables**

Adicione (copie e cole suas chaves reais):

```bash
VITE_SUPABASE_PRODUCTS_URL=https://jwqzvocwnixatmqzugjf.supabase.co
VITE_SUPABASE_PRODUCTS_KEY=sua_chave_aqui

VITE_SUPABASE_USERS_URL=https://eowweqaoegtddvhszuxt.supabase.co
VITE_SUPABASE_USERS_KEY=sua_chave_aqui
```

💡 **Onde encontrar as chaves do Supabase?**
- Project Settings → API → anon/public key

### 4️⃣ Redeploy (30 seg)

1. Vá em **Deploys**
2. Clique em **"Trigger deploy"** → **"Deploy site"**
3. Aguarde o build completar
4. ✅ Pronto!

## 🎉 Seu site está no ar!

Acesse a URL fornecida pelo Netlify, algo como:
```
https://seu-site-123abc.netlify.app
```

## 🔧 Troubleshooting

### ❌ Erro 404 ao acessar
- Verifique se o `netlify.toml` está na raiz
- Confirme que o **Publish directory** é `.`

### ❌ Página em branco
1. Abra o Console (F12)
2. Verifique erros
3. Confirme que as variáveis estão configuradas

### ❌ Erro de conexão com Supabase
- Verifique se usou as chaves **públicas** (anon key)
- Confirme que as variáveis estão corretas
- Verifique se o RLS está desabilitado (desenvolvimento)

## 📱 Próximos Passos

- [ ] Personalizar URL: **Domain settings** → **Add custom domain**
- [ ] HTTPS automático: Já ativado! ✅
- [ ] Monitorar: **Analytics** (habilitado automaticamente)

## 🔄 Atualizações Futuras

Sempre que fizer mudanças:

```bash
git add .
git commit -m "Sua mensagem"
git push
```

O Netlify faz o deploy **automaticamente**! 🚀

---

**Precisa de ajuda?**
- [DEPLOY.md](./DEPLOY.md) - Guia completo
- [Netlify Docs](https://docs.netlify.com/)
- [Supabase Docs](https://supabase.com/docs)
