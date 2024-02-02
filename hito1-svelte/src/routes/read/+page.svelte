<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>


<script>
	// Define una variable para almacenar las rutinas
	let rutinas = [];

	// Función para cargar las rutinas desde el servidor
	const loadRutinas = async () => {
		try {
			const response = await fetch('http://localhost:3000/read'); // Cambia la URL según tu configuración
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const data = await response.json();
			rutinas = data;
		} catch (error) {
			console.error('Error al cargar rutinas:', error);
		}
	};

	// Llama a la función para cargar las rutinas cuando se carga la página
	loadRutinas();
</script>

<main class="p-4">
	<section>
		<h1 class="text-2xl font-bold mb-4">Rutinas</h1>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each rutinas as rutina (rutina.id)}
				<div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300">
					<img src="ruta-de-la-imagen.jpg" alt="Imagen de la rutina" class="w-full h-32 object-cover">
					<div class="p-4">
						<h2 class="text-xl font-bold mb-2">{rutina.nombreRutina}</h2>
						<p class="text-gray-600">Tipo de Ejercicio: {rutina.tipoEjercicio}</p>
						<p class="text-gray-600">Duración: {rutina.duracion}</p>
						<p class="text-gray-600">Número de Ejercicios: {rutina.numeroEjercicios}</p>
					</div>
				</div>
			{/each}
		</div>
	</section>
</main>