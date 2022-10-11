<template>
  <nav class="navbar">
    <a href="/" class="logo"><div>ABC團購形象網</div> </a>
    <input type="checkbox" id="toggler" v-model="checked" />
    <label for="toggler"
      ><img src="../assets/icons/menu-icon.svg" alt=""
    /></label>
    <div class="menu">
      <ul class="list">
        <li @click.stop.prevent="commetId('home')">
          <router-link to="" class="item item-last">
            <div class="item-title">home</div>
          </router-link>
        </li>
        <li @click.stop.prevent="commetId('about')">
          <router-link to="" class="item item-last">
            <div class="item-title">About</div>
          </router-link>
        </li>
        <li @click.stop.prevent="commetId('branch')">
          <router-link to="" class="item item-last">
            <div class="item-title">Branch</div>
          </router-link>
        </li>
        <li @click.stop.prevent="commetId('contact')">
          <router-link to="" class="item item-last">
            <div class="item-title">Contact</div>
          </router-link>
        </li>
      </ul>
    </div>
    <label for="toggler" class="drawer-overlay drawer-toggle"></label>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    commetId(id) {
      this.$emit("scroll-into-commet", {
        commetId: id,
      });
      this.checked = false;
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  height: 25px;
  width: 25px;
}

.navbar {
  position: fixed;
  z-index: 999;
  top: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: var(--nav-background);
  padding: 10px 30px;
  -webkit-box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
}

.logo {
  align-self: center;
  color: var(--brand-color);
  font-size: 24px;
  font-weight: 700;
}

.list {
  display: flex;
  align-items: center;
  gap: 25px;
}

.item {
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--brand-color);
}

#toggler,
.navbar label {
  display: none;
}

.drawer-overlay {
  display: none;
}

@media screen and (max-width: 576px) {
  .menu {
    width: 100%;
    max-height: 0;
    overflow: hidden;
  }

  .list {
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: var(--nav-background);
  }

  .item-last {
    width: 100px;

    .item-title {
      margin: 0 auto;
    }
  }

  .navbar label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
  }

  #toggler:checked ~ .menu {
    z-index: 50;
    max-height: 100%;
  }

  #toggler:checked ~ .drawer-overlay {
    position: fixed;
    z-index: 20;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    cursor: auto;
    // background-color: rgba(0, 0, 0, 0.2);
  }
}
</style>