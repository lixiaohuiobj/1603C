const state = {
	detailData:[],
	bottomData:[],
	yearData:[],
	year:["全部"],
	years:[],
	num:0,
	text:""
};
import {
	getDetailList
} from '@/api/index.js';

import {
	mergeCar,
	sortCar,
	filter
}from '@/utils/index.js'

const mutations = {
	updateData(state,payload){
		state.detailData=payload
		state.bottomData = mergeCar(sortCar(payload.list))
		if(state.num<1){
			let yearArr = [];
			let newArr = []
			let list = mergeCar(sortCar(payload.list))
			for(let attr in list){
				list[attr].map((item,index)=>{
					yearArr.push(item.market_attribute.year)
				})
			} 
			yearArr.map((item,index)=>{
				if(newArr.indexOf(item)==-1){
					newArr.push(item)
				}
			})
			state.years = newArr
			newArr = state.year.concat(newArr)
			state.year=newArr;
			state.num=state.num+1;
			state.yearData=mergeCar(sortCar(filter(state.years[0],state.detailData.list)))
		}
	},
	updateList(state,payload){
		if(!isNaN(payload)){
			state.bottomData = mergeCar(sortCar(filter(payload,state.detailData.list)))
			state.yearData=mergeCar(sortCar(filter(payload,state.detailData.list)))
		}else{
			state.bottomData = mergeCar(sortCar(state.detailData.list))
		}
	},
	updateText(state,payload){
		state.text=payload
	}
};

const actions = {
	getDetail: ({commit}, id)=>{
		getDetailList(id).then(res=>{
			commit("updateData",res.data)
		})
	},
	tabList:({commit,state},val)=>{
		commit("updateList",val)
	},
	addText:({commit,state},val)=>{
		commit("updateText",val)
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