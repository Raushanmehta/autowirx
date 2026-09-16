const fs = require('fs');
const file = 'c:/Users/raush/Desktop/Css Founder/auto-wirx/data/site.json';
const data = JSON.parse(fs.readFileSync(file, 'utf-8'));

data.AutoWirx.sections.blogDetails = {
  variants: {
    AutoWirxBlogDetails1: {
      article: {
        category: 'Screen Repair',
        title: "5 Signs It's Time to Replace Your Phone Screen",
        date: 'Aug 20, 2026',
        readTime: '5 min read',
        author: 'Auto Wirx Team',
        image: '/images/repair-bench.jpg',
        intro: "A cracked screen isn't just a cosmetic issue. It can affect your phone's performance, safety and usability. If you're unsure whether it's time for a replacement, here are the top signs to look for.",
        contentBlocks: [
          {
            title: '1. Visible Cracks or Shattered Glass',
            content: "The most obvious sign is visible damage. Even small cracks can spread over time and make the screen more fragile. A shattered screen can also cause injury, so it's best to get it replaced as soon as possible."
          },
          {
            title: '2. Unresponsive Touchscreen',
            content: "If your screen doesn't respond to touch or you notice delayed response, it could be due to internal damage. This can make it difficult to use your phone and may get worse with time."
          },
          {
            title: '3. Display Issues',
            content: 'Lines, flickering, dead pixels or black spots on your screen are clear indicators of screen damage. These issues can affect your viewing experience and may eventually make the screen unusable.'
          },
          {
            title: '4. Discoloration or Dark Patches',
            content: "If you notice yellow spots, dark patches or uneven colors, it's a sign that your screen is compromised. This usually happens due to physical impact or pressure."
          },
          {
            title: '5. Glass Feeling Rough or Sharp',
            content: "If the glass surface feels rough or you can feel sharp edges, it's not safe to continue using the device. A replacement will restore the smooth and safe surface of your phone."
          }
        ]
      },
      sidebar: {
        categories: [
          { name: 'Screen Repair', count: 12, active: true },
          { name: 'Battery Tips', count: 10 },
          { name: 'Charging Issues', count: 8 },
          { name: 'Camera Repair', count: 6 },
          { name: 'Water Damage', count: 7 },
          { name: 'Software Support', count: 9 },
          { name: 'Device Guide', count: 11 },
          { name: 'Maintenance Tips', count: 8 },
          { name: 'Repair Tips', count: 14 }
        ],
        popularPosts: [
          { title: 'How to Extend Your Smartphone Battery Life', date: 'Aug 18, 2026', image: '/images/repair-bench.jpg', link: '#' },
          { title: "Charging Port Not Working? Here's What You Can Do", date: 'Aug 15, 2026', image: '/images/repair-bench.jpg', link: '#' },
          { title: 'Blurred Photos? Common Camera Problems and Fixes', date: 'Aug 12, 2026', image: '/images/repair-bench.jpg', link: '#' },
          { title: 'What to Do If Your Phone Gets Water Damaged', date: 'Aug 10, 2026', image: '/images/repair-bench.jpg', link: '#' },
          { title: 'iPhone vs Android: Repair Differences Explained', date: 'Aug 02, 2026', image: '/images/repair-bench.jpg', link: '#' }
        ]
      },
      relatedArticles: [
        { category: 'Battery Tips', title: 'How to Extend Your Smartphone Battery Life', date: 'Aug 18, 2026', readTime: '6 min read', image: '/images/repair-bench.jpg', link: '#' },
        { category: 'Charging Issues', title: "Charging Port Not Working? Here's What You Can Do", date: 'Aug 15, 2026', readTime: '4 min read', image: '/images/repair-bench.jpg', link: '#' },
        { category: 'Maintenance Tips', title: 'How to Keep Your Device in Top Condition', date: 'Jul 30, 2026', readTime: '4 min read', image: '/images/repair-bench.jpg', link: '#' }
      ]
    }
  }
};

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('Added BlogDetails data to site.json');
