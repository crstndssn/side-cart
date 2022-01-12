import axios from 'axios'

class API {
  async updateShopifySection(sectionId) {
    try {
      const htmlSection = await axios.get(`?section_id=${sectionId}`)
      console.log(htmlSection)
      return htmlSection.data
    } catch (error) {
      console.log(error)
    }
  }

  async updateCart(config) {
    
    const { id, quantity } = config

    try {
      const response = await axios.post(`${routes.cart_update_url}.js`, {
        updates: {
          [id]: quantity
        }
      })
      return response.data
    } catch(error) {
      console.log(error)
    }

  }

}

export default new API()
