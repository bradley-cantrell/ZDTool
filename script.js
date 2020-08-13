
//Accepts a string and returns any numbers 0-9 as a string, then combines the strings with no spaces:

var url = "https://mailchimp.zendesk.com/agent/tickets/7598235";

const clipped = new RegExp("[0-9]", "g");

const zd = url.match(clipped);

const type = typeof zd;
console.log(type);

console.log(zd.join(''));


//Adjust to:
//array of urls
//regex on each url (for each?)
//.match clipped on each url
//return or log zd.join to return each clipped separated by commas 