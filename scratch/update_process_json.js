const fs = require('fs');

const data = JSON.parse(fs.readFileSync('c:\\Users\\raush\\Desktop\\Css Founder\\auto-wirx\\data\\site.json', 'utf8'));

data.AutoWirx.sections.process = {
    "variants": {
        "AutoWirxProcess1": {
            "header": {
                "titleLine1": "Simple Process, ",
                "titleHighlight": "Excellent Results",
                "description": "We follow a clear and efficient process to provide the best care for your device and fast results."
            },
            "steps": [
                {
                    "stepNumber": "01",
                    "icon": "clipboard",
                    "title": "Request & Diagnose",
                    "description": "Tell us your issue. Our experts will check your device and find the exact problem."
                },
                {
                    "stepNumber": "02",
                    "icon": "fileText",
                    "title": "Get Estimate",
                    "description": "We provide a clear and transparent repair estimate before we start."
                },
                {
                    "stepNumber": "03",
                    "icon": "settings",
                    "title": "Repair & Test",
                    "description": "Our skilled technicians repair your device using quality parts and test it thoroughly."
                },
                {
                    "stepNumber": "04",
                    "icon": "checkCircle",
                    "title": "Ready for You",
                    "description": "Your device is ready! We notify you for pickup or deliver it to your doorstep."
                }
            ]
        }
    }
};

fs.writeFileSync('c:\\Users\\raush\\Desktop\\Css Founder\\auto-wirx\\data\\site.json', JSON.stringify(data, null, 2));
