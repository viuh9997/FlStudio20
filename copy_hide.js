function copiar() {
	let copia = document.getElementById("code");
	copia.select();
	copia.setSelectionRange(0, 99999);

	document.execCommand("copy");
	alert("foi copiado: " + copia.value);
}

document.getElementById('comprar').addEventListener('click', (event) =>{
  if(event.target.checked){
	  document.getElementById('n').style.display = 'none';
	  document.getElementById('n2').style.display = 'none';
	  document.getElementById('compra').style.display = 'none';
  }
})

document.getElementById('x').addEventListener('click', (event) =>{
  if(event.target.checked){
	  document.getElementById('n').style.display = 'block';
	  document.getElementById('n2').style.display = 'block';
	  document.getElementById('compra').style.display = 'block';
  }
})
