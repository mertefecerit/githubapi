export class Storage {
    dataToStorage(userName){
        let userNames = this.getDataFromStorage();
        if(userNames.indexOf(userName) === -1){
            userNames.push(userName);
            localStorage.setItem("userNames",JSON.stringify(userNames));
        }
    }

    getDataFromStorage(){
        let userNames;
        if(localStorage.getItem("userNames") === null){
            userNames = [];
        }else {
            userNames = JSON.parse(localStorage.getItem("userNames"));
        }
        return userNames;
    }
}