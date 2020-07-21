Vue.component('Services', {
    template: //html
    `
    <article class="services">
        <div class="curve">
            <div class="top" style="height: 150px; overflow: hidden;"><svg viewBox="0 0 500 150"
                    preserveAspectRatio="none" style="height: 100%; width: 100%;">
                    <path d="M-35.28,3.25 C196.66,79.23 288.65,88.12 543.17,-0.70 L500.00,0.00 L0.00,0.00 Z"
                        style="stroke: none; fill: #000;"></path>
                </svg></div>
            <div class="bottom" style="height: 150px; overflow: hidden;"><svg viewBox="0 0 500 150"
                    preserveAspectRatio="none" style="height: 100%; width: 100%;">
                    <path d="M-21.73,138.45 C182.56,90.08 312.91,68.38 511.00,141.40 L500.00,150.00 L0.00,150.00 Z"
                        style="stroke: none; fill: #000;"></path>
                </svg></div>
                <img v-for="i in 2" src="./assets/img/geometry/box-black.png" data-aos="fade-up-right" data-aos-anchor-placement="top-bottom" alt="Circles box black">
        </div>

        <div class="content my-auto">
            <div class="container my-5">
                <div class="row">
                    <div v-for="image in images" data-aos="zoom-in" data-aos-anchor-placement="top-center" :data-aos-delay="image.duration" class="col-md-4 col-sm-12 d-flex flex-column align-items-center">
                        <img class="mt-5" :src="'./assets/img/services/'+image.image+'.jpg'" :alt="image.alt">
                        <h3 class="text-center mt-4">{{ image.text }}</h3>
                    </div>
                </div>
            </div>

        </div>

    </article>

    `,
    data(){
        return {
            images: [
                { delay: 200, image: 'select', alt: 'Select food', text: 'Lorem, ipsum dolor.' },
                { delay: 400, image: 'chef', alt: 'Chef in the house', text: 'Lorem ipsum dolor sit.' },
                { delay: 600, image: 'delivery', alt: 'Fast delivery', text: 'Lorem ipsum dolor sit.' },
            ]
        }
    }
})