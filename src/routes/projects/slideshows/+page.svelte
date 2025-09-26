<script>
    import SlideshowCarousel from "$lib/projects/SlideshowCarousel.svelte";
    import SlideshowScroll from "$lib/projects/SlideshowScroll.svelte";
    import Navigation from "$lib/components/skeleton/Navigation.svelte";
    import { home } from '$lib/js/icons';
    import { galapagos, belgium } from "$lib/js/slides";

    const page = {
        name: "Slideshows",
        section: 'portfolio'
    }
</script>

<Navigation {home} {page} />

<div id="container" class="slideshow">
    <main>
        <h2>Slideshow ultra-modernes</h2>
        <section>
            <h3>Slideshow Carousel</h3>
            <SlideshowCarousel {galapagos} />
            <p>Slideshow Carousel avec SvelteKit, Tailwind CSS et JavaScript, personnalisé que inclue : </p>
            <ul>
                <li><strong>Script :</strong>
                    <ul>
                        <li>slides : Import du tableau contenant les images et les captions.</li>
                        <li>Fonctions pour naviguer entre slides: <code>(showSlide, plusSlide, currentSlide)</code> .</li>
                    </ul>
                </li>
                <li><strong>Template :</strong>
                    <ul>
                       <li>Utilisation de <code>#each</code> pour itérer sur les slides.</li>
                       <li>Utilisation de <code>class:hidden</code> pour cacher les slides non actifs.</li>
                       <li>Utilisation de <code>onclick</code> pour les boutons de navigations.</li>
                    </ul>
                </li>
                <li><strong>Style :</strong>
                    <ul>
                        <li>Utilisation de Tailwind CSS pour les styles.</li>
                        <li>Animation de <code>fade</code> avec une <code>cléframe</code>.</li>
                    </ul>
                </li>
                
            </ul>
        </section>   
        <section>
            <h3>Slideshow Carousel and Auto-Scroll</h3>
            <SlideshowScroll { belgium } />
            <ul>
                <li>On ajoute de <code>props</code> pour permettre à l'utilisateur de personaliser les images, les captions, et d'autres paramètres du slideshow.</li>
                <li>On ajoute une option function <code>(scroll)</code> pour faire défiler automatiquement les images.</li>
                <li>On utilise le <code>lazy loading</code> pour améliorer les performances des images.</li>
            </ul>
            <!-- < {slideBelgium} autoScroll={false} scrollInterval={2000}/> -->
        </section>   
    </main>
</div>