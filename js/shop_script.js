// Referanslar
const form = document.querySelector('form');
const input = document.querySelector('#input-giris');
const listeTemizle = document.querySelector('#liste-temizle');

const liste = document.querySelector('#liste');

eventListeners();
function eventListeners(){
	form.addEventListener('submit',addNewItem);

	//eleman silme

	liste.addEventListener('click',deleteItem);

	//tüm elemanları silme

	listeTemizle.addEventListener('click',deleteAllItems);
}

function addNewItem(e){

	if(input.value ===''){
		alert('Lütfen Eleman Ekle');
	}
	const li = document.createElement('li');
	li.appendChild(document.createTextNode(input.value));
	//Create a
	const a = document.createElement('a');
	a.setAttribute('href','#');
	a.classList = 'btn3';
	a.style.cssText="text-decoration: none";
	a.innerHTML = 'X';

	li.appendChild(a);
	liste.appendChild(li);
	
	input.value='';

	e.preventDefault();
}

function deleteItem(e){
	if(e.target.className === 'btn3'){
		e.target.parentElement.parentElement.removeChild(e.target.parentElement);
	}
	e.preventDefault();
}

function deleteAllItems(e){

/*	
Bu yöntem de tüm elemanları siliyor ama 2 den fazla eleman eklendiğinde son elemanı silmiyor
ancak listeyitemizle butonuna 2 kere basınca listeyi komple temizliyor.

liste.childNodes.forEach(function(item){
		if(item.nodeType===1){
			item.remove();
		}
	});
*/
	liste.innerHTML='';
	e.preventDefault();
}	