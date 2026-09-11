import json

with open(r'c:\Users\raush\Desktop\Css Founder\auto-wirx\data\site.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

data['AutoWirx']['sections']['hero'] = {
    "variants": {
        "AutoWirxHero1": {
            "tagline": "Expert Care. Fast Repair. Trusted Service.",
            "heading": {
                "line1": "We Fix Your Phone",
                "line2": "Like New ",
                "highlight": "Again!"
            },
            "description": "From cracked screens to battery issues – we provide fast, reliable and affordable mobile repair services you can trust.",
            "primaryCta": {
                "label": "Repair Now",
                "href": "/repair"
            },
            "secondaryCta": {
                "label": "Our Services",
                "href": "/services"
            },
            "trustBadges": [
                {
                    "icon": "shield",
                    "title": "100%",
                    "subtitle": "Trusted Service"
                },
                {
                    "icon": "award",
                    "title": "Quality",
                    "subtitle": "Parts Used"
                },
                {
                    "icon": "clock",
                    "title": "Quick",
                    "subtitle": "Turnaround"
                },
                {
                    "icon": "checkCircle",
                    "title": "Warranty",
                    "subtitle": "on Repairs"
                }
            ],
            "image": {
                "src": "/images/hero-banner.png",
                "alt": "We Fix Your Phone Like New Again - Mobile Phone Repair"
            }
        }
    }
}

with open(r'c:\Users\raush\Desktop\Css Founder\auto-wirx\data\site.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2)
