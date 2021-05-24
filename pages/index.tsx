// Components
import Page from "../components/UI/Page/Page";
import Landing from "../components/UI/Landing/Landing";

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
      <Landing
        image="/images/pages/home/landing.jpeg">
        <h1>Online <span>learning platform</span> and competence management system</h1>
      </Landing>
    </Page >
  )
}

export default Home
