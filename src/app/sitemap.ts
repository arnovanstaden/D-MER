import { MetadataRoute } from 'next';

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const url = 'https://www.dmerworldwide.com';

  const basicPages = ['', 'about', 'courses', 'courses/book', 'contact'];

  const basicPagesSitemap = basicPages.map((page) => ({
    url: `${url}/${page}`,
    lastModified: new Date(),
  }));

  return basicPagesSitemap;
}

export default sitemap