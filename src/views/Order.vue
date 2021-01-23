<template>
	<div class="container grid grid-50">
		<app-form></app-form>
		<app-order></app-order>
	</div>
</template>
<script>
import Form from '@/components/Form.vue';
import Order from '@/components/builder/Order.vue';
export default{
	components:{
		appForm: Form,
		appOrder: Order
	}
}
</script>