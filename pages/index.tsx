import Page from "../components/UI/Page/Page";

// Styles
import styles from "../styles/pages/index.module.scss";

const Home = () => {
  return (
    <Page
      head={{
        title: "D-MER Worldwide",
        description: "D-MER Worldwide is an Online learning platform and competence management system",
        canonical: "/",
      }}
      className={styles.home}
    >
    </Page>
  )
}

export default Home
