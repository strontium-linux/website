<template>
	<NuxtLayout>
		<div class="wrapper">
			<NuxtPage class="page" />
			<footer class="footer">
				<p>Made with 🩵 by (ing) Studios and Ethan Lee</p>
			</footer>
		</div>
	</NuxtLayout>
</template>

<style lang="css" scoped>
.wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100svw;
	min-height: 100svh;
}

.page {
	flex-grow: 1;
}

footer {
	background-color: var(--md-sys-color-surface-container);
	color: var(--md-sys-color-on-surface-container);
	padding: 16px;
	flex-shrink: 0;
	width: 100%;
	box-sizing: border-box;

	p {
		margin: 0;
	}
}
</style>
