<template>
	<div class="panel">
        <div class="panel-heading">
          <h3 class="panel-title"><span class="panel-title__number">3.</span>Выберите ингридиенты</h3>
        </div>
        <div class="panel-body">
          <div class="pizza-ingredients">
            <div 
            	class="pizza-ingredients-element"
            	v-for="(item, index) in ingredients"
            	:key="index"
            	>
              <img class="pizza-ingredients-element__image" :src="item.image" alt="">
              <span class="pizza-ingredients-element__name">{{ item.name }}</span>
              <span class="pizza-ingredients-element__weight">{{item.name}}, {{ item.weight }}</span>
              <span class="pizza-ingredients-element__price">{{ item.price }}</span>
              <div class="pizza-ingredients-bottom">
                <button class="pizza-ingredients__button" @click="addingridient(item)">Добавить</button>
              </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default{
	data: () => ({
		
	}),
    computed:{
        ingredients(){
            return this.$store.state.ingredients
        }
    },
    methods:{
        addingridient(element){
            this.$store.commit('addIngridient', element);
        }
    }
}
</script>
<style>
	.pizza-ingredients {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

.pizza-ingredients-element {
    position: relative;
    padding: 18px 15px 23px;
    color: #fff;
    border: 4px solid transparent;
    border-radius: 3px;
    cursor: pointer;
    transition: all 0.3s;
    text-align: center;
}

.pizza-ingredients-element:hover {
    border-color: #fdbc2c;
    background-color: rgba(0, 0, 0, 0.3);
}

.pizza-ingredients-element__image {
    margin-bottom: 30px;
}

.pizza-ingredients-element__name {
    display: block;
    color: #fdbc2c;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
}

.pizza-ingredients-element__weight {
    display: block;
    font-size: 13px;
    margin-bottom: 15px;
}

.pizza-ingredients-element__price {
    display: block;
    font-family: Caveat, Roboto, Arial, sans-serif;
    color: #D94F2B;
    font-size: 24px;
}

.pizza-ingredients-bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
}

.pizza-ingredients__select {
    height: 35px;
}

.pizza-ingredients__button {
    height: 35px;
    margin-left: 10px;
    border: none;
    border-radius: 3px;
    background: #fdbc2c;
    text-transform: uppercase;
    font-weight: bold;
    color: #000;
    cursor: pointer;
    transition: all 0.3s;
}

.pizza-ingredients__button:hover {
    opacity: 0.8;
}
</style>