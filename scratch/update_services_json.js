const fs = require('fs');

const data = JSON.parse(fs.readFileSync('c:\\Users\\raush\\Desktop\\Css Founder\\auto-wirx\\data\\site.json', 'utf8'));

data.AutoWirx.sections.services = {
    "variants": {
        "AutoWirxServices1": {
            "header": {
                "subtitle": "OUR SERVICES",
                "titleLine1": "Reliable Solutions for",
                "titleLine2": "All Your",
                "titleHighlight": "Device Problems",
                "description": "We provide a wide range of mobile repair services using quality parts and advanced tools to ensure the best results."
            },
            "servicesList": [
                {
                    "icon": "phone",
                    "title": "Screen Repair",
                    "description": "Cracked or broken screen? We'll make it look new again.",
                    "href": "/services/screen-repair"
                },
                {
                    "icon": "battery",
                    "title": "Battery Replacement",
                    "description": "Fast battery drain? We'll power you up.",
                    "href": "/services/battery-replacement"
                },
                {
                    "icon": "water",
                    "title": "Water Damage",
                    "description": "Water in your device? We can help bring it back.",
                    "href": "/services/water-damage"
                },
                {
                    "icon": "settings",
                    "title": "All Brand Repairs",
                    "description": "iPhone, Samsung, OnePlus & more – we fix them all.",
                    "href": "/services/brand-repairs"
                },
                {
                    "icon": "chip",
                    "title": "Charging Port Repair",
                    "description": "Loose or not charging? We'll fix the connection.",
                    "href": "/services/charging-port"
                },
                {
                    "icon": "volume",
                    "title": "Speaker & Mic Repair",
                    "description": "Low sound or not clear? We'll make it crystal clear.",
                    "href": "/services/speaker-mic"
                },
                {
                    "icon": "camera",
                    "title": "Camera Repair",
                    "description": "Blurry photos or camera not working? We've got you covered.",
                    "href": "/services/camera-repair"
                },
                {
                    "icon": "construct",
                    "title": "Software Issues",
                    "description": "Phone slow or stuck? We fix software problems and bring it back to normal.",
                    "href": "/services/software-issues"
                }
            ]
        }
    }
};

fs.writeFileSync('c:\\Users\\raush\\Desktop\\Css Founder\\auto-wirx\\data\\site.json', JSON.stringify(data, null, 2));
