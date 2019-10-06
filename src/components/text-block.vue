<template>
    <div>
      <div :style="'color:' + textcolor +';'" class="infos-center">
        <h1>{{ title }}</h1> 
        <h3>{{ description }} <br/> {{ sousdescription }}</h3>
      </div>
    </div>
</template>

<script>
export default {
   name: 'text-block',
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
    link: String
  }
}
</script>

<style scoped>
.infos-center {
  grid-area: 1/1/3/3;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
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
