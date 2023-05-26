<script>
	import { svelteTime } from 'svelte-time';
</script>

<div class="container">
	<div class="sidebar">
		<div class="title">
			<a href="/"><h1 style="display: inline-block;">EOS Recaps</h1></a>
			<p>
				Curated short pointers and links making it easier stay up to date on development within your
				area of interest. Basically short snippets with links which lead you to the full content, be
				it an article or any other text/video post.
			</p>

			<time
				use:svelteTime={{
					format: 'dddd · MMMM D, YYYY'
				}}
			/>
		</div>

		<div class="nav">
			<div id="latest"><a href="/latest">LATEST</a></div>
			<div id="search"><a href="/search">SEARCH</a></div>
			<div id="archive"><a href="/archive">ARCHIVE</a></div>
		</div>
	</div>

	<div class="slot">
		<slot />
	</div>

	<div class="footer">&copy #Recaps</div>
</div>

<style>
	.container {
		position: fixed;
	}

	.sidebar {
		display: flex;
		flex-direction: column;
	}

	.nav {
		display: flex;
		margin: 1rem;
		justify-content: center;
		align-items: center;
	}

	.nav a {
		display: inline;
		padding: 10px;
		text-decoration: none;
		font-weight: bold;
		border-bottom: 2px solid transparent;
		transition: border-color 0.2s ease-in-out;
	}

	.nav a:hover {
		border-bottom-color: #333;
	}

	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		text-align: center;
		padding: 10px;
	}
</style>
