import {GithubRequests} from './github/request.js';
import {UI} from "./github/ui.js";
import {Storage} from './github/storage.js';


const gitForm = document.getElementById("gitForm");
const githubName = document.getElementById("githubName");


const request = new GithubRequests();
const ui = new UI();
const storage = new Storage();


document.addEventListener("DOMContentLoaded",function (){
   ui.getDataFromStorageToUI(storage.getDataFromStorage());
});


gitForm.addEventListener("submit", function (e){
    e.preventDefault();
    let userName = githubName.value.trim();
    if(userName === ""){
        ui.alert("Please enter the valid github user name !",1);
    }else{
        request.get(userName)
            .then(response => {
                if(response.user.message !== "Not Found"){
                    ui.dataToUI(response);
                    storage.dataToStorage(userName);
                    ui.getDataFromStorageToUI(storage.getDataFromStorage());
                    ui.alert("Success",3);
                }else{
                    ui.alert("User Not Found",1);
                }
            })
            .catch(err => {
                ui.alert(err,1);
            });
    }
});