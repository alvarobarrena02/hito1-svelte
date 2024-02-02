<script>
    let rutina = {
        tipoEjercicio: "",
        nombreRutina: "",
        duracion: "",
        numeroEjercicios: 0,
    };

    const addRutina = async () => {
        try {
            const response = await fetch('http://localhost:3000/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({rutina}),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            console.log("Rutina añadida con éxito");
            resetForm('rutina');
        } catch (error) {
            console.error('Error al añadir rutina:', error);
        }
    };

    const resetForm = (tipo) => {
        if (tipo === 'rutina') {
            rutina = {tipoEjercicio: "", nombreRutina: "", duracion: "", numeroEjercicios: 0};
        }
    };
</script>

<main class="p-4">
    <section>
        <h1 class="text-2xl font-bold mb-4">Añadir Rutina</h1>
        <form on:submit|preventDefault={addRutina} class="space-y-4">
            <div>
                <label for="tipoEjercicio" class="block mb-2">Tipo de Ejercicio:</label>
                <select id="tipoEjercicio" bind:value={rutina.tipoEjercicio}
                        class="form-select mt-1 block w-full text-gray-700">
                    <option value="">Seleccionar</option>
                    <option value="fuerza">Fuerza</option>
                    <option value="cardio">Cardio</option>
                </select>
            </div>
            <div>
                <label for="nombreRutina" class="block mb-2">Nombre de Rutina:</label>
                <input id="nombreRutina" type="text" bind:value={rutina.nombreRutina}
                       class="form-input mt-1 block w-full text-gray-700"/>
            </div>
            <div>
                <label for="duracion" class="block mb-2">Duración:</label>
                <input id="duracion" type="text" bind:value={rutina.duracion}
                       class="form-input mt-1 block w-full text-gray-700"/>
            </div>
            <div>
                <label for="numeroEjercicios" class="block mb-2">Número de Ejercicios:</label>
                <input id="numeroEjercicios" type="number" bind:value={rutina.numeroEjercicios}
                       class="form-input mt-1 block w-full text-gray-700"/>
            </div>
            <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded">Añadir Rutina</button>
        </form>
    </section>
</main>
