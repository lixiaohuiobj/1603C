<template>
	<div class="Quotation">
		<div class="tation-top">
			<p>可像多个商家咨询最低价，商家及时回复</p>
		</div>
		<div class="tation-middle">
			<dl class="middle-car" @click="linkCarType">
				<dt><img :src="priceList.details&&priceList.details.serial.Picture" alt=""></dt>
				<dd>
					<p>{{priceList.details&&priceList.details.serial.AliasName}}</p>
					<h3>{{fontText?fontText:priceList.details&&priceList.details.market_attribute.year}}款 {{fontText2?fontText2:priceList.details&&priceList.details.car_name}}</h3>
				</dd>
			</dl>
			<div class="middle-content">
				<p>个人信息</p>
				<ul>
					<li><span>姓名</span><input type="text" placeholder="输入你的真实中文姓名"></li>
					<li><span>手机</span><input type="text" placeholder="输入你的真实手机号码"></li>
					<li><span>城市</span><time @click="linkCity">{{text?text:"北京" }}</time></li>
				</ul>
			</div>
			<div class="middle-btn">
				<button>询最低价</button>
			</div>
			<div class="middle-main">
				<p>选择报价经销商</p>
				<ul>
					<li v-for="(item,index) in addressList" :class="item.onoff?'active':''" :key="index" @click="addclassfn(index)">
						<h2><span>{{item.dealerShortName}}</span><time>{{Number.parseInt(item.promotePrice)}}.万</time></h2>
						<h3><span>{{item.address}}</span><time>{{item.saleRange}}</time></h3>
					</li>	
				</ul>
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
				priceList: (state) => state.quotation.priceList,
				addressList: (state) => state.quotation.addressList,
				fontText: (state) => state.quotation.fontText,
				fontText2: (state) => state.quotation.fontText2,
				text: (state) => state.quotation.text
			})
		},
		methods:{
			...mapActions({
				getPrice:"quotation/getPrice",
				upAddress:"quotation/upAddress"
			}),
			addclassfn(ind){
				var obj = this.addressList[ind];
				this.$set(this.addressList,ind,{...obj,onoff:!obj.onoff});
			},
			linkCarType(){
				this.$router.push({
		          	path:'/carType',
		          	query: {
		            	carID:this.$route.query.carID
		          	}
		        });
			},
			linkCity(){
				this.$router.push({
		          	path:'/city'
		        });
			}
		},
		mounted(){
			this.getPrice(this.$route.query.serialID)
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.Quotation{
		width: 100%;
		height: 100%;
	}
	.tation-top{
		width:100%;
		height: .6rem;
		background: #79cd92;
	}
	.tation-top p{
		font-size: .28rem;
		color: #fff;
		text-align: center;
		line-height: .6rem;
	}
	.middle-car{
		width: 100%;
		padding: .32rem .18rem .24rem;
		height: 2rem;
		position: relative;
	}
	.middle-car:after{
		content: "";
	    display: inline-block;
	    padding-top: .16rem;
	    padding-right: .16rem;
	    border-top: 2px solid #ccc;
	    border-right: 2px solid #ccc;
	    -webkit-transform: rotate(45deg);
	    transform: rotate(45deg);
	    position: absolute;
	    right: .26rem;
	    top: .9rem;
	}
	.middle-car img{
		width: 2.3rem;
	    height: 1.41rem;
	    border: 1px solid #eee;
	    box-sizing: border-box;
	    border-radius: 5px;
	}
	.middle-car{
		display: flex;
	} 
	.middle-car dd{
		margin-left: .2rem;
    	width: 4.3rem;
	}
	.middle-car dd p{
		font-size: .36rem;
    	line-height: 1;
    	font-weight: bold;
	}
	.middle-car dd h3{
		margin-top: .26rem;
	    font-size: .32rem;
	    line-height: 1.2;
	    color: #333;
    	font-weight: normal;
	}
	.middle-content{
		width: 100%;
		height: 3.14rem;
		background: #eee;
	}
	.middle-content p{
		height: .5rem;
    	line-height: .5rem;
    	color: #666;
    	font-size: .24rem;
    	padding: 0 .2rem;
	}
	.middle-content ul{
		background: #fff;
	}
	.middle-content ul li{
		font-size: .32rem;
	    height: .88rem;
	    line-height: .88rem;
	    border-bottom: 1px solid #ddd;
	    box-sizing: border-box;
	    color: #000;
	    display: flex;
	} 
	.middle-content li span{
		font-size: .32rem;
	    height: .88rem;
	    line-height: .88rem;
	    box-sizing: border-box;
	    color: #000;
	}
	.middle-content li input{
		font-size: .32rem;
	    padding-right: .2rem;
	    width: 88%;
	    text-align: right;
	    box-sizing: border-box;
	    color: #555;
	    border: none;
	    outline: none;
	}
	.middle-content li time{
	    width: 88%;
	    color: #555;
	    text-align: right;
	    box-sizing: border-box;
	}
	.middle-content li time:after{
		content: "";
	    display: inline-block;
	    padding-top: .16rem;
	    padding-right: .16rem;
	    border-top: 1px solid silver;
	    border-right: 1px solid silver;
	    -webkit-transform: rotate(45deg);
	    transform: rotate(45deg);
	}
	.middle-btn{
		background: #fff;
	    text-align: center;
	    padding-bottom: .28rem;
	}
	.middle-btn button{
		outline: none;
		border: none;
		font-size: .32rem;
	    color: #fff;
	    width: 80%;
	    background: #3aacff;
	    height: .7rem;
	    border-radius: .1rem;
	}
	.middle-main p{
		height: .5rem;
    	line-height: .5rem;
    	padding: 0 .2rem;
    	box-sizing: border-box;
	    font-size: .24rem;
	    color: #666;
	    background: #eee;
	}
	.middle-main ul{
		width: 100%;
	}
	.middle-main ul li{
		width: 94%;
		position: relative;
	    padding: .26rem 0 .26rem .54rem;
	    border-bottom: 1px solid #eee;
	    box-sizing: border-box;
	    height: 1.65rem;
	    font-size: .3rem;
	}
	.middle-main ul li:before{
		content: "√";
		color: #fff;
	    display: inline-block;
	    width: .32rem;
	    height: .32rem;
	    text-align: center;
	    line-height: .32rem;
	    border-radius: 50%;
	    border: 2px solid #ccc;
	    box-sizing: border-box;
	    position: absolute;
	    left: .05rem;
	    top: 50%;
	    -webkit-transform: translate3d(0,-50%,0);
	    transform: translate3d(0,-50%,0);
	} 
	.middle-main ul li.active:before {
	    background: #3aacff;
	    border: none;
	}
	.middle-main h2,.middle-main h3{
		display: flex;
		justify-content: space-between;
	}
	.middle-main h2 span, .middle-main h2 time{
		font-size: .3rem;
	}
	.middle-main h3{
		font-weight: normal;
		color: #ccc;
	}
	.middle-main h3 span{
		width: 4.6rem;
	}
	.middle-main h3 span, .middle-main h3 time{
		font-size: .24rem;
	}
</style>
