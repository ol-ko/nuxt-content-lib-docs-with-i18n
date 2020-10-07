<template>
  <section>
    <h1>{{$t('welcome')}}</h1>
    <article>
      <nuxt-content :document="page"></nuxt-content>
    </article>
  </section>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const page = await $content(params.pathMatch).fetch()
    return { page };
  }
}
</script>
