<script>
	export let data;
	import { onMount } from 'svelte';
	import { svelteTime } from 'svelte-time';

	onMount(() => {
		let cardTemplate = document.querySelector('#card-template');
		let cardContainer = document.querySelector('#card-container');

		data.snippets.forEach((snippet) => {
			const cardClone = cardTemplate.cloneNode(true);
			cardClone.removeAttribute('id');

			const cardTitle = cardClone.querySelector('.mdc-typography--headline6');
			cardTitle.textContent = snippet.heading;

			const cardLink = cardClone.querySelector('.mdc-typography--subtitle2 a');
			cardLink.href = snippet.link;

			const cardContent = cardClone.querySelector('.mdc-typography--body2');
			cardContent.innerHTML = snippet.content;

			cardContainer.appendChild(cardClone);
		});
	});

	import Card, { Content } from '@smui/card';

	let latest_date = data.publishedOn;
</script>

<p class="timestamp">
	Latest EOS Recap : Published <time use:svelteTime={{ relative: true, timestamp: latest_date }} />
</p>

<div class="card-container" id="card-container" />

<div class="card-display">
	<div class="card-template" id="card-template">
		<Card>
			<div style="padding: 1rem;">
				<h2 class="mdc-typography--headline6" style="margin: 0;">Title</h2>
				<h5 class="mdc-typography--subtitle2" style="margin: 0; color: #888;">
					<br />
					<a href="https://www.example.com" target="_blank" style="text-decoration: none;"
						>Click here to follow the conversation</a
					>
				</h5>
			</div>
			<Content class="mdc-typography--body2">text</Content>
		</Card>
	</div>
</div>

<style>
	.timestamp {
		text-align: center;
	}
	.card-display,
	#card-template {
		display: none;
	}

	.card-template {
		width: 40%;
		/* height: 60%; */
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
		transition: transform 0.3s ease;
		text-overflow: ellipsis;
	}

	.card-template:hover {
		transform: scale(1.05);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
	}

	#card-container {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
		align-items: start;
		justify-content: center;
		height: 100vh;
		overflow: auto;
	}
</style>
