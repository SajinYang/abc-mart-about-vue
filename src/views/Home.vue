<template>
  <div class="home">
    <Navbar @scroll-into-commet="scrollIntoCommet" />

    <div class="main">
      <Carousel id="home" />
      <About id="about" />
      <Branch id="branch" />
      <Contact id="contact" />
    </div>

    <Footer />
    <div class="scrollbartop">
      <img
        @click="backTop"
        class="scrollbartop-icon"
        src="../assets/icons/chevron-up-solid.svg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Carousel from "../components/Carousel.vue";
import About from "../components/About.vue";
import Branch from "../components/Branch.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Navbar,
    Carousel,
    About,
    Branch,
    Contact,
    Footer,
  },
  data() {
    return {
      commentId: "",
    };
  },
  methods: {
    scrollIntoCommet(id) {
      this.commentId = id.commetId;
    },
    backTop() {
      document.getElementById("home").scrollIntoView({ behavior: "smooth" });
    },
  },
  watch: {
    commentId() {
      document
        .getElementById(this.commentId)
        .scrollIntoView({ behavior: "smooth" });
    }
  },
};
</script>

<style lang="scss" scoped>
.main {
  margin-top: 55px;
}

.scrollbartop {
  position: fixed;
  bottom: 15px;
  right: 15px;
  padding: 8px;
  background-color: #aac6db;
  border-radius: 5px;
  cursor: pointer;
}

.scrollbartop-icon {
  height: 35px;
  width: 35px;
}
</style>
