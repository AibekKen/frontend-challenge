import { createStore } from 'vuex'

export default createStore({
  state: {
    catsList: [],
    favorites: [],
  },
  getters: {
  },
  mutations: {
    toggleFav(state, favorite) {
      if (!state.favorites.some(elem => elem.id === favorite.id)) {
        state.favorites.push(favorite);
        state.catsList.forEach(element => {
          if (element.id == favorite.id) {
            element.fav = true;
          }
        })
      } else {
        state.favorites = state.favorites.filter(elem => elem.id !== favorite.id)
        console.log(state.favorites)
        state.catsList.forEach(element => {
          if (element.id == favorite.id) {
            element.fav = false;
          }
        })
      }
    },
    updateImages(state, catsList) {
      state.catsList = catsList;
    },
  },
  getters: {
    favoriteCats(state) {
      return state.favorites
    },
    allCats(state) {
      return state.catsList
    }
  },
  actions: {
    async getImages(ctx) {
      var options = {
        method: "GET",
        headers: { "x-api-key": "f087a802-5926-4289-ab9e-d72c299ece95" },
      };
      const res = await fetch("https://api.thecatapi.com/v1/images/search?size=small&limit=15", options)
      const data = await res.json()

      const catsList = data;
      catsList.forEach(element => {
        element.fav = false;
      });
      console.log(catsList)
      ctx.commit('updateImages', catsList)
    },
  },
  modules: {
  }
})
