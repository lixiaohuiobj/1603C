<template>
	<div class="detail">
		<div class="detail-header" @click="linkimg">
			<img :src="detailData.CoverPhoto">
			<p>{{detailData.pic_group_count}}张照片</p>
		</div>
		<div class="content">
			<div class="con-left">
				<p>{{detailData.market_attribute&&detailData.market_attribute.dealer_price}}</p>
				<h2>指导价 {{detailData.market_attribute&&detailData.market_attribute.official_refer_price}}</h2>
			</div>
			<div class="con-right">
				<p>{{detailData.BottomEntranceTitle}}</p>
			</div>
		</div>
		<div class="main">
			<div class="main-top">
				<div>
					<p v-for="(item,index) in year" :key="index" :class="index == ind?'active':''" @click="clickfn(item,index)">{{item}}</p>
				</div>
			</div>	
			<div class="main-bottom">
				<div v-for="(val,key,index) in bottomData" :key="index">
					<p>{{key}}</p>
					<div v-for="(item,index) in val">
						<h1>{{item.market_attribute&&item.market_attribute.year}}款 {{item.car_name}}</h1>
						<h2>{{item.horse_power}}马力{{item.gear_num}}档</h2>
						<h3><span>指导价 {{item.market_attribute.official_refer_price}}</span><time>{{item.market_attribute.dealer_price_min}}起</time></h3>
						<h4 @click="linkprice(item.car_id)">询问底价</h4>
					</div>
				</div>
			</div>
		</div>
		<div class="detail-footer">
			<p>询问底价</p>
			<h3>本地经销商为你报价</h3>
		</div>
	</div>
</template>

<script>
	import List from "@/components/list"
	import { mapState, mapActions } from "vuex";
	export default {
		name: 'Detail',
		data () {
			return {
				ind:0
			}
		},
		components: {

		},
		computed:{
			...mapState({
				detailData: (state) => state.detail.detailData,
				bottomData: (state) => state.detail.bottomData,
				year: (state) => state.detail.year
			})
		},
		methods:{
			...mapActions({
				getDetail:'detail/getDetail',
				tabList:"detail/tabList"
			}),
			clickfn(item,index){
				this.ind=index
				this.tabList(item)
			},
			linkimg(){
				this.$router.push({
		          	path:'/img',
		          	query: {
		            	serialID: this.$route.query.serialID
		          	}
		        });
			},
			linkprice(id){
				this.$router.push({
		          	path:'/Quotation',
		          	query: {
		            	serialID: id,
		            	carID:this.$route.query.serialID
		          	}
		        });
			}
		},
		mounted(){
			this.getDetail(this.$route.query.serialID)
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.detail{
		background:#f4f4f4;
		position: relative;
	}
	.detail-header{
		width:100%;
		height: 3.29rem;
		overflow: hidden;
		position: relative;
	}
	.detail-header img{
		position: absolute;
		width: 100%;
		top:50%;
		transform: translateY(-50%);
	}
	.detail-header p{
		background: rgba(0,0,0,.6);
		font-size: .24rem;
		border-radius: .2rem;
		z-index: 99;
		position: absolute;
		right: .3rem;
		color: #fff;
		bottom:.3rem;
		padding: 1px 2px;
	}
	.content{
		width: 100%;
		height: 1.5rem;
		padding: .26rem .2rem .3rem;
		display: flex;
		background: #fff;
	}
	.content div{
		height: .84rem;
		flex: 1;
	}
	.con-left p{
		font-size: .36rem;
		color: red;
	}
	.con-left h2{
		color: silver;
		font-size: .26rem;
		font-weight: 500;
	}
	.con-right{
		padding-top: 0.07rem;
		height: .7rem;
	}
	.con-right p{
		width: 100%;
		border-radius: 5px;
		text-align: center;
		line-height: .7rem;
		height: .7rem;
		background: #00afff;
		color: #fff;
		font-size: .36rem;
	}
	.main{
		margin-top: 5px;
		background: #fff;
		margin-bottom: 1rem;
	}
	.main-top{
		width: 100%;
		height:.92rem;
		display: flex;
	}
	.main-top div{
		display: flex;
	}
	.main-top p{
		width: 1.3rem;
		text-align: center;
		font-size: .32rem;

		line-height: .92rem;
	} 
	.main-top p.active{
		color:#3aacff; 
	}
	.main-bottom div div{
		padding:0 .2rem;
	}
	.main-bottom p {
		padding:0 .2rem;
		background: #f4f4f4;
		height: .6rem;
		line-height: .6rem;
		font-size: .24rem;
	}
	.main-bottom h1,.main-bottom h2,.main-bottom h3,.main-bottom h4{
		font-size: .3rem;
	}
	.main-bottom h1{
		line-height: .6rem;
		font-size: .3rem;
	}
	.main-bottom h2{
		font-size: .24rem;
		color: #bdbdbd;
	}
	.main-bottom h3{
		text-align: right;
		font-weight: normal;
		margin-bottom: .2rem;
	}
	.main-bottom h3 span{
		color: #818181;
		margin-right: .2rem;
		font-size: .24rem;
	}
	.main-bottom h3 time{
		color: #ff2336;
		font-size: .28rem;
	}
	.main-bottom h4{
		line-height: .8rem;
		border-top: 1px solid #ddd;
		font-size: .36rem;
		color: #00afff;
		text-align: center;
		font-weight: normal;
	}	
	.detail-footer{
		position: fixed;	
		font-size: .3rem;
		bottom: 0;
		width: 100%;
		height: 1rem;
		background: #3aacff;
		text-align: center;
	}
	.detail-footer p{
		font-size: .32rem;
		line-height: .5rem;
		color: #fff;
	} 
	.detail-footer h3{
		font-size: .24rem;
		line-height: .5rem;
		color: #fff;
	}
</style>
