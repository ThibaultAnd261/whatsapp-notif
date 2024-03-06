import puppeteer from "puppeteer"
import dotenv from 'dotenv';
dotenv.config();

async function launchWhatsappWebsite() {
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: process.env.CHROME_PATH,
        userDataDir: process.env.CHROME_DATA_DIR,
    });

    const page = await browser.newPage();

    await page.goto("https://web.whatsapp.com/");

    //await browser.close();
}

launchWhatsappWebsite()