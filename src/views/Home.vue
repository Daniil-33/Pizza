<template>
	<div class="container grid">
		<div class="container-left">
		  	<app-size></app-size>
		  	<app-sauces></app-sauces>
		  	<app-ingridients></app-ingridients>
		</div>
		<app-order></app-order>
	</div>
</template>

<script>
import Size from '@/components/builder/Size.vue';
import Sauces from '@/components/builder/Sauces.vue';
import Ingridients from '@/components/builder/Ingridients.vue';
import Order from '@/components/builder/Order.vue';
export default{
	components:{
		appSize: Size,
		appSauces: Sauces,
		appIngridients: Ingridients,
		appOrder: Order
	}
}
</script>
