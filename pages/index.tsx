// Components
import Page from "../components/UI/Page/Page";
import Landing from "../components/UI/Landing/Landing";
import Section from "../components/UI/Section/Section";
import Banner from "../components/UI/Banner/Banner";
import Button from "../components/UI/Library/Button/Button";

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
        heading={<h2><span>Who</span> Are We?</h2>}
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

      <Banner image="/images/pages/home/banner1.jpg">
        <h2>The D-MER <span>Golden Thread</span></h2>
        <p> <i className="icon-plus"></i> The Right People</p>
        <p> <i className="icon-plus"></i> The Right Equipment</p>
        <p> <i className="icon-plus"></i> The Right Training</p>
      </Banner>

      <Section
        heading={<h2>Our <span>Experience</span>.</h2>}
        keywords="Our Experience."
        reverse
      >
        <h3>20+ Years Industry Experience</h3>
        <p>
          With 20 years’ experience in the Commercial Diving industry, we have developed D+MER learning platform over the past 5 years to ensure all dive team members have the ability to refresh their knowledge of industry standards and expectations in their given position within a dive team.
        </p>

        <p>
          Companies are offered access to their members portfolios as a means of measuring and gauging competency in the workplace, through Continued Professional Development (C.P.D.) modules completed for each discipline by the dive team's respective personnel.

        </p>
      </Section>

      <Banner image="/images/pages/home/banner2.jpg" reverse>
        <h2>Start <span>Anywhere</span>. Start <span>Anytime</span>.</h2>
        <Button icon>
          Book a Course
        </Button>
      </Banner>

      <Section
        heading={<h2><span>Why</span> Us?</h2>}
        keywords="Why Us?"
      >
        <h3>We are passionate about diver safety</h3>
        <p>
          Our team comprises subject matter experts with extensive experience across various faculties of the Commercial Diving arena globally. Including consulting, training, design and manufacture of DMAC 015 medical equipment kits and online D+MER blended learning development.

        </p>

        <p>
          D+MER offers a unique way to ensure knowledge gap removal and lower skill fade. All participants have an online coach, if required for guidance. Furthermore, the DMT or First Aider can have a full skill assessment of required competencies carried at various Skill Assessment Centers globally, for added member convenience and quality assurance for industry.
        </p>

        <p>
          Each member of the team and is passionate about diver safety in industry from Dive Tender to the Diver Medic, complete dive team with Supervisor and Dive Superintendent.
        </p>

      </Section>

    </Page >
  )
}

export default Home
