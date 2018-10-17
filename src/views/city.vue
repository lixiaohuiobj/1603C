<template>
	<div class="city">
		<div class="city-top">
			<p>自动定位</p>
			<h3>北京</h3>
		</div>
		<div class="city-bottom">
			<h2>省市</h2>
			<div class="city-bottom-box" v-for="(item,index) in cityList">
				<p @click="clickfn(index)">{{item.CityName}}</p>	
			</div>
		</div>
		<div class="citybox" v-show="onoff">
			<div class="box-content">
				<p v-for="(item,index) in cityTwoList" :key="index" @click="addCity(item.CityName,item.CityID)">{{item.CityName}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState, mapActions } from "vuex";
	export default {
		name: 'City',
		data () {
			return {
				ind:0,
				onoff:false
			}
		},
		computed:{
			...mapState({
				cityList: (state) => state.city.cityList,
				cityTwoList: (state) => state.city.cityTwoList
			})
		},
		methods:{
			...mapActions({
				getCity:"city/getCity",
				getSecondCity:"city/getSecondCity",
				addText:"quotation/addCityText",
				addId:"quotation/addId"
			}),
			clickfn(index){
				this.onoff=true
				this.getSecondCity(index)
			},
			addCity(data,id){
				this.onoff=false
				this.addText(data)
				this.addId(id)
				window.history.go(-1)
			}
		},
		mounted(){
			this.getCity()
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.city{
		width: 100%;
		height: 100%;
		position: relative;
	}
	.citybox{
		position: fixed;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.6);
		left: 0;
		top: 0;
	}
	.box-content{
		position: absolute;
		overflow: scroll;
		width: 70%;
		height: 100%;
		left: 30%;
		background: #fff;
	}
	.box-content p{
		padding-left: .3rem;
	    font-size: .28rem;
	    height: .8rem;
	    line-height: .8rem;
	    border-bottom: 1px solid #eee;
	    box-sizing: border-box;
	    margin-left: .1rem;
	}
	.city-top p{
		height: .4rem;
	    line-height: .4rem;
	    font-size: .24rem;
	    padding-left: .2rem;
	    background: #f4f4f4;
	}
	.city-top h3{
		font-weight: normal;
		padding-left: .4rem;
	    font-size: .28rem;
	    height: .8rem;
	    line-height: .8rem;
	    background: #fff;
	}
	.city-bottom h2{
		height: .4rem;
		font-weight: normal;
	    line-height: .4rem;
	    font-size: .24rem;
	    padding-left: .2rem;
	    background: #f4f4f4;
	}
	.city-bottom-box p{
		padding-left: .3rem;
	    font-size: .28rem;
	    height: .8rem;
	    line-height: .8rem;
	    border-bottom: 1px solid #eee;
	    box-sizing: border-box;
	    margin-left: .1rem;
	    position: relative;
	}
	.city-bottom-box p:after{
		content: "";
	    display: inline-block;
	    padding-top: .16rem;
	    padding-right: .16rem;
	    border-top: 1px solid #999;
	    border-right: 1px solid #999;
	    -webkit-transform: rotate(45deg);
	    transform: rotate(45deg);
	    position: absolute;
	    right: .35rem;
	    top: .3rem;
	}
</style>
