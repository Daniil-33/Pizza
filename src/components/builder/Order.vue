<template>
	<div class="order">
      <span class="order__title">Ваш заказ</span>
      <div class="order-table-title">
        <span>Ингридиент</span>
        <span>Стоимость</span>
      </div>
      <div class="order-table">
        <div class="order-table-row" v-for="item in selectedSauces" :key="item.id">
          <div class="order-table-row-left">
            <span class="order-table__name">Соус {{ item.name }}</span>
          </div>
          <div class="order-table-row-right">
            <span class="order-table__price">{{ item.price }} руб.</span>
            <button class="order-table__remove" @click="removeSauce(item)"><img src="../../assets/images/remove.png" alt=""></button>
          </div>
        </div>
        <div class="order-table-row" v-for="item in selectedIngridients" :key="item.id">
          <div class="order-table-row-left">
            <div class="order-table-buttons">
              <button class="order-table__button" @click="incrementIngridient(item)"><img src="../../assets/images/minus.png"></button>
              <button class="order-table__button" @click="addIgridient(item)"><img src="../../assets/images/plus.png"></button>
            </div>
            <span class="order-table__name"> {{item.name}} x {{ item.count }}</span>
          </div>
          <div class="order-table-row-right">
            <span class="order-table__price">{{ item.count * item.price }} руб.</span>
            <button class="order-table__remove" @click="removeIngridient(item)"><img src="../../assets/images/remove.png" alt=""></button>
          </div>
        </div>
        <div class="order-table-row" v-if="selectedSize.name">
          <div class="order-table-row-left">
            <span class="order-table__name size">Размер пиццы: {{ selectedSize.name }}</span>
          </div>
          <div class="order-table-row-right">
            <span class="order-table__price">{{ selectedSize.price }} руб.</span>
          </div>
        </div>
      </div>
      <div class="order-table-row">
      	<div class="order-total">{{ total }} руб.</div>
      </div>
      <router-link 
      	:style="{display: $route.path === '/order' ? 'none' : 'flex'}"
      	v-if="selectedSize.name && ( selectedSauces.length || selectedIngridients.length )"
      	to="/order" 
      	class="order-now"
      	>Оформить заказ</router-link>
    </div>
</template>
<script>
export default{
	computed:{
		selectedSize(){
			return this.$store.state.selectedSize
		},
		selectedSauces(){
			return this.$store.getters['getSauces'];
		},
		selectedIngridients(){
			return this.$store.getters['getIngridients'];
		},
		total(){
			const totalSauces = this.selectedSauces.length ? this.selectedSauces.reduce((total, acc) => total + acc.price, 0) : 0;
			const totalIngredients = this.selectedIngridients.length ? this.selectedIngridients.reduce((total, acc) => total + (acc.price * acc.count), 0) : 0;
			const totalSize = this.selectedSize.price ? this.selectedSize.price : 0;

			return +totalSize + +totalIngredients + +totalSauces;
		}
	},
	methods:{
		addIgridient(element){
			this.$store.commit('addIngridient', element);
		},
		incrementIngridient(element){
			this.$store.commit('incrementIngridient', element);
		},
		removeIngridient(element){
			this.$store.commit('removeIngridient', element);
		},
		removeSauce(element){
			this.$store.commit('removeSauce', element);
		},
		toOrder(){
			this.$store.commit('toDoneOreder');
		}
	}
}
</script>
<style>
.order-total{
	display: block;
	color: #fff;
	margin-top: 10px;
	font-size: 16px;
}
.order {
    padding: 20px 30px 25px 35px;
    background-color: rgba(0, 0, 0, 0.3);
}

.order__title {
    display: block;
    margin-bottom: 20px;
    color: #fdbc2c;
    font-size: 24px;
    font-weight: bold;
}

.order-table {
    margin-top: 20px;
}

.order-table-title {
    display: grid;
    grid-template-columns: 3fr 2fr;
    text-transform: uppercase;
    padding: 20px 0;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    border-bottom: 1px solid #fff;
}

.order-table-title span:last-child {
    text-align: right;
}

.order-table-row {
    display: grid;
    grid-template-columns: 3fr 2fr;
    padding: 3px 0;
}

.order-table-buttons {
    margin-right: 10px;
    min-width: 40px;
    max-width: 40px;
}

.order-table__button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
}

.order-table__button img {
    width: 15px;
    height: 15px;
}

.order-table-row-left {
    display: flex;
    align-items: center;
}

.order-table__name {
    font-size: 11px;
    color: #fff;
}

.order-table__name.size {
    font-size: 15px;
}

.order-table__price {
    color: #fff;
    font-size: 18px;
    font-family: Caveat, Roboto, Arial, sans-serif;
}

.order-table-row-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.order-table__remove {
    cursor: pointer;
    background: none;
    padding: 0;
    border: none;
    margin-left: 10px;
}

.order-now {
    margin-top: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    background: #fdbc2c;
    text-transform: uppercase;
    color: #000;
    cursor: pointer;
    transition: all 0.3s;
    text-decoration: none;
    font-weight: bold;
}

.order-now:hover {
    opacity: .8;
}

.send-form {
    padding: 20px 30px 25px 35px;
    background-color: rgba(0, 0, 0, 0.3);
}

.send-form__input {
    display: block;
    height: 40px;
    border-radius: 3px;
    width: 100%;
    border: none;
    margin-bottom: 6px;
    padding: 0 10px;
}
</style>