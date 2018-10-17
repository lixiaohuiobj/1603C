<template>
	<div class="carType">
		<div class="main-top">
			<div>
				<p v-for="(item,index) in years" :key="index" :class="index == ind?'active':''" @click="clickfn(item,index)">{{item}}</p>
			</div>
		</div>	
		<div class="main-bottom">
			<div v-for="(val,key,index) in yearData" :key="index">
				<p>{{key}}</p>
				<div v-for="(item,index) in val" @click="addData(item.market_attribute.year,item.car_name)">
					<h1>{{item.market_attribute&&item.market_attribute.year}}款 {{item.car_name}}</h1>
					<h2>{{item.horse_power}}马力{{item.gear_num}}档</h2>
					<h3><span>指导价 {{item.market_attribute.official_refer_price}}</span><time>{{item.market_attribute.dealer_price_min}}起</time></h3>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState, mapActions } from "vuex";
	export default {
		name: 'Quotation',
		data () {
			return {
				ind:0
			}
		},
		computed:{
			...mapState({
				detailData: (state) => state.detail.detailData,
				yearData: (state) => state.detail.yearData,
				years: (state) => state.detail.years
			})
		},
		methods:{
			...mapActions({
				getDetail:'detail/getDetail',
				tabList:"detail/tabList",
				addText:"quotation/addText"
			}),
			clickfn(item,index){
				this.ind=index
				this.tabList(item)
			},
			addData(val1,val2){
				this.addText(val1+val2)
				window.history.go(-1)
			}
		},
		mounted(){
			this.getDetail(this.$route.query.carID)
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
