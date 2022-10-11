<template>
  <div id="about" class="branch-container">
    <div class="about">
      <h2 class="title">Branch store</h2>
      <div class="store-group">
        <div class="store">
          <MapStore1 />
          <div class="description">汐止門市<br>新北市汐止區大同路二段999號<br>(近汐止國小)<br>tel：02-12345678</div>
        </div>
        <div class="store">
          <MapStore2 />
          <div class="description">七堵門市<br>基隆市七堵區東新街999號<br>(近基隆商工)<br>tel：02-12345678</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MapStore1 from "../components/MapStore1.vue";
import MapStore2 from "../components/MapStore2.vue";

export default {
  components: {
    MapStore1,
    MapStore2
  },
};
</script>

<style lang="scss" scoped>
.branch-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding: 60px auto;
  gap: 20px;
}

.title {
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 200px;
    height: 2px;
    bottom: -5px;
    left: calc(50% - 100px);
    background-color: #33579f;
  }
}

.store-group {
  display: flex;
}

.store {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid var(--brand-color);
  background-color: var(--shopping-cart-border);
  border-radius: 5px;
  margin: 5px 1rem;
  padding: 1rem;
}

.description {
  margin-top: 1.2rem;
  line-height: 2;
}

@media (max-width: 576px) {
  .branch-container {
    height: auto;
    padding: 2rem 0;
  }

  .store-group {
    flex-direction: column;
    gap: 1rem;
  }
}

</style>