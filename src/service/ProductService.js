import { supabase } from './supabaseClient.js'

export class ProductService {
    async getProducts() {
        const { data, error } = await supabase
            .from('products')
            .select('*')

        if (error) {
            console.error(error)
            return []
        }

        return data
    }

    async getProductById(id) {
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .eq('id', id)
            .single()

        if (error) {
            console.error(error)
            return null
        }

        return data
    }

    async getProductsByIds(ids) {
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .in('id', ids)

        if (error) {
            console.error(error)
            return []
        }

        return data
    }
}
