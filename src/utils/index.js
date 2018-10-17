//合并
export function mergeCar(list){
    let keys = [],
        arr = {};
    list.forEach((item)=>{
        let key = item.exhaust_str+'/'+item.max_power_str+' '+item.inhale_type;
        if (keys.indexOf(key) != -1){
            arr[key].push(item);
        }else{
            keys.push(key);
            arr[key] = [item];
        }
    })
    return arr;
}
//排序
export function sortCar(list){
    return list.sort((a, b)=>{
        if (a.exhaust != b.exhaust){
            return a.exhaust - b.exhaust;
        }else{
            if (a.max_power_str !=b.max_power_str){
                return a.max_power_str - b.max_power_str;
            }else{
                if (a.inhale_type != b.inhale_type){
                    return a.inhale_type - b.inhale_type;
                }else{
                    return b.market_attribute.year - a.market_attribute.year;
                }
            }
        }
    })
}
//按年份筛选车辆
export function filter(year, list){
    return list.filter(item=>item.market_attribute.year == year);
}