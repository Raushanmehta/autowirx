const fs = require('fs');

const data = JSON.parse(fs.readFileSync('c:\\Users\\raush\\Desktop\\Css Founder\\auto-wirx\\data\\site.json', 'utf8'));

data.AutoWirx.sections.process.variants.AutoWirxProcess1.header.subtitle = "HOW IT WORKS";

fs.writeFileSync('c:\\Users\\raush\\Desktop\\Css Founder\\auto-wirx\\data\\site.json', JSON.stringify(data, null, 2));
