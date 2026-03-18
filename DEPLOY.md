# 🚀 Guia de Deploy no Netlify

## 📋 Pré-requisitos

- Conta no [Netlify](https://www.netlify.com/)
- Repositório Git (GitHub, GitLab ou Bitbucket)
- Credenciais do Supabase

## 🔧 Passo a Passo

### 1. **Preparar o Repositório**

```bash
# Adicione todos os arquivos ao Git
git add .

# Faça o commit
git commit -m "Preparado para deploy no Netlify"

# Envie para o repositório remoto
git push origin main
```

### 2. **Configurar no Netlify**

1. Acesse [https://app.netlify.com](https://app.netlify.com)
2. Clique em **"Add new site"** → **"Import an existing project"**
3. Conecte seu repositório Git
4. Configure o build:
   - **Base directory**: (deixe vazio)
   - **Build command**: `echo "No build needed"`
   - **Publish directory**: `.`

### 3. **Configurar Variáveis de Ambiente**

No painel do Netlify:

1. Vá em **Site settings** → **Build & deploy** → **Environment**
2. Clique em **"Edit variables"**
3. Adicione as seguintes variáveis:

```bash
# Produtos
VITE_SUPABASE_PRODUCTS_URL=https://jwqzvocwnixatmqzugjf.supabase.co
VITE_SUPABASE_PRODUCTS_KEY=sua_chave_publica_produtos

# Usuários
VITE_SUPABASE_USERS_URL=https://eowweqaoegtddvhszuxt.supabase.co
VITE_SUPABASE_USERS_KEY=sua_chave_publica_usuarios
```

⚠️ **Importante**: Use suas **chaves públicas (anon key)** do Supabase, não as chaves privadas!

### 4. **Deploy**

Clique em **"Deploy site"**

O Netlify vai:
- Baixar seu código
- Injetar as variáveis de ambiente
- Fazer o deploy

### 5. **Verificar**

Após o deploy:
1. Acesse a URL fornecida pelo Netlify
2. Abra o Console do navegador (F12)
3. Verifique se não há erros de conexão

## 🔄 Deploy Contínuo

Agora, toda vez que você fizer push para o repositório, o Netlify vai automaticamente:
- Detectar as mudanças
- Fazer o redeploy
- Atualizar o site

## 📝 Domínio Personalizado (Opcional)

1. Vá em **Domain settings**
2. Clique em **"Add custom domain"**
3. Siga as instruções para configurar o DNS

## 🐛 Solução de Problemas

### Site não carrega
- Verifique se o `netlify.toml` está na raiz do projeto
- Confirme que o **Publish directory** está como `.`

### Erro de conexão com Supabase
- Verifique se as variáveis de ambiente estão configuradas corretamente
- Confirme que as chaves do Supabase são as **públicas** (anon key)
- Verifique se o RLS está desabilitado nas tabelas (desenvolvimento)

### Página em branco
- Abra o Console do navegador (F12)
- Veja os erros no console
- Verifique se os arquivos estão sendo carregados corretamente

## 📚 Recursos

- [Documentação Netlify](https://docs.netlify.com/)
- [Variáveis de Ambiente no Netlify](https://docs.netlify.com/configure-builds/environment-variables/)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)

## ✅ Checklist Final

- [ ] Código commitado e enviado para o Git
- [ ] Site criado no Netlify
- [ ] Variáveis de ambiente configuradas
- [ ] Deploy realizado com sucesso
- [ ] Site acessível pela URL do Netlify
- [ ] Conexão com Supabase funcionando
- [ ] Console sem erros

---

**Dica**: Use o **Netlify CLI** para testar localmente antes do deploy:

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Fazer login
netlify login

# Testar localmente
netlify dev

# Deploy manual
netlify deploy --prod
```
