<template>
  <div id="profile">
    <div class="profile-image uk-grid-small uk-flex-middle" uk-grid>
      <div class="uk-width-auto">
          <img class="uk-border-circle" width="40" height="40" src="images/avatar.jpg">
      </div>
      <div class="uk-width-expand">
          <h3 class="uk-card-title uk-margin-remove-bottom">Title</h3>
          <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
}
</script>

<style scoped lang="scss">
#profile {}
</style>
