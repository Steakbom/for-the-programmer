<template>
  <div id="navigation">
    <nav class="navigation-bar uk-navbar-container" uk-navbar>
        <div class="uk-navbar-left">
            <ul class="uk-navbar-nav">
              <li>
                  <router-link
                   :to="{name: 'Home'}">
                     <div>Home</div>
                  </router-link>
              </li>
              <li>
                  <router-link
                  :to="{name: 'Languages'}">
                    <div>Languages</div>
                  </router-link>
              </li>
              <li>
                  <router-link
                  :to="{name: 'About'}">
                    <div>About</div>
                  </router-link>
              </li>
          </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
}
</script>

<style scoped lang="scss">
#navigation {
    position: sticky;
    z-index: 10;
}
.navigation-bar {
  padding: 0 20px;
}
.profile {
  position: relative;
  float: right;
}
</style>