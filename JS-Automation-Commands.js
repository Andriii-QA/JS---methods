// Импортируем assert (библиотека Assert)
const assert = await import('assert');

//getTitle - используется для получения заголовка (title) текущей страницы в браузере. Этот метод возвращает строку, представляющую заголовок документа HTML, который отображается в теге <title> на странице.
describe("Simple command", () => {
    xit("should open Rozetka.com.ua, find get and compare (match) the title (method getTitle)", async () => {
        // Открываем сайт
        await browser.url('https://rozetka.com.ua/');

        // Получаем заголовок страницы
        const title = await browser.getTitle(); 

        //Проверяем заголовок библиотека Assert 
        assert.strictEqual(title, 'Интернет-магазин ROZETKA™: официальный сайт онлайн-гипермаркета Розетка в Украине');
        // Проверяем заголовок библиотека Chai
        //expect(actual).to.equal('Интернет-магазин ROZETKA™: официальный сайт онлайн-гипермаркета Розетка в Украине')
        // Проверяем заголовок библиотека Jest
        //expect(actual).to.tobe('Интернет-магазин ROZETKA™: официальный сайт онлайн-гипермаркета Розетка в Украине')
    });

    xit("should open Rozetka.com.ua, find and output to console the title (output to console", async () => {
        // Открываем сайт
        await browser.url('https://rozetka.com.ua/');

        // Получаем заголовок страницы
        const title = await browser.getTitle(); 
        console.log("title is:" + title);
    });

    xit('should demonstrate the addValue command (addValue not setValue)', async () => {
        await browser.url('https://rozetka.com.ua/');
        await browser.pause(4000);
        let searchinput = $('input[name="search"]');
        await searchinput.setValue('');
        await searchinput.addValue('Apple ');
        await browser.pause(2000);
        await searchinput.addValue('16 pro max');
        await browser.pause(2000);

        const value = await searchinput.getValue();
        assert.strictEqual(value, 'Apple 16 pro max');
    });

    xit('should demostrate the setValue command', async () => {
        await browser.url('https://rozetka.com.ua/');
        await browser.pause(4000);
        let searchinput = $('input[name="search"]');
        await searchinput.addValue('Apple ');
        await browser.pause(2000);
        await searchinput.setValue('16 pro max');
        await browser.pause(2000);

        const value = await searchinput.getValue();
        assert.strictEqual(value, '16 pro max');
    });

    xit('should demostrate the click command', async () => {
        await browser.url('https://www.idealista.com/uk/');
        await browser.pause(1000);
        const searchrealestate = $('//a[contains(text(),"Шукати агентство з нерухомості")]');
        await searchrealestate.click();
        await browser.pause(1000);
    });

    xit("should open Rozetka.com.ua, find get attribute", async () => {
        await browser.url('https://rozetka.com.ua/');
        const searchinput = $('input[name="search"]');
        let attr = await searchinput.getAttribute('placeholder');
        console.log('Placeholder attribute is:' + attr); // Expected response: "Placeholder attribute is:Я ищу..."
    
        await searchinput.setValue("Laptop");
        attr = await searchinput.getValue('value');
        console.log('Value attribute is:' + attr);
    });

    xit("should open Rozetka.com.ua, get logo location", async () => {
        await browser.url('https://rozetka.com.ua/');
        const logo = $('//img[@alt="Rozetka Logo"]');
        const location = await logo.getLocation();
        console.log(location);

        const xLocation = await logo.getLocation("x");
        console.log("xlocation is:" + xLocation);
    });

    xit("should open Rozetka.com.ua, get button text", async () => {
        await browser.url('https://rozetka.com.ua/');
        const Catalog = $('#fat-menu');
        await brower.get
        console.log("Text in button: " + await Catalog.getText()); // Expected response: Text in button: Каталог
    });

    xit("should open the website, click the button, and get the new URL", async () => {
        await browser.url('https://rozetka.com.ua/');
        const button = await $('//a[@class="menu-categories__link js-menu-categories__link"][contains(text(),"Ноутбуки и компьютеры")]');
        await button.waitForClickable({ timeout: 5000 });
        await button.click();
        await browser.waitUntil(async () => {
            const url = await browser.getUrl();
            return url !== 'https://rozetka.com.ua/';
        }, { timeout: 5000, timeoutMsg: 'URL не изменился после клика' });
        const newUrl = await browser.getUrl();
        console.log('New URL is: ' + newUrl); // Expected response: New URL is: https://rozetka.com.ua/computers-notebooks/c80253/
    });
    
}); 