<template>
  <div id="about" class="about-container">
    <div class="about">
      <h2 class="title">
        About
      </h2>
      <img class="about-img" src="../assets/img/building_onigiri_shop.png" alt="">
      <h3 class="describe">
        ABC團購主要服務門市附近的客戶群。<br>
顧客可以在網站選擇跟團商品，並填寫訂購者姓名、手機及取貨門市送出資料。<br>
當團購商品到門市時，賣方再以簡訊的方式通知顧客前來提貨。
      </h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: var(--brand-color);
}

.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding: 60px auto;
  gap: 30px;
}

.title {
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100px;
    height: 2px;
    bottom: -5px;
    left: calc(50% - 50px);
    background-color: #33579f;
  }
}

.title, .describe {
  color: white;
}

.about-img {
  height: 200px;
  width: 200px;
}

.describe {
  text-align: center;
}
</style>