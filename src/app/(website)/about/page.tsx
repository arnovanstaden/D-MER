// Components
import Landing from '@components/UI/Landing/Landing';
import Section from '@components/Layout/Section/Section';
import Banner from '@components/UI/Banner/Banner';
import Button from '@components/UI/Button/Button';
import Container from '@components/Layout/Container/Container'
import SquareIcon from '@mui/icons-material/Square';

// Styles
import styles from './styles.module.scss';

import type { Metadata } from 'next'
import { generateCustomMetaData } from '@utils/metadata';

export const metadata: Metadata = generateCustomMetaData({
  title: 'About | D-MER',
  description: 'Skills Development - Accessible To All.',
})

const About = () => {
  return (
    <main className={styles.about}>
      <Landing
        image="/images/pages/about/landing.jpg"
      >
        <h1>Skills Development <span>+</span> Accessible To All</h1>
      </Landing>

      <Section
        heading={<h2><span>Competence</span>  Management  System (CMS)</h2>}
        keywords="Competence"
        className={styles.cms}
      >
        <h3>A good quality CMS will bring real and lasting benefits to any diving organization.</h3>
        <p>A good quality Competence Management System will bring real and lasting benefits to any
          diving organization. Blended learning allows online studies complimented with on-site
          workplace skills development for all members of staff. The structured, measured system will
          ensure full confidence to the organisation, that all personnel appointed to safety-critical and
          other relevant positions can carry out their jobs in an effective manner.</p>

        <p> D+MER keeps track of performance, where you can be satisfied that your personnel have
          demonstrated their competence for the job!</p>

        <ul>
          <li>
            <SquareIcon className={styles.icon} />
            Organizes content
          </li>
          <li>
            <SquareIcon className={styles.icon} />
            Addresses learning and assessment
          </li>
          <li>
            <SquareIcon className={styles.icon} />
            Tracks student progression and achievement
          </li>
          <li>
            <SquareIcon className={styles.icon} />
            Offers support and guidance to learners
          </li>
          <li>
            <SquareIcon className={styles.icon} />
            Allows access to on-line resources
          </li>
        </ul>
      </Section>

      <Section
        keywords="Compliance"
        className={styles.cms2}
      >
        <h3>Designed to meet audit compliance and strengthen operational dive teams.</h3>
        <p>
          D+MER offers blended learning, which keeps track of performance. The combination of online
          learning with on-site skills assessment ensures easy accessibility to all.
        </p>
        <ul>
          <li>
            <SquareIcon className={styles.icon} />
            Employees can learn in their own time, at their own pace</li>
          <li>
            <SquareIcon className={styles.icon} />
            Employers can track progress to ensure organization funded training and professional
            development activities are cost-effective, goal-oriented and productive
          </li>
        </ul>
        <p>
          Tracking performance and collecting data is invaluable.
        </p>
        <ul>
          <li>
            <SquareIcon className={styles.icon} />
            It defines patterns</li>
          <li>
            <SquareIcon className={styles.icon} />
            It changes our approach</li>
          <li>
            <SquareIcon className={styles.icon} />
            It changes the way we look at business and training</li>
        </ul>
      </Section>

      <Banner image="/images/pages/about/banner1.jpg">
        <h2> <span>Online</span> Continuous Professional Development <span>Courses</span>.</h2>
        <Button icon link="/courses/book">
          Online Courses
        </Button>
      </Banner>

      <section className={styles.blocks}>
        <Container>
          <div className={styles.grid}>
            <div className={styles.block}>
              <img src="/images/icons/multiple-users-silhouette.svg" alt="Icon" />
              <h5>People Management</h5>
              <p>
                For companies to ensure Continuous Professional Development (CPD) the superintendent has  a responsibility to manage the provision for training. They are expected to understand  the impact of training, supervision, support and coaching on the safety performance of  personnel.
              </p>
            </div>
            <div className={styles.block}>
              <img src="/images/icons/verify.svg" alt="Icon" />
              <h5>Industry Alignment</h5>
              <p>
                D+MER offers quality control and assurance in accordance with IMCA C003: Guidance on  competence assurance and assessment.
              </p>
            </div>
            <div className={styles.block}>
              <img src="/images/icons/search.svg" alt="Icon" />
              <h5>Quality Assurance</h5>
              <p>
                D+MER indicates quality assurance, giving industry the confidence in knowing that there is a  robust quality check on training, which is cross referenced with industry guidance.
              </p>
            </div>
          </div>
        </Container>

      </section>

      <Section
        heading={<h2>Promoting <span>Skill</span> Retention <br /><span>+</span><br /> Preventing <span>Skill</span> Fade.</h2>}
        keywords="Competence"
        className={styles.skills}>
        <h3>D+MER is a powerful tool to ensure an effective common framework for all Commercial  Diving job functions to demonstrate knowledge and skills development.
        </h3>
        <p>
          <span>IMCA Diving Division:</span>
          D+MER specifically addresses all 12 job functions within IMCA C003.
        </p>
        <ul>
          <li>
            <SquareIcon className={styles.icon} />
            <span>D01 -</span> Diving Superintendent
          </li>
          <li>
            <SquareIcon className={styles.icon} />
            <span>D02 -</span> Bell Diving Supervisor
          </li>
          <li>
            <SquareIcon className={styles.icon} />
            <span>D03 -</span> Air (Surface Supplied) Diving Supervisor
          </li>
          <li>
            <SquareIcon className={styles.icon} />
            <span>D04 -</span> Bell (Saturation) Diver
          </li>
          <li>
            <SquareIcon className={styles.icon} />
            <span>D05 -</span> Air (Surface Supplied) Diver
          </li>
          <li>
            <SquareIcon className={styles.icon} />
            <span>D06 -</span> Life Support Supervisor
          </li>
          <li>
            <SquareIcon className={styles.icon} />
            <span>D07 -</span> Life Support Technician
          </li>
          <li>
            <SquareIcon className={styles.icon} />
            <span>D08 -</span> Assistant Life Support Technician
          </li>
          <li>
            <SquareIcon className={styles.icon} />
            <span>D09 -</span> Tender
          </li>
          <li>
            <SquareIcon className={styles.icon} />
            <span>D10 -</span> Senior Dive Technician
          </li>
          <li>
            <SquareIcon className={styles.icon} />
            <span>D11 -</span>  Senior Dive Technician (Surface Supplied Only)
          </li>
          <li>
            <SquareIcon className={styles.icon} />
            <span>D12 -</span> Dive Technician
          </li>
        </ul>
      </Section>

      <Banner image="/images/pages/about/banner2.jpg" reverse>
        <h2><span>20+</span> Years Industry <span>Experience</span>.</h2>
      </Banner>
    </main>
  )
}

export default About
