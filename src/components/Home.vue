<template>
  <div id="home" class="container">
    <div class="row">
      <div class="col-6">
        <router-link to="/store">
          <i class="bi bi-shop"></i>
          <div class="text-home">
            STORE
          </div>
        </router-link>
      </div>
      <div class="col-6">
        <router-link to="/product">
          <i class="bi bi-box-seam-fill"></i>
          <div class="text-home">
            PRODUCT
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
  name: "Home",
  methods: {
    showModal () {
      this.$modal.show(testModal);
    }
  }
}
</script>

<style scoped>
#home {
  text-align: center;
}
#home .row {
  border: 1px solid #ccc;
  border-radius: 15px;
  padding: 200px 0px;
  background: #f9f9f9;
  color: black;
}
#home .row a {
  text-decoration: none;
  color: #333;
}
#home i {
  font-size: 120px;
}
#home .text-home {
  font-size: 40px;
}
</style>
