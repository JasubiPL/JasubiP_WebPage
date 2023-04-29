// Importa el módulo "fs" para escribir el archivo sitemap.xml
import fs from 'fs';

const EXTERNAL_DATA_URL = 'https://unaopinionmas.vercel.app/posts';

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     ${posts
       .map(({ id }) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${id}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getStaticProps will do the heavy lifting
}

export async function getStaticProps() {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL);
  const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  // Write the sitemap.xml file to the public directory
  fs.writeFileSync('public/sitemap.xml', sitemap);

  return {
    props: {},
  };
}

export default SiteMap;
