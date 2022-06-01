import { createStore } from 'vuex'

export default createStore({
  state: {
    catsList: [],
    favorites: [],
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
    addMoreImages(state, newList) {
      state.catsList = [...state.catsList, ...newList];
    },
  },
  getters: {
    favoriteCats(state) {
      return state.favorites;
    },
    allCats(state) {
      return state.catsList
    },
    catsCount(state) {
      return state.catsList.length
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
      ctx.commit('updateImages', catsList)
    },
    async getMoreImages(ctx) {
      var options = {
        method: "GET",
        headers: { "x-api-key": "f087a802-5926-4289-ab9e-d72c299ece95" },
      };
      const res = await fetch("https://api.thecatapi.com/v1/images/search?size=small&limit=15", options)
      const data = await res.json()

      const newList = data;
      newList.forEach(element => {
        element.fav = false;
      });
      ctx.commit('addMoreImages', newList)
    },
  },
  modules: {
  }
})
