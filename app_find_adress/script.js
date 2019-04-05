let getAdressDataByZipCode = zipCode => {
    console.log(zipCode); 

    let url = 'https://viacep.com.br/ws/' + zipCode + '/json/unicode/';
    console.log(url);
    
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url);

    xmlHttp.onreadystatechange = () => {
        //console.log(xmlHttp); 
        if(xmlHttp.readyState === 4 && xmlHttp.status === 200 ) {
            //console.log('Requisição feita com sucesso, status 200'); 
            //console.log(xmlHttp.responseText);     
            let dataJSONText = xmlHttp.responseText;
            let objJSON = JSON.parse(dataJSONText);
            console.log(objJSON);
            
            for(i in objJSON) {
                document.getElementById('adress').value = objJSON.logradouro;
                document.getElementById('district').value = objJSON.bairro;
                document.getElementById('city').value = objJSON.localidade;
                document.getElementById('state').value = objJSON.uf;
            }
        }      
    }

    xmlHttp.send();
}