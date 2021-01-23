<template>
  <form class="send-form">
    <input type="text" class="send-form__input" placeholder="Ваше имя">
    <input type="phone" class="send-form__input" placeholder="Ваш телефон">
    <input type="email" class="send-form__input" placeholder="Ваш email">
    <a href="#" class="order-now">Оформить заказ</a>
  </form>
</template>
<script>
export default{
	data: () => ({
		name: '',
		number: '',
		email: ''
	})
}
</script>
<style>
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