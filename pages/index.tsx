// Components
import Page from "../components/UI/Page/Page";
import Landing from "../components/UI/Landing/Landing";
import Section from "../components/UI/Section/Section";

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

      <Section
        heading={<h2><span>Who</span> are we?</h2>}
        keywords="Who Are We?"
      >
        <h3>The D+MER Golden Thread</h3>
        <p>
          Our team firmly believe that Every member of a commercial dive operation must follow the golden thread to ensure an effective outcome in the event of a medical emergency. The Golden Thread ensures The Right People + The Right Equipment + The Right Training to ensure an Effective and Efficient Outcome for all in the event of a Medical Emergency.
        </p>

        <p>
          D+MER Worldwide offers the Commercial Diving Community - Online Knowledge modules to stay in-date! Access to on-site Skills assessment and training centres globally. The right Equipment: DMAC 015 compliant medical kits, tailor made to suit your dive spread and needs.
        </p>

      </Section>

    </Page >
  )
}

export default Home
