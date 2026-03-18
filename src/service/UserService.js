import { supabaseUsers } from './supabaseClient.js'

export class UserService {
  async getDefaultUsers() {
    const { data, error } = await supabaseUsers
      .from('users')
      .select('*')

    if (error) {
      console.error('Erro ao buscar usuários do Supabase:', error)
      return []
    }

    return data
  }

  async getUsers() {
    return this.getDefaultUsers()
  }

  async getUserById(userId) {
    const { data, error } = await supabaseUsers
      .from('users')
      .select('*')
      .eq('id', userId)
      .single()

    if (error) {
      console.error('Erro ao buscar usuário:', error)
      return null
    }

    return data
  }

  async addUser(user) {
    const { data, error } = await supabaseUsers
      .from('users')
      .insert(user)
      .select()
      .single()

    if (error) {
      console.error('Erro ao adicionar usuário:', error)
      return null
    }

    return data
  }

  async updateUser(user) {
    const { data, error } = await supabaseUsers
      .from('users')
      .update(user)
      .eq('id', user.id)
      .select()
      .single()

    if (error) {
      console.error('Erro ao atualizar usuário:', error)
      return null
    }

    return data
  }

  async addPurchase(userId, productId) {
    // Primeiro busca o usuário atual
    const user = await this.getUserById(userId)

    if (!user) {
      console.error('Usuário não encontrado')
      return null
    }

    // Adiciona o novo produto às compras
    const purchases = user.purchases || []
    purchases.push(productId)

    // Atualiza o usuário
    return this.updateUser({
      id: userId,
      purchases
    })
  }
}
