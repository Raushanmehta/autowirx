const fs = require('fs');
const path = require('path');

const sitePath = path.join('c:\\Users\\raush\\Desktop\\Css Founder\\auto-wirx', 'data', 'site.json');
const data = JSON.parse(fs.readFileSync(sitePath, 'utf8'));

data.AutoWirx.sections.whyChooseUs = {
    "variants": {
        "AutoWirxWhyChooseUs1": {
            "images": {
                "main": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80",
                "secondary": "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=600&auto=format&fit=crop&q=80"
            },
            "header": {
                "subtitle": "WHY CHOOSE US",
                "titleLine1": "Smart Repairs.",
                "titleHighlight": "Trusted Service.",
                "description": "At Auto Wirx, we combine expertise, advanced tools and genuine parts to deliver reliable and hassle-free mobile repair solutions."
            },
            "features": [
                {
                    "icon": "shield",
                    "title": "Expert Technicians",
                    "description": "Certified professionals with years of experience in mobile repairs."
                },
                {
                    "icon": "award",
                    "title": "Genuine Parts",
                    "description": "We use only high-quality and genuine parts for long-lasting performance."
                },
                {
                    "icon": "clock",
                    "title": "Fast Turnaround",
                    "description": "Quick diagnosis and efficient repairs to get you back on track."
                },
                {
                    "icon": "headphones",
                    "title": "Customer Satisfaction",
                    "description": "Our priority is your satisfaction and we always deliver the best."
                }
            ],
            "stats": [
                {
                    "icon": "briefcase",
                    "count": "20.5k",
                    "label": "Projects Done"
                },
                {
                    "icon": "smile",
                    "count": "100.5k",
                    "label": "Happy Clients"
                },
                {
                    "icon": "users",
                    "count": "150.5k",
                    "label": "Team Members"
                }
            ]
        }
    }
};

fs.writeFileSync(sitePath, JSON.stringify(data, null, 2));
