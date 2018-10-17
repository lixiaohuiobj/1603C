<template>
  <div class="index-list" ref="makeList" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
    <div v-for="(item,index) in carList" :key="index" class="list-box">
      <h2 @click="getShow">{{item.GroupName}}</h2>  
      <dl v-for="(item2,index) in item.GroupList" @click="clickfn(item2.SerialID)">
        <dt><img :src="item2.Picture" alt=""></dt>
        <dd>
          <p>{{item2.AliasName}}</p>
          <h3>{{item2.DealerPrice}}</h3>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from "vuex";
  export default {
    name: 'Bottom',
    props:["carList"],
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted(){
    },
    methods:{
      ...mapActions({
        getShow:'index/getShow',
        getShow:"index/getShow"
      }),
      clickfn(id){
        this.$router.push({
          path:'/detail',
          query: {
            serialID: id
          }
        });
      },
      touchStart(e){
        this.start = e.touches[0];
      },
      touchMove(e){
        let touch = e.touches[0];
        let offset = touch.pageX - this.start.pageX;
        if (offset < 0){
          offset = 0;
        }
        this.offset = offset;
        this.$refs.makeList.style.transform = `translate3d(${offset}px,0,0)`;
        this.$refs.makeList.style.transition = `width`;
      },
      touchEnd(){
        this.$refs.makeList.style.transform = ``;
        this.$refs.makeList.style.transition = ``;
        if (this.offset >= window.innerWidth * 0.35){
          this.getShow();
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index-list{
    z-index: 99;
    width: 75%;
    height: 100%;
    top:0;
    right: 0;
    border-left: 1px solid #ddd;
    background: #fff;
    position: fixed;
    transform: translateX(100%);
    transition: all 1s;
    overflow: scroll;
  }
  .index-list.active{
    transform: translateX(0%);
  }
  .list-box{

  }
  .list-box h2{
    font-weight: normal;
    font-size: .28rem;
    height: .48rem;
    padding-left: 15px;
    box-sizing: border-box;
    color:#717171;
    background: #f2f2f2;
  }
  .list-box dl{
    display: flex;
    border-bottom: 1px solid #ddd;
    padding:10px;
  }
  .list-box dt{
    width: 1.8rem;
    height: 1.2rem;
  }
  .list-box img{
    width: 1.8rem;
    height: 1.2rem;
  }
  .list-box p {
    font-size: .34rem;
    color:#5f687a;
    margin-left: .1rem;
    line-height: .5rem;
  }
  .list-box h3{
    line-height: .7rem;
    font-size: .28rem;
    color: red;
    margin-left: .1rem;
  }
</style>
