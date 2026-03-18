# 📘 Documentação de Integração com Supabase

## 📊 Visão Geral

Este projeto utiliza **dois projetos Supabase** diferentes:
- Um para **produtos**
- Um para **usuários**

## 🔧 Configuração

### Arquivo: `src/service/supabaseClient.js`

Contém a configuração dos dois clientes Supabase:

```javascript
// Cliente para produtos
export const supabase = createClient(supabaseProductsUrl, supabaseProductsKey)

// Cliente para usuários
export const supabaseUsers = createClient(supabaseUsersUrl, supabaseUsersKey)
```

## 📦 Serviços Implementados

### ProductService (`src/service/ProductService.js`)

Métodos disponíveis:
- `getProducts()` - Busca todos os produtos
- `getProductById(id)` - Busca produto por ID
- `getProductsByIds(ids)` - Busca múltiplos produtos por IDs

### UserService (`src/service/UserService.js`)

Métodos disponíveis:
- `getDefaultUsers()` - Busca todos os usuários
- `getUsers()` - Alias para getDefaultUsers
- `getUserById(userId)` - Busca usuário por ID
- `addUser(user)` - Adiciona novo usuário
- `updateUser(user)` - Atualiza dados do usuário
- `addPurchase(userId, productId)` - Adiciona compra ao usuário

## 🗄️ Estrutura das Tabelas

### Tabela: `products`

```sql
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    price NUMERIC NOT NULL,
    color TEXT NOT NULL
);
```

### Tabela: `users`

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    age INTEGER NOT NULL,
    purchases JSONB DEFAULT '[]'::jsonb
);
```

## 🔐 Segurança (RLS)

Para desenvolvimento, recomenda-se **desabilitar** o RLS:

```sql
ALTER TABLE products DISABLE ROW LEVEL SECURITY;
ALTER TABLE users DISABLE ROW LEVEL SECURITY;
```

Para produção, crie políticas apropriadas:

```sql
-- Exemplo: Permitir leitura pública
CREATE POLICY "Enable read access for all users" 
ON products FOR SELECT 
TO public 
USING (true);
```

## 🚀 Como Popular as Tabelas

Execute os seguintes comandos SQL no Supabase para inserir os dados:

### Produtos
Use o arquivo `data/products.json` como referência

### Usuários
Use o arquivo `data/users.json` como referência

**Nota**: O campo `purchases` deve ser do tipo JSONB para armazenar arrays de objetos.

## 🔄 Fluxo de Dados

1. **Inicialização** (`src/index.js`):
   - UserService busca usuários do Supabase
   - ProductService busca produtos do Supabase

2. **Treinamento do Modelo**:
   - Worker recebe os dados dos usuários
   - Busca produtos localmente (`data/products.json`)
   - Treina modelo de recomendação

3. **Interação do Usuário**:
   - Usuário seleciona perfil
   - Sistema faz recomendações baseadas no ML
   - Compras são salvas no Supabase

## 🐛 Solução de Problemas

### Erro 404 ao buscar tabela
- Verifique se as tabelas existem no Supabase
- Confirme os nomes das tabelas (`products` e `users`)

### Erro de RLS
- Desabilite o RLS ou crie políticas adequadas

### Erro de chave duplicada
- Verifique se o ID já existe antes de inserir
- Use `UPDATE` ao invés de `INSERT` quando apropriado

## 📚 Recursos

- [Documentação Supabase](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
