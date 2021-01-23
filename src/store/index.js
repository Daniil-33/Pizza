import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	selectedSize: [],
  	sauces: [
		  {id: 'ranch', checked: false, name: 'Ранч', description: 'Идеальное сочетание трав и специй', price: 40, image: '/images/sauce/ranch.png'},
		  {id: 'bluecheese', checked: false, name: 'Блю чиз', description: 'Сливочный сыр с плесенью наполнен ароматом в каждом соусе', price: 25, image: '/images/sauce/ranch.png'},
		  {id: 'marinara', checked: false, name: 'Маринара', description: 'Полный вкус итальянского соуса для пиццы, рассчитанный на макание', price: 35, image: '/images/sauce/marinara.png'},
		  {id: 'cheese', checked: false, name: 'Сырный', description: 'Прекрасный соус, который не оставит равнодушным', price: 15, image: '/images/sauce/cheese.png'},
		  {id: 'garlic', checked: false, name: 'Чесночный', description: 'Добавьте немного молнии в соус со свежим чесноком', price: 40, image: '/images/sauce/garlic.png'},
		  {id: 'barbecue', checked: false, name: 'Барбекю', description: 'Дымный соус для барбекю из меда и патоки', price: 35, image: '/images/sauce/marinara.png'},
		],
	ingredients: [
		  {id: 'pineapple', name: 'Ананасы', weight: 60, image: '/images/ingredients/pineapple.png', price: 50, count: 0 },
		  {id: 'aubergines', name: 'Баклажаны', weight: 150, image: '/images/ingredients/aubergines.png', price: 55, count: 0 },
		  {id: 'bacon', name: 'Бекон', weight: 50, image: '/images/ingredients/bacon.png', price: 120, count: 0 },
		  {id: 'broccoli', name: 'Брокколи', weight: 70, image: '/images/ingredients/broccoli.png', price: 40, count: 0 },
		  {id: 'chicken', name: 'Курица', weight: 100, image: '/images/ingredients/chicken.png', price: 150, count: 0 },
		  {id: 'chillies', name: 'Красный перец', weight: 10, image: '/images/ingredients/chillies.png', price: 40, count: 0 },
		  {id: 'corn', name: 'Кукуруза', weight: 60, image: '/images/ingredients/corn.png', price: 20, count: 0 },
		  {id: 'eggs', name: 'Яйца', weight: 30, image: '/images/ingredients/eggs.png', price: 10, count: 0 },
		  {id: 'garlic', name: 'Чеснок', weight: 10, image: '/images/ingredients/garlic.png', price: 5, count: 0 },
		  {id: 'ham', name: 'Ветчина', weight: 65, image: '/images/ingredients/ham.png', price: 80, count: 0 },
		  {id: 'mushrooms', name: 'Грибы', weight: 110, image: '/images/ingredients/mushrooms.png', price: 25, count: 0 },
		  {id: 'olives', name: 'Оливки', weight: 80, image: '/images/ingredients/olives.png', price: 35, count: 0 },
		  {id: 'onions', name: 'Лук', weight: 50, image: '/images/ingredients/onions.png', price: 15, count: 0 },
		  {id: 'peppers', name: 'Перец', weight: 120, image: '/images/ingredients/peppers.png', price: 25, count: 0 },
		  {id: 'salami', name: 'Колбаса', weight: 95, image: '/images/ingredients/salami.png', price: 125, count: 0 },
		  {id: 'seafood', name: 'Морепродукты', weight: 130, image: '/images/ingredients/seafood.png', price: 230, count: 0 },
		  {id: 'shrimps', name: 'Креветки', weight: 90, image: '/images/ingredients/shrimps.png', price: 130, count: 0 },
		  {id: 'tuna', name: 'Тунец', weight: 90, image: '/images/ingredients/tuna.png', price: 60, count: 0 },
	]
  },
  mutations: {
  	setSize(state, value){
  		state.selectedSize = value;
  	},
  	addSauce(state, payload){
  		const index = state.sauces.findIndex( el => el.id === payload.id);
  		state.sauces[index].checked = payload.checked;
  	},
  	removeSauce(state, payload){
  		const index = state.sauces.findIndex( el => el.id === payload.id);
  		state.sauces[index].checked = false;
  	},
  	addIngridient(state, payload){
  		const index = state.ingredients.findIndex( el => el.id === payload.id);
  		state.ingredients[index].count++;
  	},
  	incrementIngridient(state, payload){
  		const index = state.ingredients.findIndex( el => el.id === payload.id);
  		const count = state.ingredients[index].count;

  		if(count > 1){
  			state.ingredients[index].count--;
  		}
  	},
  	removeIngridient(state, payload){
  		const index = state.ingredients.findIndex( el => el.id === payload.id);
  		state.ingredients[index].count = 0;
  	}
  },
  getters:{
  	getSauces(state){
  		return state.sauces.filter(el => el.checked);
  	},
  	getIngridients(state){
  		return state.ingredients.filter(el => el.count > 0);
  	}
  },
  actions: {
  },
  modules: {
  }
})
