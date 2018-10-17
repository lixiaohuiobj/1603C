const state = {
	priceList:[],
	addressList:[],
	fontText:'',
	fontText2:'',
	text:"",
	id:''
};
import {
	getPriceList,
	getCityIdList
} from '@/api/index.js';

const mutations = {	
	updateList(state,payload){
		state.priceList = payload;
		payload.list.map((item,index)=>{
			item.onoff=false
		})
		state.addressList = payload.list
	},
	updateAddress(state,payload){
		state.addressList.map((item,index)=>{
			if(index==payload){
				item.onoff = !item.onoff
			}
		})	
	},
	updateText(state,payload){
		var data1 = payload.slice(0,4);
		var data2 = payload.slice(4)
		state.fontText = data1
		state.fontText2 = data2
	},
	updateCityText(state,payload){
		state.text=payload
	},
	updateAddList(state,payload){
		console.log(payload)
		state.addressList = payload.list
	}
};

const actions = {	
	getPrice:({commit},val)=>{
		getPriceList(val).then(res=>{
			commit("updateList",res.data)
		})
	},
	upAddress:({commit},val)=>{
		commit("updateAddress",val)
	},
	addText:({commit},val)=>{
		commit("updateText",val)
	},
	addCityText:({commit,state},val)=>{
		commit("updateCityText",val)
	},
	addId:({commit,state},val)=>{
		getCityIdList(val).then(res=>{
			commit("updateAddList",res.data)
		})
	}
};

const getters = {

};

export default {
	namespaced: true,
	state,
	mutations,
	actions
};