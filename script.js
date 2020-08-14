
        var urls = prompt("Input comma separated ZD URLs:");
        var zds = urls.match(/\d{7}/g);
        document.write(zds);
