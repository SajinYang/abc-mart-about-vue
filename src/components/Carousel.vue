<template>
  <div>
    <transition-group tag="div" class="container" :name="transitionName">
      <div
        class="page"
        v-for="(img, index) of imgs"
        :key="index"
        v-show="index === show"
      >
        <img :src="img.src" />
      </div>
    </transition-group>
    <button class="carouse-button prev" @click="setShow(show - 1)">
      <img class="icon" src="../assets/icons/chevron-left-solid.svg" alt="" />
    </button>
    <div class="controls-visible-group">
      <button
        class="controls-visible point"
        v-for="num in imgs.length"
        :key="num - 1"
        @click="setShow(num - 1)"
      >
        <img
          v-if="show !== num - 1"
          class="icon"
          src="../assets/icons/minus-solid.svg"
          alt=""
        />
        <img
          v-else
          class="icon"
          src="../assets/icons/minus-solid-active.svg"
          alt=""
        />
      </button>
    </div>
    <button class="carouse-button next" @click="setShow(show + 1)">
      <img class="icon" src="../assets/icons/chevron-right-solid.svg" alt="" />
    </button>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
let timer;
const interval = 5000;
export default {
  data() {
    return {
      transitionName: "left-in",
      show: 0,
      imgs: [
        { src: require("../assets/img/01-1.jpg") },
        { src: require("../assets/img/01-2.jpg") },
        { src: require("../assets/img/06-1.jpg") },
        { src: require("../assets/img/09-1.jpg") },
        { src: require("../assets/img/10-1.jpg") },
      ],
    };
  },
  mounted() {
    timer = setInterval(this.nextShow, interval);
  },
  methods: {
    setShow(index) {
      this.show = index;
    },
    nextShow() {
      this.show++;
    },
  },
  watch: {
    show(nVal, oVal) {
      if (nVal < 0) {
        this.show = this.imgs.length - 1;
      } else if (nVal > this.imgs.length - 1) {
        this.show = 0;
      } else {
        if (oVal < 0) this.transitionName = "left-in";
        else if (oVal > this.imgs.length - 1) this.transitionName = "right-in";
        else this.transitionName = nVal > oVal ? "right-in" : "left-in";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  height: calc(100vh - 60px);
  margin: 0 auto;
  overflow: hidden;
}
.page {
  position: absolute;
  width: 100%;
  height: 100%;
}
.icon {
  height: 40px;
}

.carouse-button {
  position: absolute;
  z-index: 10;
  top: 50%;
  cursor: pointer;

  &.prev {
    left: 10px;
  }

  &.next {
    right: 10px;
  }
}

.controls-visible-group {
  position: absolute;
  display: flex;
  justify-content: center;
  z-index: 10;
  bottom: 10px;
  cursor: pointer;
  width: 100%;
}

.right-in-enter {
  left: 100%;
}
.right-in-enter-active,
.right-in-leave-active {
  transition: left 0.5s;
}
.right-in-enter-to,
.right-in-leave {
  left: 0%;
}
.right-in-leave-to {
  left: -100%;
}
.left-in-enter {
  left: -100%;
}
.left-in-enter-active,
.left-in-leave-active {
  transition: left 0.5s;
}
.left-in-enter-to,
.left-in-leave {
  left: 0%;
}
.left-in-leave-to {
  left: 100%;
}

@media (max-width: 576px) {
  .container {
    position: relative;
    height: calc(50vh - 60px);
  }

  .carouse-button {
    top: 25%;
  }

  .controls-visible-group {
    top: -5%;
  }

  .icon {
    height: 25px;
    width: 20px;
  }
}
</style>