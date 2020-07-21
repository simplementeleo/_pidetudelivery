Vue.component('Home', {
    template: //html
    `
    <header>
        <div class="bg-black"></div>
        <img v-for="img in images" data-aos="fade-up-right" data-aos-anchor-placement="top-bottom" :src="'./assets/img/geometry/'+img.name+'.png'" :alt="img.alt">
        <nav class="navbar navbar-light justify-content-center justify-content-md-end justify-content-sm-center">
            <a href="#" class="navbar-brand btn text-white btn-login m-3 px-5 py-2 rounded-pill" data-aos="fade-bottom-right" data-aos-anchor-placement="top-bottom">INICIA SESIÓN</a>
        </nav>
        <article class="d-flex flex-column justify-content-center align-items-center">
            <h1 class="text-white" data-aos="zoom-in" data-aos-anchor-placement="top-bottom" data-aos-duration="200">{{ title }}</h1>
            <input type="text" data-aos="zoom-in" data-aos-anchor-placement="top-bottom" data-aos-duration="500" class="form-control p-4 text-center rounded-pill" v-model="search" placeholder="Ingresa la dirección de la entrega">
            <button data-aos="zoom-in" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" class="btn btn-search rounded-pill px-5 mt-4 text-white">
               {{ button }}
            </button>
        </article>
    </header>
    `,
    data(){
        return {
            title: 'Pidetudelivery',
            button: 'Buscar comida',
            images: [ 
                {name: 'box', alt: 'Circles box'},
                {name: 'circle', alt: 'Lines circle'},
                {name: 'plus', alt: 'Plus'}
            ],
            // Value input search
            search: ''
        }
    }
})