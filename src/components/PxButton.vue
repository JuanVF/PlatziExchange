<template>
	<button
		v-on:click="buttonClick"
		class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-2 border border-green-500 hover:border-transparent rounded"
	>
		<beat-loader :loading="isLoading" :color="'#68D391'" />
		<p v-show="!isLoading">
			<slot></slot>
		</p>
	</button>
</template>

<script>
export default {
	name: 'PxButton',
	props: {
		isLoading: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		buttonClick() {
			this.$emit('buttonClick');
		}
	}
};
</script>

<style scoped>
td {
	padding: 10px;
	text-align: center;
}
</style>
