import { createStore } from 'vuex'

export default createStore({
  state: {
    catsList: [],
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    async getImages() {
      var options = {
        method: "GET",
        headers: { "x-api-key": "3dc86c15-f8de-44ad-94fa-50121c7a4271" },
      };
      const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=15", options)
      const data = await res.json()
      console.log(data)
      this.catsList = data;
    }
  },
  modules: {
  }
})
