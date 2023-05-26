<script>
    import { onMount } from 'svelte';
    import { notifyAction } from "svelte-legos";


    let href = ''; // Reactive variable to hold href value
  
    onMount(() => {
      // Function to detect if user is on a mobile device
      function isMobileDevice() {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1) || (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
      }

      // Set href based on device type
      if (isMobileDevice()) {
        href = 'https://mob.eos.recaps.site/';
        console.log('Mobile device detected. Link set to website optimized for mobile');
      } else {
        href = 'http://localhost:5173/latest';
        console.log('Desktop device detected. Link set to website optimized for desktop');
      }
    });
  </script>

<div class="container">
	<h1 class="title">The Recaps</h1>

	<div class="description">
		<article class="intro">
			In today's era of information overload, staying updated with the most relevant and valuable
			information in specific areas of interest can seem nearly impossible.
		</article>
		<img class="image" src="/Recap.png" alt="Recaps" />
        <article class="intro">
			Addressing this problem is The Recaps, a go-to hub for the latest and most important updates without the need to sift through a multitude of sources.
		</article>
	</div>
	<div class="links">
		<a class="link" href={href}>Go to EOS Recaps</a>
	</div>
</div>

<style>
	.description {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.intro {
		width: 30%;
	}

	.container * {
		padding: 1rem;
	}
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}

	.title {
		font-size: 48px;
		font-weight: bold;
		margin-bottom: 30px;
	}

	.links {
		display: flex;
		gap: 20px;
		margin-bottom: 30px;
	}

	.link {
		display: inline-block;
		padding: 10px 20px;
		font-size: 18px;
		font-weight: bold;
		text-decoration: none;
		border-radius: 5px;
		transition: background-color 0.3s ease;
	}

	.link:hover {
		background-color: #f4f4f4;
	}

	.image {
		max-width: 100%;
		height: auto;
		border-radius: 10px;
		box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
	}

	@media screen and (width<=700px) {
		.description {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

		.intro {
			width: 80%;
		}
		.container * {
			padding: 0.5rem;
		}
	}
</style>
