<script>
    let name= "";
    let email= "";
    let message= "";

    const handleSubmit = () => {
        console.log("Nom:", name);
        console.log("email:", email);
        console.log("Message:", message);
        alert("Merci pour le message 🚀 (simulation, pas encore d'envoi réel).");
        name= "";
        email= "";
        message= "";
    }
</script>

<section class="py-16 max-w-2xl m-auto">
    <h1 class="text-4xl font-bold text-center mb-19">Contact</h1>
    <form on:submit|preventDefault={handleSubmit} class="space-y-6 bg-white shadow rounded-lg p-8">
        <div>
            <label for="" class="block font-medium mb-2">Nom</label>
            <input 
                type="text"
                bind:value={name}
                required
                class="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
        </div>
        <div>
            <label for="" class="block font-medium mb-2">E-mail</label>
            <input 
                type="email" 
                bind:value={email}
                required
                class="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
        </div>
        <div>
            <label for="" class="block font-medium mb-2">Message</label>
            <textarea 
                bind:value={message}
                rows="5"
                required
                class="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
        </div>
        <button
            type="submit"
            class="bg-blue-600 text-white px-6 py-1 rounded hover:bg-blue-700 transition cursor-pointer"
        >Envoyer</button>
    </form>
</section>