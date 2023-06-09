import {Page, Locator} from '@playwright/test';
// Import Component
import HeaderComponent from './component/header.component'


class LoginPage 
{
   private page: Page;
   loginBtn: Locator;
    
   constructor(page: Page)
   {
      this.page = page;
      this.loginBtn =  page.locator("text=Log In");
   }
    
   headerComponent()
   {
      return new HeaderComponent(this.page)
   }

   async navigate()
   {
      await this.page.goto('/')
   }
}

export default LoginPage;
