// Components
import Landing from '@components/UI/Landing/Landing';
import Section from '@components/UI/Section/Section';
import Banner from '@components/UI/Banner/Banner';
import Button from '@components/UI/Library/Button/Button';

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'D-MER Worldwide',
  description: 'D-MER Worldwide is an Online learning platform and competence management system',
}

const Home = () => {
  return (
    <main>
      <Landing
        image="/images/pages/home/landing.jpg">
        <h1>Online <span>learning platform</span> and competence management system</h1>
      </Landing>

      <Section
        heading={<h2><span>Who</span> Are We?</h2>}
        keywords="Who Are We?"
      >
        <h3>The D+MER Golden Thread</h3>
        <p>Our team firmly believe that every member of a commercial dive operation must follow the
          golden thread to ensure an effective outcome in the event of a medical emergency.</p>

        <p>The Golden Thread ensures The Right People + The Right Equipment + The Right Training =
          Effective and Efficient Outcome.</p>

        <p>D+MER Worldwide offers the Commercial Diving Community Online Knowledge Modules
          to stay in-date and avoid skill fade!</p>

        <p>We provide access to on-site skills assessment and training centres globally.</p>

        <p>We offer DMAC 015 compliant medical kits for offshore dive operations, inshore compliant
          medical equipment, as well as personalised first aid equipment. Our equipment is tailor made
          to suit your dive spread and dive needs.</p>

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
        <p>With over 20 years’ experience in the Commercial Diving industry, we have developed the
          D+MER learning platform, to ensure all dive team members have the ability to refresh their
          knowledge of industry standards and expectations in their given dive team position.</p>

        <p>Companies are offered access to their members portfolios as a means of measuring competency
          in the workplace. This is ensured through Continued Professional Development (CPD)
          modules, completed for each discipline by the dive team's respective personnel.</p>
      </Section>

      <Banner image="/images/pages/home/banner2.jpg" reverse>
        <h2>Start <span>Anywhere</span>. Start <span>Anytime</span>.</h2>
        <Button icon link="/courses#book">
          Online Courses
        </Button>
      </Banner>

      <Section
        heading={<h2><span>Why</span> Us?</h2>}
        keywords="Why Us?"
      >
        <h3>We are passionate about diver safety</h3>
        <p> Our team comprises subject matter experts with extensive experience across various faculties
          of the Commercial Diving arena globally, where these experts collaborated in the consulting,
          training, design and manufacturing of the DMAC 015 medical equipment kits and development
          of the online D+MER blended learning courses.</p>

        <p>D+MER offers a unique way to mitigate knowledge gaps and lower skill fade. For added value,
          all participants have access to an online coach if required for guidance. Furthermore, the DMT
          or First Aider can have a full skill assessment of required competencies carried out at various
          Skill Assessment Centres globally, for added member convenience and quality assurance for
          industry.</p>

        <p>Each member of our team is passionate about diver safety in industry, from the Dive Tender,
          Diver Medic, Supervisor and Dive Superintendent to the appointed DMA.</p>
      </Section>

    </main >
  )
}

export default Home
