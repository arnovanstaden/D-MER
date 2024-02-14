import { Metadata } from 'next';

/**
 * Generates Custom Meta Data for Pages
 * @param appRoute predefined app route key
 * @param customPrefix custom string to prefix title
 * @returns Metadata
 */

interface IProps {
  title: string;
  description: string;
  image?: string;
}

export const generateCustomMetaData = ({ title, description, image }: IProps): Metadata => {
  const url = 'https://www.dmerworldwide.com';

  const images = image ?
    [{
      url: image,
      width: 500,
      height: 500,
    }]
    : [{
      url: '/images/logos/og_image.png',
      width: 500,
      height: 500,
    }]

  const metadata: Metadata = {
    title,
    icons: ['/images/logos/favicon.png'],
    description,
    metadataBase: new URL(url),
    openGraph: {
      description,
      url: url,
      siteName: 'D-MER Worldwide',
      images,
    },
  };
  return metadata;

};