Vue.component('Cities', {
    template://html
    `
    <article class="city">
        <img v-for="image in images" :src="'./assets/img/geometry/'+image.image+'.png'" :alt="image.alt">
        <div class="bg-black"></div>
        <div class="content text-white">
            <div class="container pt-5">
                <div class="row">
                    <div class="col-sm-12">
                        <h1 data-aos="fade-up-right" data-aos-anchor-placement="">{{ title }}</h1>
                        <div class="row">
                            <h4 v-for="i in 6" data-aos="zoom-in" :data-aos-delay="i+100" class="col-md-4 col-sm-12 mt-5">Ciudad</h4>
                        </div>
                        <button data-aos="zoom-in" class="btn btn-more-city my-5 rounded-pill p-3">
                            <h4>{{ button }}</h4>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </article>
    `,
    data(){
        return {
            images: [
                {image: 'box', alt: 'Circles box'},
                {image: 'circle', alt: 'Lines circle'}
            ],
            title: 'Ciudades cerca de mí',
            button: 'Conoce todas las ciudades'
        }
    }
})
