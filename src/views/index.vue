<template>
	<div class="index">
		<div ref="carList" class="bigbox">
			<div v-for='item,index in numState' :key='index' :id='item' class="index-box">
				<h2 :ref="item">{{item}}</h2>
				<div v-for="(v,i) in bandList" v-if="item==v.Spelling[0]" @click="getCar(v.MasterID)">
					<img :src="v.CoverPhoto" alt="">
					<p>{{v.Name}}</p>
				</div>
			</div>
		</div>
 		<div class="index-bottom" ref="letters" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
	      	<p v-for='item,index in numState' :key='index'>{{item}}</p>
	    </div>
		<List :class="isShowList?'active':''" :carList="carList"></List>
	</div>
</template>

<script>

	import List from "@/components/list"
	import { mapState, mapActions } from "vuex";
	export default {
		name: 'Index',
		data () {
			return {
				msg: 'Welcome to Your Vue.js App',
				indexdata :[]
			}
		},
		components: {
		    List
		},
		methods:{
			...mapActions({
				getBand: 'index/getBand',
				getMake: 'index/getMake',
				initState:'index/initState',
				getCar:'index/getCar',
				letters:'index/letters'
			}),
			touchStart(){
				//console.log("111")
			},
			touchMove(e){
				let index = Math.floor((e.touches[0].pageY - this.offsetTop)/this.letterHeight);
                if (index < 0){
                    index = 0;
                }else if (index > this.numState.length-1){
                    index = this.numState.length-1;
                }
                let letter = this.numState[index];
                let offsetTop = this.$refs[letter][0].offsetTop;
                this.$refs.carList.scrollTop = offsetTop;
			},
			touchEnd(){
				//console.log("333")
			}
		},
		computed:{
			...mapState({
				bandList: (state) => state.index.bandList,
				carList: (state) => state.index.makeList,
				numState:(state) => state.index.letters,
				brandId:(state) => state.index.brandId,
		    	carList: (state) => state.index.carList,
		    	isShowList:(state) => state.index.isShowList
			})
		},
		updated(){
			this.offsetTop = this.$refs.letters.getBoundingClientRect().top
			this.letterHeight = this.$refs.letters.children[0].getBoundingClientRect().height
		},
		mounted(){
			this.getBand();
			this.getMake();
			this.initState();
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.index{
	}
	.bigbox{
		height: 100%;
		overflow-y:scroll;
	}
	.index-bottom{
		right: 15px;
		width: 0.18px;
		background: red;
		position: fixed;
		height: 14rem;
		top: 50%;
		transform:translateY(-32%)
	}
	.index-bottom p {
		height: 0.4rem;
		line-height: 0.4rem;
		font-size: 0.26rem;
	}
	.index-box{

	}
	.index-box img{
		width:0.8rem;
		height: 0.8rem;
		margin: 0.1rem;
	}
	.index-box div{
		padding: 0 0.2rem;
		height: 1rem;
		border-bottom:1px solid #ccc;
		display: flex;
	}
	.index-box h2{
		font-size: 0.3rem;
		height: 0.4rem;
		padding-left: 0.3rem;
		background: #f4f4f4;
	}
	.index-box p {
		margin-left: 0.1rem;
		line-height: 1rem;
		font-size: 0.42rem;
		font-size: 0.3rem;
	}
	
</style>
