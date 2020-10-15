<template>
  <div id="navigation">
    <nav
      class="navigation-bar uk-navbar-container uk-dark"
      uk-navbar>
      <div class="uk-dark uk-navbar-left uk-dark">
        <ul class="uk-navbar-nav -uk-dark">
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
            <div class="uk-navbar-dropdown uk-navbar-dropdown-width-2">
              <div
                class="uk-navbar-dropdown-grid uk-child-width-1-2"
                uk-grid>
                <div>
                  <ul class="uk-nav uk-navbar-dropdown-nav">
                    <li class="uk-active">
                      <a href="#">Frontend</a>
                    </li>
                    <li
                      v-for="(item, index) in languages"
                      :key="item.id"
                      :data-index="index">
                      <a href="#">
                        <img
                          :src="getImageUrl(item.value)"
                          alt=""
                          class="language-icon">
                        {{ item.name }}
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul class="uk-nav uk-navbar-dropdown-nav">
                    <li class="uk-active">
                      <a href="#">Backend</a>
                    </li>
                    <li
                      v-for="(item, index) in languages"
                      :key="item.id"
                      :data-index="index">
                      <a href="#">
                        <img
                          :src="getImageUrl(item.value)"
                          alt=""
                          class="language-icon">
                        {{ item.name }}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li class="uk-active"><a href="#">Frontend</a></li>
                        <li v-for="(item, index) in languages" :key="item.id" :data-index="index">
                          <a href="#">
                            <img :src="getImageUrl(item.value)" alt="" class="language-icon">
                            {{item.name}}
                          </a>
                        </li>
                    </ul>
                  </div>
                  <div class="uk-navbar-dropdown">
                     <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li class="uk-active"><a href="#">Frontend</a></li>
                        <li v-for="(item, index) in languages" :key="item.id" :data-index="index">
                          <a href="#">
                            <img :src="getImageUrl(item.value)" alt="" class="language-icon">
                            {{item.name}}
                          </a>
                        </li>
                    </ul>
                  </div> -->
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
    data() {
    return {
      languages: [{
        id: 1,
        name: 'CSS',
        value: 'css',
        about: 'Cascading Style Sheets',
      },{
        id: 2,
        name: 'HTML',
        value: 'html',
        about: 'Hyper Text Markup Language',
      },{
        id: 3,
        name: 'JavaScript',
        value: 'javascript',
        about: 'JavaScript',
      },
      {
        id: 4,
        name: 'Python',
        value: 'python',
        about: 'Python',
      },
      {
        id: 5,
        name: 'C#',
        value: 'csharp',
        about: 'C Sharp',
      },
      {
        id: 6,
        name: 'C',
        value: 'c',
        about: 'C',
      }]
    }
  },
    methods: {
    getImageUrl(value) {
      var url = require.context('@/assets/svg/', false, /\.svg$/)
      return url('./' + value + ".svg")
    },
  }
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