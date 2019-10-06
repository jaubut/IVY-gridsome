<template>
    <div class="container-block">
      <img class="photo-logo" :src="'/assets/static/src/assets/' + logosrc" alt="">
      <g-image immediate="true" fit="cover" :src="require('!!assets-loader!~/assets/' + imgsrc)" class="photo-full"/>
      <g-link :style="'color:' + textcolor +';'" class="infos-center" :to="'/' + link + '/'">
        <h1>{{ title }}</h1> 
        <h3>{{ description }} <br/> {{ sousdescription }}</h3>
      </g-link>
    </div>
</template>

<script>
export default {
   name: 'full-width',
  data () {
    return {
    }
  },
  props: {
    title: String, 
    imgsrc: String, 
    description: String,
    textcolor: String,
    sousdescription: String,
    link: String,
    logosrc: String,

  }
}
</script>

<style scoped>
.container-block {
  transition: all .2s ease-in-out;
}
.photo-full {
  grid-area: 1/1/3/3;
  display: flex;
  justify-content: center;
  align-self: center;
  width: 100%;
  height: auto;
  transition: all .2s ease-in-out;
}
.photo-logo {
  grid-area: 1/1/2/3;
  display: flex;
  align-self: center;
  height: 100px;
  width: auto;
  z-index: 1;
  margin: auto;
  transition: all .2s ease-in-out;
}
.infos-center {
  grid-area: 1/1/3/3;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: all .2s ease-in-out;
}
.infos-center h3 {
  padding: 0 2.5rem;
}
@media screen and (max-width: 600px) {
    .full-width {
      margin: 0 2rem 2rem 2rem;
    }
}
</style>
