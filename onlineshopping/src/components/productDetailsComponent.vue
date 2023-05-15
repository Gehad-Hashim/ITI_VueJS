<template>
  <div>
  <h1>specific product</h1>
  <template>{{loadProductDetails($route.params.id)}}</template>
  <p class="text-start"><span>ID: </span>{{product_id}}</p>
  <p class="text-center fw-bold"><span>Title: </span>{{product_title}}</p>
  <img :src="product_image"/>
  <p><span>ISBN: </span>{{product_isbn}}</p>
  <p><span>No of Pages :</span> {{product_pageCount}}</p>
  <p><span>Status: </span>{{product_status}}</p>
  </div>
</template>

<script>
export default {
data:()=>({
product_id:'',
product_title:'',
product_isbn:'',
product_pageCount:'',
product_image:'',
product_status:''
}),
methods:{
 async loadProductDetails(_id){
  let res=await fetch(`http://localhost:4000/products/${_id}`);
  let jsversion=await res.json();
  this.product_id=jsversion.id
  this.product_title=jsversion.title
  this.product_isbn=jsversion.isbn
  this.product_status=jsversion.status
  this.product_image=jsversion.image
  this.product_pageCount=jsversion.pageCount
  }
}
}
</script>

<style>
span{
  color:cadetblue;
  font-weight: bold;
  
}
</style>