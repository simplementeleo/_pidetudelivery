Vue.component('Downloadapp', {
    template: //html
    `
    <article class="download-app d-flex justify-content-center">
        <div class="bg-black"></div>
        <div class="container">
            <div class="row">
                <div class="col-sm-6"></div>
                <div class="col-sm-6 content d-flex flex-column justify-content-center text-white">
                    <h1>{{ title }}</h1>
                    <p class="mt-5">{{ text }}</p>
                    <div class="row">
                        <div v-for="button in buttons" class="col-sm-6">
                            <a :href="button.url">
                                <img class="mt-3" :src="'./assets/img/store/'+button.name+'.png'" :alt="button.alt">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
    `,
    data(){
        return {
            title: 'Descarga la App!',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nostrum blanditiis ullam ut voluptate atque sequi voluptatibus! Totam at nulla fugit non. Provident, libero.',
            buttons: [
                {url: '#', name: 'app-store', alt: 'App Store'},
                {url: '#', name: 'play-store', alt: 'Play Store'},
            ]
        }
    }
})