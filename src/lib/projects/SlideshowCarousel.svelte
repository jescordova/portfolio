<script>
    let { galapagos } = $props();
    let slideIndex = $state(1);

    function showSlide(n) {
        slideIndex = n;
        if (slideIndex > galapagos.length) slideIndex = 1;
        if (slideIndex < 1) slideIndex = galapagos.length;
    }

    function plusSlides(n) {
        showSlide(slideIndex + n);
    }

    function currentSlide(n) {
        showSlide(n)
    }

</script>

<div class="slideshow-container mx-auto max-w-screen-lg">
    <div class="relative">
        {#each galapagos as slide, index (slide.src)}
            <div class="slides fade" class:hidden={index + 1 !== slideIndex}>
                <div class="nbr-text absolute w-10 h-10 bg-(--info-5) text-white font-bold rounded-full flex justify-center items-center m-2 right-0">{index + 1} / {galapagos.length}</div>
                <img src={slide.src} alt={slide.caption} class="w-full" />
                <div class="text bg-(--info-5) w-full absolute p-3 left-0 bottom-0 text-white font-bold text-center">{slide.caption}</div>
            </div>
        {/each}
        <button onclick={()=> plusSlides(-1)} class="prev absolute bg-(--info-5) w-10 h-10 rounded-full cursor-pointer top-1/2 left-0 ml-2" aria-label="prev"><i class='bx bxs-chevron-left text-4xl text-white hover:text-(--primary)'></i></button>
        <button onclick={()=> plusSlides(1)} class="next absolute bg-(--info-5) w-10 h-10 rounded-full cursor-pointer top-1/2 right-0 mr-2" aria-label="next"><i class='bx bxs-chevron-right text-4xl text-white hover:text-(--primary)'></i></button>
    </div>
    <div class="text-center my-2">
        {#each galapagos as slide, index}
            <button 
                onclick={() => currentSlide(index + 1)}
                class="dot inline-block bg-(--info) hover:bg-(--primary) w-3 h-3 rounded-full mx-1 cursor-pointer" 
                class:bg-(--primary)={index + 1 === slideIndex}
                aria-label="dots"
            ></button>
        {/each}
    </div>
</div>

<style>
    .fade {
        animation: fade 1.5s;
    }

    @keyframes fade {
        from {
        opacity: 0.4;
        }
        to {
        opacity: 1;
        }
    }
</style>