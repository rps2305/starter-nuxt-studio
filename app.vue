<template>
  <div>
    <NuxtPage />
    <CookieControl locale="nl" />
  </div>
</template>
<script lang="ts" setup>
const {
  cookiesEnabled,
  cookiesEnabledIds,
  isConsentGiven,
  isModalActive,
  moduleOptions,
} = useCookieControl()

// example: react to a cookie being accepted
watch(
  () => cookiesEnabledIds.value,
  (current, previous) => {
    if (
      !previous?.includes('google-analytics') &&
      current?.includes('google-analytics')
    ) {
      // cookie with id `google-analytics` got added
      window.location.reload() // placeholder for your custom change handler
    }
  },
  { deep: true },
)
defineOgImageComponent('Nuxt', {
  headline: 'Greetings',
  title: 'Hello OG Image 👋',
  description: 'Look what at me using the Nuxt template',
}),

useSchemaOrg([
  defineWebPage({
    name: 'My Page'
  }),
  defineWebSite({
    name: 'My Site'
  })
])
</script>


