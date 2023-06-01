const form = document.getElementById('formulario'); 
const numero = document.getElementById('numero-telefone'); 
const nome = document.getElementById('nome-contato');

let linhas =''; 

const arrayNomes = [];
const arrayNumero = [];

form.addEventListener('submit', function(e){
    e.preventDefault(); 
    addContato(); 

    
});

function addContato(){
    if(arrayNomes.includes(nome.value)){
        alert(`O nome ${nome.value} já consta na lista!!!!`)
    }else if(arrayNumero.includes(numero.value)){
        alert(`O numero ${numero.value} já consta na lista!!!!`)
    }else{
        arrayNomes.push(nome.value); 
        arrayNumero.push(numero.value);

        let linha = '<tr>'; 
        linha+=`<td>${nome.value}</td>`; 
        linha+=`<td>${numero.value}</td>`;
        linha+='<tr>';

        linhas += linha; 

        arrayNomes.value= '';  
        arrayNumero.value=''; 

        const corpoTabel = document.querySelector('tbody'); 
        corpoTabel.innerHTML=linhas; 

        const QtdNomes = calculaNome();
        document.getElementById('QtdNomes').innerHTML = QtdNomes; 
    }
}

function calculaNome(){
    for (let i=0; i<arrayNumero.value; i++){
        arrayNumero++; 
    }
    return arrayNumero.length; 
}