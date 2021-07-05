export class GithubRequests {
    constructor() {
        this.url = "https://api.github.com/users/";
    }
    async get(githubName){
        const responseUser = await fetch(this.url + githubName);
        const responseRepo = await fetch(this.url + githubName + "/repos");
        const userData = await responseUser.json();
        const userRepos = await responseRepo.json();

        return {
            user : userData,
            repos : userRepos,
        }
    }
}