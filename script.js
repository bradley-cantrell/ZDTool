var urls = "https://mailchimp.zendesk.com/agent/tickets/7602662, https://mailchimp.zendesk.com/agent/tickets/7602662, https://mailchimp.zendesk.com/agent/tickets/7602670, www.google.com";


var zds = urls.match(/\d{7}/g);


for(i = 0; i < zds.length;i++) {
      console.log(zds[i]);
    };