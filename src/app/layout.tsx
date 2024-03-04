import { Montserrat, Poppins } from 'next/font/google'
import classNames from 'classnames';
import '@styles/global.scss';
import ProviderWrapper from 'src/context/ProviderWrapper';

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  preload: true,
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600'],
  preload: true,
})

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const fontClasses = classNames(
    montserrat.variable,
    poppins.variable,
  )

  return (
    <html lang="en" className={fontClasses}>
      <link rel="icon" type="image/png" href="/images/logos/favicon.png" />
      <body>
        <ProviderWrapper>
          {children}
        </ProviderWrapper>
      </body>
    </html>
  )
}
export default RootLayout;