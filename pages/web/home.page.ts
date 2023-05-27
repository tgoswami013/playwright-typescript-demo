import {Page, Locator} from '@playwright/test';
// Import Component
import HeaderComponent from './component/header.component'


class HomePage 
{
   private page: Page;
   shopNewBtn: Locator;
    
   constructor(page: Page)
   {
      this.page = page;
      this.shopNewBtn =  page.locator("text=Shop New Yoga");
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

export default HomePage;