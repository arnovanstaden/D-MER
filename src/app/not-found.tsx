// Components
import Page from '@components/UI/Page/Page';
import Button from '@components/UI/Library/Button/Button';

// Styles
import styles from './styles.module.scss';

const PageNotFound = () => {
  return (
    <Page
      head={{
        title: 'Page Not Found',
        canonical: '/404',
        description: 'Page not found.',
        robots: false
      }}
      className={styles.PageNotFound}
    >
      <div className={styles.error}>
        <h1>4</h1>
        <img src="/images/logos/Dmer-Logomark.svg" alt="" />
        <h1>4</h1>
      </div>
      <p>The page you are looking for does not exist.</p>
      <Button link="/" icon>Go Home</Button>
    </Page>
  )
}

export default PageNotFound
