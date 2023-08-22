
function buscar(){
   id =  document.getElementById("id").value

   const itemTable = document.getElementById("itemTable").getElementsByTagName('tbody')[0];
   // Fazer a requisição HTTP
   fetch("https://rickandmortyapi.com/api/character/"+id)
       .then(response => response.json())
       .then(data => {
           console.log(data);
           
           const newRow = itemTable.insertRow();
           const idCell = newRow.insertCell(0);
           const nomeCell = newRow.insertCell(1);
           const statusCell = newRow.insertCell(2);
           const especieCell = newRow.insertCell(3);
           const tipoCell = newRow.insertCell(4);

           idCell.innerHTML = data.id;
           nomeCell.innerHTML = data.name;
           statusCell.innerHTML = data.status;
           especieCell.innerHTML = data.species;
           tipoCell.innerHTML = data.type;
       })
       .catch(error => {
           console.error("Erro na requisição:", error);
       });



    }
