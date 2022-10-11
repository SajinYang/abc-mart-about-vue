<template>
  <div id="contact" class="contact-container">
    <div class="contact">
      <h2 class="title">Contact us</h2>

      <div class="form-content">
        <!-- 聯絡表單 -->
        <form class="forms-group">
          <div class="form-item">
            <label class="form-item-title">姓名</label>
            <input type="text" name="name" placeholder="請輸入姓名" required />
          </div>
          <div class="form-item">
            <label class="form-item-title">電話</label>
            <input type="text" name="phone" placeholder="請輸入電話" required />
          </div>
          <div class="form-item">
            <label class="form-item-title">電子信箱</label>
            <input
              type="text"
              name="email"
              placeholder="請輸入電子信箱"
              required
            />
          </div>
          <div class="form-item">
            <label class="form-item-title">詢問內容</label>
            <textarea type="text" name="message" required></textarea>
          </div>
        </form>

        <!-- 按鈕 -->
        <div class="buttom-group">
          <button type="reset">清除重填</button>
          <button type="submit">確認送出</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-container {
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
  gap: 20px;
}

.title {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  &::after {
    content: "";
    position: absolute;
    width: 180px;
    height: 2px;
    bottom: -5px;
    left: calc(50% - 90px);
    background-color: #33579f;
  }
}

.form-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0.5rem 0;

  .forms-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
  }
}

.form-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.form-item-title {
  font-size: 1.2rem;
  color: white;
}

input {
  width: 300px;
  height: 30px;
  border: 1px solid #6a6a6a6b;
  border-radius: 5px;
  background: #ffffff;
}

textarea {
  width: 300px;
  height: 200px;
  padding: 0.5rem 0.75rem;
  border: 1px solid #6a6a6a6b;
  border-radius: 5px;
  background: #ffffff;
  resize: none;
}

.buttom-group {
  margin: 1.5rem 0;

  button {
    margin: 0 1.5rem;
    padding: 10px 25px;
    color: #ffffff;
    border-radius: 5px;

    &[type="reset"] {
      background-color: #afafaf;
    }

    &[type="submit"] {
      background-color: #051f33;
    }
  }
}
</style>