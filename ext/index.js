const ImgBlurVueApp = {
  data() {
     let srcName = new URLSearchParams(window.location.search).get('src') || '';
     //    /src/IMG_20210331_155202.jpg
     if (!srcName) {
       srcName = 'IMG_20210331_155202.jpg'
     }
      // this.imgSource = '/src/' + srcName;
    return {
      imgSource: '/src/' + srcName
      // images: [
      //   { id: 1, class: 'image image_main', alt:'image_main'},
      //   { id: 2, class: 'image image_blur left', alt:'image_blur-left'},
      //   { id: 3, class: 'image image_blur right',alt:'image_blur-right' }
      // ]
    }
  },
  methods:{
    clicked(event){
      //document.getElementsByClassName('image_main')[0].getBoundingClientRect();

      let rect = event.currentTarget.getBoundingClientRect();
      document.body.style.setProperty('--img-margin', -Math.round(rect.width/2) + 'px');
    }
  },
  // template: '<img class="image image_main" :src="imgSource" alt="main" v-on:click="clicked"/>',

  // mounted() {
  //   this.$nextTick(()=>{
  //     debugger;
  //   });
  // },
  // updated(){
  //   debugger;
  //    document.getElementsByClassName('image_main')[0].getBoundingClientRect();
  // },

}
const app = Vue.createApp(ImgBlurVueApp);
// app.component('image-comp', {
//   props: ['imgSource', 'class', 'alt'],
//   template: `<img class="{{class}}" src="{{ imgSource }}" alt="{{alt}}"/>`
// })
// app.component('image-comp', {
//   props: ['imgSource', 'title'],
//   template: `<img class="image image_blur left" src="{{ imgSource }}" alt="image_blur"/>`
// })
app.mount('#vue-start')
