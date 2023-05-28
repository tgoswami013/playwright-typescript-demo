import {Page} from '@playwright/test';
// Import Component
import HeaderComponent from './component/header.component'
import LoginPage from './login.page'
import HomePage from './home.page'

class PageManger 
{
   private page: Page;
    
   constructor(page: Page)
   {
      this.page = page;
   }
    
   headerComponent()
   {
      return new HeaderComponent(this.page)
   }

   loginPage()
   {
      return new LoginPage(this.page)
   }

   homePage()
   {
      return new HomePage(this.page)
   }

   async navigate()
   {
      await this.page.goto('/')
   }
}

export default PageManger;
