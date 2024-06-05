exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.userName = page.getByLabel('Username')
        this.password = page.getByLabel('Password');
        this.loginButton = page.getByRole('button', { name: ' Login' });
    }

    async goToLoginPage(){
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }
    
    async login(userName, password){
        await this.userName.fill(userName);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}