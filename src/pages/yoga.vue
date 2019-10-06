<template>
  <Layout>
    <div>
      <fullWidth class="full-width" title="Espace" description="Loue l'espace pour ta prochaine activité!" textcolor="black" link="location" imgsrc="img/studio/photo-loue-espace.jpg" />
      <textBlock class="full-width" title="Yola" description="Loue l'espace pour ta prochaine activité!" textcolor="black" />
      <div class="container-row">
          <fullWidth class="demi-width" title="Espace" description="Loue l'espace pour ta prochaine activité!" textcolor="black" link="location" imgsrc="img/studio/photo-loue-espace.jpg" />
          <textBlock class="demi-width" title="Yola" description="Loue l'espace pour ta prochaine activité!" textcolor="black" />
      </div>
      <fullWidth class="full-width" title="Espace" description="Loue l'espace pour ta prochaine activité!" textcolor="black" link="location" imgsrc="img/studio/photo-loue-espace.jpg" />
    </div>
  </Layout>
</template>

<script>
import fullWidth from '~/components/fullWidthBloc.vue'
import textBlock from '~/components/text-block.vue'

export default {
  metaInfo: {
    title: 'Yoga'
  },
  components: {
      fullWidth,
      textBlock
  }
}
</script>
