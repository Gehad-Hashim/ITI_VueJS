<template>
  <div class="row  justify-content-center">
    <div v-for="product in products" class="card border col-3 m-2" :key="product.id">
      <div class="card-header">
        <h5><b>title:</b> {{product.title}}</h5>
      </div>
      <div>
        <img :src="product.image"/>
        <p><b>status:</b>{{product.status}}</p>
        <p><b>price:</b>{{product.price}}</p>
      </div>
    
      <div class="card-footer">
        <button class="btn btn-warning">add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    products:[]
  }),
  async created(){
  let resp=await fetch("http://localhost:4000/products");
  this.products=await resp.json();
  }
  ,methods:{
  }
};
</script>

<style>
</style>