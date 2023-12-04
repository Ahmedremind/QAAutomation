import {test}   from '@playwright/test';
import {ExchangeServicesJourney} from '../pages/ChangesService/YourOffer';
import userData from '../util/userdata.json';


test.describe(' Change Servic Gas', () => {
    test(' Verify User can create the offer Creation of Gass conenction', async ({ page }) => {
        const exchange = new ExchangeServicesJourney(page);
        await exchange.gotoremindme();
        await exchange.loginUser(userData.Email,userData.Password);
        await exchange.clickonViewOffer();
        await exchange.clickonofferDetails();
        await exchange.clickonCreateFreeExchange();
        await exchange.clickoncheaperProvider();
        await exchange.clickonFurtherButton();
        await exchange.clickonHouseebutton();
        await exchange.clickonFurtherButton();
        //await exchange.clickonSize();
        await exchange.clickonFurtherButton();
        await exchange.clickonFurtherButton();
        await exchange.clickonEcotariff();
        await exchange.clickonFurtherButton();
        await exchange.clickonFurtherButton();
        await exchange.clickonFurtherButton();
        await exchange.clickonFurtherButton();
        await exchange.choseGender();
        await exchange.fillFirstname(userData.FirstName);
        await exchange.fillLasttname(userData.LastName);
        await exchange.fillDay(userData.Day);
        await exchange.fillMonth(userData.Month);
        await exchange.fillYear(userData.Year);
        await exchange.fillStreetName(userData.StreetName);
        await exchange.fillHouseNumber(userData.House);
        await exchange.fillPhoneNumber(userData.PhoneNumber);
        await exchange.clickonFurtherButton();
        await exchange.clickonFurtherButton();
        await exchange.ibanNumber(userData.Iban);
        await exchange.clickonFurtherButton();
        await exchange.clickonFurtherButton();
        await exchange.autoSignaturebutton();
        await exchange.clickonFurtherButton();

        
    });

    

});
