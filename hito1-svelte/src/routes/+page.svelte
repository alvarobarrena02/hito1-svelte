<script>
	import CTA from '../components/CTA.svelte';

	function handleSignup() {
		// Aquí puedes agregar la lógica para manejar el registro de usuarios
		console.log("El usuario hizo clic en 'Regístrate ahora'");
	}
</script>

<svelte:head>
	<title>Inicio</title>
	<meta name="description" content="Inicio Svelte" />
</svelte:head>

<section class="bg-black">
	<CTA buttonText="Regístrate ahora" buttonColor="bg-blue-500" onClick={handleSignup} />
</section>

<style>

</style>