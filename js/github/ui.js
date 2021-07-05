export class UI {
    constructor() {
        this.searchResult = document.getElementById("searchResult")
        this.alertArea = document.createElement("div");
        this.latestSearchArea = document.getElementById("latestSearch");
    }

    dataToUI(response){
        let repoNames="";
        response.repos.forEach(function (data){
            repoNames +=`<li>${data.name}</li>`;
        })
        this.searchResult.innerHTML = `
            <div class="p-2 rounded bg-light border mt-2">
                <h6 class="mb-0 text-center">Bilgiler</h6>
                <hr/>
                <img width="100px" class="d-block mx-auto img-fluid rounded-circle" src="${response.user.avatar_url}" alt="">
                <div class="d-flex justify-content-around mt-2">
                    <span class="badge bg-secondary">Followers : ${response.user.followers}</span>
                    <span class="badge bg-primary">Followings : ${response.user.following}</span>
                    <span class="badge bg-danger">Public Repos : ${response.user.public_repos}</span>
                    <span class="badge bg-danger">Public Gists : ${response.user.public_gists}</span>
                </div>
                <hr/>
                <ul>
                    <li>Bio : ${response.user.bio}</li>
                    <li>Website : ${response.user.blog}</li>
                    <li>Company : ${response.user.company}</li>
                    <li>Location : ${response.user.location}</li>
                    <li>Created Date : ${response.user.created_at}</li>
                </ul>
            </div>
            <div class="p-2 rounded bg-light border mt-2">
                <h6 class="mb-0 text-center">Repolar</h6>
                <hr/>
                <ul>
                    ${repoNames}
                </ul>
            </div>`;
    }
    alert(message,type){
        this.alertArea.setAttribute("role","alert");
        switch (type){
            case 1:
                this.alertArea.className = "alert alert-danger";
                break;
            case 2:
                this.alertArea.className = "alert alert-warning";
                break;
            case 3:
                this.alertArea.className = "alert alert-success";
                break;
        }

        this.alertArea.innerHTML = message;
        const appArea = document.getElementsByClassName("col-lg-6")[0];
        appArea.insertBefore(this.alertArea,appArea.firstChild);

        setTimeout( () => {
            this.alertArea.remove();
        },2000)
    }
    getDataFromStorageToUI(data){
        this.latestSearchArea.className = "p-2 rounded bg-light border mt-2";
        this.latestSearchArea.innerHTML = '<h6>Latest Search Names</h6>';
        if(data.length > 0){
            this.latestSearchArea.innerHTML += '<ul>';
            data.forEach((e) => {
                this.latestSearchArea.innerHTML += `<li>${e}</li>`;
            });
            this.latestSearchArea.innerHTML += '</ul>';
        }else{
            this.latestSearchArea.innerHTML += 'No data yet.';
        }
    }
}