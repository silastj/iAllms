# E-commerce Recommendation System

A web application that displays user profiles and product listings, with machine learning recommendations using TensorFlow.js. **Now integrated with Supabase for data persistence!**

## 🚀 Features

- ✅ User profile selection with details display
- ✅ Past purchase history display
- ✅ Product listing with "Buy Now" functionality
- ✅ **TensorFlow.js-based recommendation engine**
- ✅ **Real-time data from Supabase**
- ✅ User similarity analysis
- ✅ Product recommendation based on purchase history

## 📋 Project Structure

- `index.html` - Main HTML file for the application
- `src/index.js` - Entry point for the application
- `src/view/` - Contains classes for managing the DOM and templates
- `src/controller/` - Contains controllers to connect views and services
- `src/service/` - Contains business logic and Supabase integration
- `src/workers/` - TensorFlow.js model training in Web Worker
- `data/` - Contains JSON files with sample data

## 🛠️ Setup and Run

### 1. Install dependencies:
```bash
npm install
```

### 2. Configure Supabase:

Update `src/service/supabaseClient.js` with your Supabase credentials:
- Products database URL and key
- Users database URL and key

### 3. Start the application:
```bash
npm start
```

### 4. Open your browser:
Navigate to `http://localhost:3000`

## 🗄️ Database Structure

### Products Table
- `id` (int) - Primary key
- `name` (text)
- `category` (text)
- `price` (numeric)
- `color` (text)

### Users Table
- `id` (int) - Primary key
- `name` (text)
- `age` (int)
- `purchases` (jsonb) - Array of purchased products

## 🔧 Technologies

- **Frontend**: Vanilla JavaScript, HTML, CSS
- **ML**: TensorFlow.js
- **Database**: Supabase (PostgreSQL)
- **Server**: Browser-sync

## 📝 Notes

- Make sure to disable RLS (Row Level Security) in Supabase tables for development
- The ML model trains automatically when users are loaded
- Recommendations are generated in real-time using a neural network

## 🚀 Deploy no Netlify

Este projeto está preparado para deploy no Netlify. Veja o guia completo em [DEPLOY.md](./DEPLOY.md).

**Passos rápidos:**

1. Faça push do código para o GitHub
2. Conecte o repositório no Netlify
3. Configure as variáveis de ambiente
4. Deploy automático! 🎉

**Variáveis necessárias:**
- `VITE_SUPABASE_PRODUCTS_URL`
- `VITE_SUPABASE_PRODUCTS_KEY`
- `VITE_SUPABASE_USERS_URL`
- `VITE_SUPABASE_USERS_KEY`

## 📚 Documentação

- [README.md](./README.md) - Visão geral do projeto
- [SUPABASE.md](./SUPABASE.md) - Guia de integração com Supabase
- [DEPLOY.md](./DEPLOY.md) - Guia de deploy no Netlify
- [CHANGELOG.md](./CHANGELOG.md) - Histórico de mudanças
