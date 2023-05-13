<template>
  <div class="col-12 text-light my-2" style="background-color:#32bfb8;">
    <nav class="navbar navbar-expand-lg px-2">
      <a
        class="navbar-brand fs-1 me-5 fw-bold"
        style=" font-family: 'Dancing Script', cursive;"
        href="#"
      > 
       online<span class="text-light">&hearts;</span>shop
      </a>
      <div class="collapse navbar-collapse">
        <div class="navbar-nav">
          <a class="nav-item nav-link fs-4 me-4 rounded-5">
            <router-link to="/">Home</router-link>
          </a>
          <a class="nav-item nav-link fs-4 me-4 rounded-5">
            <router-link to="/">products</router-link>
          </a>
          <a class="nav-item nav-link fs-4 me-5 rounded-5">
            <router-link to="/cart">show cart</router-link>
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav-item:hover {
  background-color: white;
}
</style>