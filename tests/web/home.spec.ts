import {test, expect} from '@playwright/test';
// Import POM
import HomePage from '../../pages/web/home.page';

import { faker } from '@faker-js/faker';
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';

test.describe('Home', ()=>{
    //POM
    let homePage: HomePage;
    
    // Test Parameter
    const temp = ["1","2"]

    test.beforeEach(async ({ page }) => {
            //POM
            homePage = new HomePage(page);
       
            await homePage.navigate();    
    })

    // Same test multiple parameters
    for (const i of temp)
    { 
           test(`Test - ${i}`,async()=>{
    
        const randomName = faker.person.fullName(); 
        const randomEmail = faker.internet.email(); 
        const randomPhone = faker.phone.number();
        const para = faker.lorem.paragraph(2);

        console.log(randomName)
        console.log(randomEmail)
        console.log(randomPhone)
        console.log(para)


        // Access Header Compoent using homePage
        console.log(await homePage.headerComponent().getSearchPlaceholderTxt());
        
      
        await homePage.shopNewBtn.click()

    })
    }   

})

