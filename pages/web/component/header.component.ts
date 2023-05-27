import {Page, Locator} from '@playwright/test';

class HeaderComponent 
{
    private page: Page;
    searchTxt: Locator;
    
    constructor(page: Page)
    {
       this.page = page;
       this.searchTxt =  page.locator("input#search");
   }

   async getSearchPlaceholderTxt()
   {
        return await this.searchTxt.getAttribute("placeholder");
   }
}

export default HeaderComponent;