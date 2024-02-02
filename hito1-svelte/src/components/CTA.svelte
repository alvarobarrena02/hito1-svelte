<script>
    import cta from '$lib/images/cta.webp';

    export let buttonText = "Regístrate ahora";
    export let buttonColor = "bg-blue-500";
    export let onClick;
</script>

<div class="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
    <div class="flex justify-center items-center mb-7">
        <img src={cta} alt="Descripción de la imagen" />
    </div>
    <div class="max-w-3xl mx-auto md:flex md:items-center md:justify-between">
        <h2 class="text-3xl antialiased font-bold tracking-tight text-white sm:text-4xl">
            <span class="block">¿Estás listo para lograr</span>
            <span class="block">tu cambio físico?</span>
        </h2>

        <div class="mt-8 flex md:mt-0 md:ml-4">
            <button
                    class="btn btn-outline btn-warning font-bold antialiased py-3 px-8 border border-transparent rounded-md text-base text-white transition duration-500 ease-in-out transform hover:scale-105 {{buttonColor}}"
                    on:click={onClick}
            >
                {buttonText}
            </button>
        </div>
    </div>
</div>