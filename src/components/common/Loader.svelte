<div class="loader-wrap">
	<div class="loader"></div>
</div>

<style lang="scss">
	.loader-wrap {
		position: absolute;
		inset: 0;
		background-color: rgba(27, 24, 23, 0.6);
		z-index: 3;
	}
	.loader {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		height: 80px;
		aspect-ratio: 1;
		padding: 10px;
		border-radius: 50%;
		box-sizing: border-box;
		mask:
			conic-gradient(#000 0 0) content-box exclude,
			conic-gradient(#000 0 0);
		filter: blur(12px);
	}
	.loader:before {
		content: '';
		position: absolute;
		inset: 0;
		background: conic-gradient(#0000 35%, var(--Fill-Brand-default), #0000 65%);
		animation: l1 1.5s linear infinite;
	}
	@keyframes l1 {
		to {
			rotate: 1turn;
		}
	}
</style>
