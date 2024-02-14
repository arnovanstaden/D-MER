import { Montserrat, Poppins } from 'next/font/google'
import classNames from 'classnames';
import '@styles/global.scss';
import ProviderWrapper from 'src/context/ProviderWrapper';

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600'],
})

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" className={classNames(montserrat.variable, poppins.variable)}>
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