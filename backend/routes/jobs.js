const JobScraper = require('job-scraper');

const args = ['Pizza Delivery', 'New York', 'New York'] 
const jobScraper = new JobScraper(...args);

const scraped = jobScraper.init();
scraped.then(res=>{
    console.log(res);
})