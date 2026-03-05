<script lang="ts">
	import { Main } from '../../../components/Main';
	import '../../../lib/scss/styles-v1.scss';
	export let data;

	const { subpage } = data;
</script>

<div class="app app-{subpage}">
	<Main {subpage} />
</div>
