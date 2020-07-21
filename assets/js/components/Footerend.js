Vue.component('Footerend', {
    template: //html
    `
    <footer class="text-white py-5">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-12">
                    <h2>{{ title }}</h2>
                    <div class="row pt-5">
                        <div v-for="store in stores" class="col-sm-6">
                            <a :href="store.url">
                                <img :src="'./assets/img/store/'+store.image+'.png'" width="100%" class="rounded-pill mt-5" :alt="store.alt">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 mt-5">
                    <h4>{{ about }}</h4>
                    <p class="mt-4">{{ textAbout }}</p>
                </div>
            </div>
            <hr class="my-5">
            <div class="socials">
                <a v-for="network in socials" :href="network.url">
                    <img :src="'./assets/img/socials/'+network.name+'.svg'" :alt="network.alt">
                </a>
            </div>
        </div>
    </footer>
    `,
    data(){
        return {
            title: 'Pidetudelivery',
            stores: [
                { url: '#', image: 'app-store', alt: 'App store' },
                { url: '#', image: 'play-store', alt: 'Play store' },
            ],
            about: 'Acerca de Pidetudelivery',
            textAbout: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, ut officia. Perspiciatis tempora repudiandae quos unde molestias natus, maiores ipsa.',
            socials: [
                { url: '#', name: 'facebook', alt: 'Facebook' },
                { url: '#', name: 'instagram', alt: 'Instagram' },
                { url: '#', name: 'twitter', alt: 'Twitter' },
                { url: '#', name: 'whatsapp', alt: 'Whatsapp' },
            ]
        }
    }
})