import { Montserrat, Poppins } from 'next/font/google'
import classNames from 'classnames';
import '@styles/global.scss';

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--heading-font',
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font',
  weight: ['300', '400', '500', '600'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={classNames(montserrat.variable, poppins.variable)}>
      <link rel="icon" type="image/png" href="/images/logos/favicon.png" />
      <body>{children}</body>
    </html>
  )
}