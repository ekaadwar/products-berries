import { defineStore } from "pinia"
import { ref, computed } from "vue"
import axios from "axios"

type Product = {
  id: number,
  title: string,
  category: string,
  price: number,
  image: string
}

export const useProductStore = defineStore("productStore", () => {
  const products = ref<Product[]>([])
  const loading = ref<boolean>(false)
  const searchQuery = ref<string>("")
  const sortAsc = ref<boolean>(true)

  const fetchProducts = async (): Promise<void> => {
    loading.value = true
    try {
      const res = await axios.get<Product[]>("https://fakestoreapi.com/products")
      products.value = res.data
    } catch (error) {
      console.log("Error fetching products.", error)
    } finally {
      loading.value = false
    }
  }

  const filteredProducts = computed<Product[]>(() => {
    return products.value
      .slice()
      .sort((a, b) => sortAsc.value === true ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title))
      .filter(product =>
        product.title.toLowerCase().includes(searchQuery.value.toLocaleLowerCase())
      )
  })

  const deleteProducts = (id: number): void => {
    products.value = products.value.filter((product) => product.id !== id)
  }

  const createProduct = (product: Product): void => {
    products.value.push({
      ...product,
      id: products.value.length + 1
    })
  }

  return {
    products,
    loading,
    searchQuery,
    filteredProducts,
    sortAsc,
    fetchProducts,
    deleteProducts,
    createProduct
  }
})