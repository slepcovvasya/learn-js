//Привяжите всем инпутам следующее событие - по потери фокуса каждый 
//инпут выводит свое value в абзац с id="test"
/*let elems = document.getElementsByTagName('input');
let parag = document.getElementById('test');
for (var i = 0; i < elems.length; i++) {
	elems[i].addEventListener('blur', func);
}

function func() {
	parag.innerHTML = this.value;
}*/

// Для всех инпутов сделайте так, чтобы они выводили свой value алертом 
//при нажатии на любой из них, но только по первому нажатию. Повторное 
//нажатие на инпут не должно вызывать реакции.
/*let elems = document.getElementsByTagName('input');
for(i = 0; i<elems.length; i++){
    elems[i].addEventListener('blur', func);
    
}

function func(){
alert('value');
}*/

// Даны абзацы с числами. По нажатию на абзац в нем должен появится 
//квадрат числа, которое он содержит.
/*let elems = document.getElementsByTagName('p');
for(i = 0; i<elems.length; i++){
    elems[i].addEventListener('click', func);
}
function func(){
    this.innerHTML = this.innerHTML * this.innerHTML;
}*/
// Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли 
//свое содержимое на правильное количество символов. Сколько символов 
//должно быть в инпуте, указывается в атрибуте data-length. Если вбито 
//правильное количество, то граница инпута становится зеленой, если 
//неправильное - красной.
let elems = document.getElementsByTagName('input');
for (var i = 0; i < elems.length; i++) {
	elems[i].addEventListener('click', func);
}

function func() {
	let correctLength = this.dataset.length; 
	let inputDataLength = this.value.length; 
	if(correctLength == inputDataLength){
		this.style.borderColor = 'green';
	} 
		else {
			this.style.borderColor = 'red';
	}
}
