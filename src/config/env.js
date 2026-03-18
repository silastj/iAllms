// Configuração de variáveis de ambiente
// Funciona tanto localmente quanto no Netlify

// No Netlify, as variáveis são injetadas durante o build
// Localmente, use os valores padrão ou configure no netlify.toml

export const config = {
  supabase: {
    products: {
      url: import.meta.env?.VITE_SUPABASE_PRODUCTS_URL || 'https://jwqzvocwnixatmqzugjf.supabase.co',
      key: import.meta.env?.VITE_SUPABASE_PRODUCTS_KEY || 'sb_publishable_tB4-5-beNx-zX_DxSk4N5w_3dho5Y5n'
    },
    users: {
      url: import.meta.env?.VITE_SUPABASE_USERS_URL || 'https://eowweqaoegtddvhszuxt.supabase.co',
      key: import.meta.env?.VITE_SUPABASE_USERS_KEY || 'sb_publishable_0dyHejIG89GfuDOeQtiiUA_RTSUe6Ow'
    }
  }
}
