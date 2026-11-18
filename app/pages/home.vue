<script setup lang="ts">
useSeoMeta({
	title: 'Strontium Home',
});
</script>

<template>
	<div class="index-wrapper">
		<div class="hero">
			<div class="hero-left">
				<h1 class="hero-title">
					The Linux Distro
					<span style="color: var(--md-sys-color-on-surface)">built for</span> Smart Home
					Devices
				</h1>
				<m3e-button
					variant="filled"
					size="large"
					href="https://strontium-builds.ingstudios.dev/latest/strontium-home.iso"
					target="_blank"
				>
					<!-- eslint-disable-next-line vue/no-deprecated-slot-attribute -->
					<Icon slot="icon" name="material-symbols:download-rounded" />
					Download ISO
				</m3e-button>
				<m3e-button
					variant="text"
					size="large"
					href="https://github.com/strontium-linux/core"
					target="_blank"
				>
					<!-- eslint-disable-next-line vue/no-deprecated-slot-attribute -->
					<Icon slot="icon" name="mdi:github" />
					GitHub repository
				</m3e-button>
			</div>
			<NuxtImg src="/images/home.webp" class="hero-img" />
		</div>
		<div class="hero-mobile">
			<h1 class="hero-title">
				The Linux Distro
				<span style="color: var(--md-sys-color-on-surface)">built for</span> Smart Home
				Devices
			</h1>
			<m3e-button
				variant="filled"
				size="large"
				href="https://strontium-builds.ingstudios.dev/latest/strontium-home.iso"
				target="_blank"
			>
				<!-- eslint-disable-next-line vue/no-deprecated-slot-attribute -->
				<Icon slot="icon" name="material-symbols:download-rounded" />
				Download ISO
			</m3e-button>
			<m3e-button
				variant="text"
				size="large"
				href="https://github.com/strontium-linux/core"
				target="_blank"
			>
				<!-- eslint-disable-next-line vue/no-deprecated-slot-attribute -->
				<Icon slot="icon" name="mdi:github" />
				GitHub repository
			</m3e-button>
		</div>
		<div class="features-section">
			<FeatureAvatar label="Secure" icon="material-symbols:lock-open-rounded" />
			<FeatureAvatar label="Beautiful" icon="material-symbols:palette-rounded" />
			<FeatureAvatar label="Fast" icon="material-symbols:bolt-rounded" />
			<FeatureAvatar label="FOSS" icon="material-symbols:folder-code-rounded" />
			<FeatureAvatar label="Flutter" icon="material-symbols:flutter-rounded" />
		</div>
		<m3e-divider />
		<div class="features-para">
			<NuxtImg src="/images/lyrics.webp" class="feat-img" />
			<p>
				Strontium Home ships with the Strontianite Shell, a custom shell written in Flutter
				tailored for small screens.
			</p>
			<NuxtImg src="/images/media.webp" class="feat-img" />
			<p>
				Strontianite comes with everything a smart home shell would need, including a media
				player, music client, alarms, and an app store.
			</p>
			<NuxtImg src="/images/market.webp" class="feat-img" />
			<p>
				It even comes with a built-in Flatpak frontend to run any Linux app on your smart
				clock.
			</p>
			<NuxtImg src="/images/launchpad.webp" class="feat-img" />
			<p>All your favourite Linux apps running on one smart home device.</p>
			<NuxtImg src="/images/customization.webp" class="feat-img" />
			<p>
				Strontianite features dynamic Material 3 Expressive themeing for all your
				wallpapers.
			</p>
		</div>
	</div>
</template>

<style lang="css" scoped>
.index-wrapper {
	width: 100svw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	box-sizing: border-box;
	overflow-y: auto;
	box-sizing: border-box;
}

.hero {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 32px;
	box-sizing: border-box;
	background-color: var(--md-sys-color-primary-container);
	color: var(--md-sys-color-on-primary-container);
}

.hero-mobile {
	background-color: var(--md-sys-color-primary-container);
	color: var(--md-sys-color-on-primary-container);
	display: none;
}

.features-section {
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: start;
	justify-content: center;
	gap: 64px;
	background-color: var(--md-sys-color-surface);
	color: var(--md-sys-color-on-surface);
	padding: 32px;
	box-sizing: border-box;
}

.hero-title {
	font-size: 80px;
	font-weight: 600;
	padding: 16px;
	box-sizing: border-box;
	margin: 0;
}

.hero-img {
	border-radius: 32px;
}

.section-title {
	font-size: 40px;
	color: var(--md-sys-color-primary);
}

.hero-left {
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: center;
	gap: 16px;
}

.features-para {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: start;
	padding: 32px;
	box-sizing: border-box;
	gap: 16px;

	p {
		font-size: 32px;
	}
}

.feat-img {
	width: 100%;
	border-radius: 32px;
}

@media (max-width: 768px) {
	.hero {
		display: none;
	}

	.hero-mobile {
		display: flex;
		flex-direction: column;
		gap: 16px;
		padding: 16px;
		box-sizing: border-box;
	}

	.features-section {
		display: none;
	}

	.features-para {
		padding: 16px;
	}
}
</style>
