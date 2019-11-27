<template>
	<div>
		<bounce-loader :loading="isLoading" :color="'#68D391'" :size="100" />
		<px-assets-table v-show="!isLoading" v-bind:assets="assets" />
	</div>
</template>

<script>
import PxAssetsTable from '@/components/PxAssetsTable';
import api from '@/api';

export default {
	name: 'Home',
	components: {
		PxAssetsTable
	},
	data() {
		return {
			isLoading: false,
			assets: []
		};
	},
	async created() {
		let context = this;
		this.isLoading = true;
		api.getAssets()
			.then(assets => (this.assets = assets))
			.finally(() => (context.isLoading = false));
	}
};
</script>
