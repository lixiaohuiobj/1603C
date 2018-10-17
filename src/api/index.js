// 动态判断域名
const host = !/localhost/.test(window.location.host)?'http://baojia-test.chelun.com':'https://baojia.chelun.com';
function sendRequest(url, method = 'GET', data = {}){
    let params = {
        method
    };
    if (method == 'POST'){
        params.body = JSON.stringify(data);
    }
    if (url.indexOf('?') == -1){
        url += `?_=${+new Date()}`
    }else{
        url += `&_=${+new Date()}`
    }
    return fetch(host+url, params).then(res=>res.json()).then(body=>body);
}

export let getBrandList = ()=>{
    return sendRequest('/v2-car-getMasterBrandList.html');
}

export let getMakeList = (id)=>{
    return sendRequest(`/v2-car-getMakeListByMasterBrandId.html?MasterID=${id}`);
}
export let getDetailList = (id)=>{
    return sendRequest(`/v2-car-getInfoAndListById.html?SerialID=${id}`);
}
export let getImgList = (id)=>{
    return sendRequest(`/v2-car-getImageList.html?SerialID=${id}`);
}
export let getPriceList = (carid)=>{
    return sendRequest(`/v2-dealer-alllist.html?carId=${carid}&cityId=201`);
}
export let getCityIdList = (id)=>{
    return sendRequest(`/v2-dealer-alllist.html?carId=126282&cityId=${id}`);
}
export let getCityList = ()=>{
    return sendRequest(`/v1-city-alllist.html`);
}
export let getCitySecondList = (id)=>{
    return sendRequest(`/v1-city-alllist.html?provinceid=${id}`);
}
// https://baojia.chelun.com/v1-city-alllist.html?_1539677859663
