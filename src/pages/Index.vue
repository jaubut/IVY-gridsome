<template>
  <Layout>
    <div class="">
      <fullWidth link="location" class="full-width" title="Espace" description="Loue l'espace pour ta prochaine activité!" textcolor="black" imgsrc="img/studio/photo-loue-espace.jpg" logosrc="img/logo/lion.svg" />
      <div class="container-row">
        <fullWidth link="yoga" class="demi-width" title="Ivy Yoga" description="Viens yogater avec le proprio dans divers flow." sousdescription="En abonnement ou drop-in." textcolor="#FCDA1E" imgsrc="img/studio/photo-cours-dan.jpg" />
        <fullWidth link="evenements" class="demi-width" title="Événements" description="Vient à l'un de nos multiples ateliers, cours de yoga, etc." sousdescription="" textcolor="#FCDA1E" imgsrc="img/studio/photo-cours-dan.jpg" />
      </div>
    </div>
  </Layout>
</template>

<script>
import fullWidth from '~/components/fullWidthBloc.vue'

export default {
  components: {
    fullWidth
  },
  metaInfo: {
    title: 'Espace IVY'
  },
  data() {
    return {
    "title": 'Espace IVY'
    }
  }
}
</script>

<style>

</style>
