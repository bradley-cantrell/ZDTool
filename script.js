const url = "https://mailchimp.zendesk.com/agent/tickets/7598235";

const clipped = new RegExp("[0-9]", "g");

const zd = url.match(clipped);


console.log(zd.join(''));