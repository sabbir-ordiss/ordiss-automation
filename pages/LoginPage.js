class LoginPage {
  constructor(page) {
    this.page = page;
    // Locators: We define them in the constructor so if UI changes, we fix it here only.
    this.usernameInput = page.locator('input[name="username"]'); // Update selector based on real app
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button:has-text("Login")');
  }

  async navigate() {
    await this.page.goto('/');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();

    // Wait for a Dashboard element to ensure login was successful
    // SRS Page 10 mentions "Dashboard" as a core module
    await this.page.waitForURL('**/dashboard');
  }
}

module.exports = LoginPage;
