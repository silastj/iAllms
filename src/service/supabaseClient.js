import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'
import { config } from '../config/env.js'

// Cliente Supabase para tabela de produtos
export const supabase = createClient(
  config.supabase.products.url,
  config.supabase.products.key
)

// Cliente Supabase para tabela de usuários
export const supabaseUsers = createClient(
  config.supabase.users.url,
  config.supabase.users.key
)


