<template>
  <div class="layout">
    <header>
      <menuIvy />
    </header>
    <transition name="fade" appear>
      <main> <!-- a wrapper for slot is needed -->
        <slot /> <!-- the content -->
      </main>
    </transition>
    <footerIvy />
  </div>
</template>

<script>
import menuIvy from '~/components/menuIvy.vue'
import footerIvy from '~/components/footer.vue'

export default {
components: {
    menuIvy,
    footerIvy
  }
}
</script>

<static-query>
query {
  metadata {
    Espace IVY
  }
}
</static-query>

<style>
.fade-enter-active {
  transition: opacity .75s;
}

.fade-enter {
  opacity: 0;
}
</style>
