
function getInfo() {
	let city = document.getElementById("city").value;
	if (city!==""){
	let date = new Date(Date.now() + 86400e3);
	date = date.toUTCString();
	document.cookie =encodeURIComponent('City')+'='+encodeURIComponent(city)+'; expires='+date+'; path=/';
}
}

function clearCity() {
	window.location.reload()
	document.querySelector('#input_city').style.display = '';
	document.querySelector('#greeting').style.display = 'none';
	document.querySelector('#save').style.display = '';
	var cookies = document.cookie.split(";");
	for (var i = 0; i < cookies.length; i++) {
		var cookie = cookies[i];
		var eqPos = cookie.indexOf("=");
		var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
		document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;";
		document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	}

}

function freeze_Chk(){
	for (let i=0; i<elements.length; i++) {
	let element = elements[i];
	element.disabled="True"
	}
}


function getCookie(name) {
	var matches = document.cookie.match(new RegExp(
		'(?:^|\s)' + name.replace(/([.$?*+\\\/{}|()\[\]^])/g, '\\$1') + '=(.*?)(?:;|$)'));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}


let nameCity = getCookie('City')
if (nameCity!==undefined){
	document.querySelector('#input_city').style.display = 'none';
	document.querySelector('#greeting').style.display = '';
	document.querySelector('#greeting_text').innerText="Ваш город: "+nameCity
	document.querySelector('#save').style.display = 'none';
}


let elements = document.forms[0].querySelectorAll("input[type='checkbox']")
function saveChk(){
const mem = [];
for (let i=0; i<elements.length; i++) {
	let element = elements[i];
	if (element.checked == true) {
		mem.push(1)
	}
	else {
		mem.push(0)
	}
}
console.log(mem)

localStorage.setItem("chk", JSON.stringify(mem))
}


let chk = JSON.parse(localStorage.getItem('chk'))
console.log(chk)
if (chk!==null && chk.indexOf(1)!==-1) {
	freeze_Chk()
	for (let i=0; i<chk.length;i++) {
		elements[i].checked=chk[i]
	}
}



