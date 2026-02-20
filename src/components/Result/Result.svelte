<script>
	import { onMount } from 'svelte';
	import { icons } from '$lib/assets/images/brands-logo';
	import { brandsData } from '$lib/questions';

	let aff = '';
	onMount(() => {
		const params = new URLSearchParams(window.location.search);
		aff = params.get('aff') || '';
		console.log('aff', aff);
	});
</script>

<h3 class="h1">Investment Matchmaker match Score</h3>
<ul class="brands-list">
	{#each brandsData as i, idx}
		<li>
			<span class="percent">{i.percent}%</span>
			<div class="img-wrap">
				<img src={icons[idx]} alt="" />
			</div>
			<a href={`${i.link}?aff=${aff}&afftrack=${aff}_${i.afftrack}`} class="brand-link button button-primary">
				Go to the site
			</a>
		</li>
	{/each}
</ul>

<style lang="scss">
	ul {
		list-style-type: none;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 40px;
	}
	.percent {
		font-size: 30px;
	}

	li {
		display: flex;
		flex-direction: column;
        align-items: center;
		gap: 32px;
	}

	.img-wrap {
		width: 150px;
		height: 150px;
		border-radius: 150px;
		background-color: var(--Text-Primary);
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 6px 16px rgba(27, 24, 23, 0.25);

		img {
			width: 85%;
		}
	}
</style>
