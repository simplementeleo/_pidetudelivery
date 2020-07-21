Vue.component('Home', {
    template: //html
    `
    <header>
        <div class="bg-black"></div>
        <img v-for="img in images" :src="'./assets/img/geometry/'+img.name+'.png'" :alt="img.alt">
        <nav class="navbar navbar-light justify-content-end">
            <a href="#" class="navbar-brand btn text-white btn-login m-3 px-5 py-2 rounded-pill">INICIA SESIÓN</a>
        </nav>
        <article class="d-flex flex-column justify-content-center align-items-center">
            <h1 class="text-white">Pidetudelivery</h1>
            <input type="text" class="form-control p-4 text-center rounded-pill" placeholder="Ingresa la dirección de la entrega">
            <button class="btn btn-search rounded-pill px-5 mt-4 text-white">
                Buscar comida
            </button>
        </article>
    </header>
    `,
    data(){
        return {
            images: [ 
                {name: 'box', alt: 'Circles box'},
                {name: 'circle', alt: 'Lines circle'},
                {name: 'plus', alt: 'Plus'}
            ]
        }
    }
})