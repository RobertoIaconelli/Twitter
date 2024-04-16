let textArea = document.querySelector("#textArea");
let caratteriRimanenti = document.querySelector("#conteggio")
let erroriUtente = document.querySelector("#erroriUtente");
let erroriPassword = document.querySelector("#erroriPassword");
let post = document.querySelector("#post");
let btnTweet = document.querySelector("#bntTweet");
let btnLogout = document.querySelector("#btnLogout");
let UtenteRegistrato = document.querySelector("#nomeUtenteRegistrato");

function scalaCaratteri(){
    let caratteriRimanenti = textArea.maxLength - textArea.value.length;
    conteggio.textContent = caratteriRimanenti;
  }

  let utenteLoggato = JSON.parse(localStorage.getItem("nuovoUtente"));




    class Tweet {
        constructor(contenuto,data){
            this.contenuto=contenuto;
            this.data=data;

        }
      
    }

        
    
    
 

    function aggiungiTweet(){
        let nicknameNelLocalStorage = utenteLoggato.nome;
    let data = new Date;
    let giorno = data.getDate();
    let mese = data.getMonth() +1;
    let anno = data.getFullYear();
    let orario = data.getHours();
    let minuti = data.getMinutes();
    let secondi = data.getSeconds();
    let dataOraString = `${giorno}/${mese}/${anno} ${orario}:${minuti}:${secondi}`;
    let nuovoTweet = new Tweet(textArea.value, dataOraString); 
        utenteLoggato.tweets.push(nuovoTweet);
        localStorage.setItem("nuovoUtente", JSON.stringify(utenteLoggato));
        post.innerHTML += `<p class="classeP">Il tweet di: ${nicknameNelLocalStorage} <br> ${nuovoTweet.data} <br> ${nuovoTweet.contenuto} <br></p>`; 
        textArea.value=""; 
        post.classList.remove("d-none");
         
          
           
        }

        btnTweet.addEventListener("click", aggiungiTweet);
        
        
        
        
        function logout() {
            let utenteJSON = JSON.stringify(utenteLoggato);
        
            let endPoint = "http://localhost:3000/utenti";
            fetch(endPoint, {
                method: 'POST',
                // headers: {
                //     'Content-Type': 'application/json'
                // },
                body: utenteJSON
            })
            .then(response => {
                // if (!response.ok) {
                //     throw new Error('Errore nella richiesta al server');
                // }
                return response.json();
            })
            .then(data => {
                console.log('Dati presenti nel finto database:', data);
                localStorage.clear();
            })
            // .catch(error => {
            //     console.error('Errore durante l\'invio della richiesta:', error);
            // });
        
                    localStorage.clear();
        }

        
        UtenteRegistrato.innerHTML = `@${utenteLoggato.nome}`;



        

        

    
    



textArea.addEventListener("input", scalaCaratteri);
btnLogout.addEventListener("click", logout);
//  document.addEventListener('DOMContentLoaded', stampaPost)
















