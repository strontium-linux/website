<script setup lang="ts">
const props = defineProps<{
	label: string;
	icon: string;
}>();
</script>

<template>
	<div class="feat-avtr">
		<m3e-avatar class="avatar">
			<Icon :name="props.icon" />
		</m3e-avatar>
		<p class="label">{{ props.label }}</p>
	</div>
</template>

<style lang="css" scoped>
.feat-avtr {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 32px;
}

.avatar {
	--m3e-avatar-font-size: 96px;
	--m3e-avatar-size: 192px;
}

.label {
	font-size: 40px;
	margin: 0;
	text-align: center;
}
</style>
