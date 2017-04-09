/*
*与IOS传值 获取url
*@example ?type=sale&user_token=aa
*@return Object {user_token:aa}
*/
export function urlParse() {
	let url = window.location.search;
	let obj = {};
	let reg = /[?&][^?&]+=[^?&]+/g;//正则表达式
	let arr= url.match(reg);
	//['?type=sale','&user_token=aa']
	if (arr) {
		arr.forEach((item) => {
			let tempArr = item.substring(1).split("=");
			let key = decodeURIComponent(tempArr[0]);
			let val = decodeURIComponent(tempArr[1]);
			obj[key] = val;
		});
	}
	// console.log(obj);
	return obj;
};