// Components
import Page from "../components/UI/Page/Page";
import Landing from "../components/UI/Landing/Landing";
import Section from "../components/UI/Section/Section";
import Banner from "../components/UI/Banner/Banner";
import Button from "../components/UI/Library/Button/Button";
import NextImage from "../components/UI/Library/NextImage/NextImage"
import Container from "../components/UI/Library/Container/Container"

// Styles
import styles from "../styles/pages/about.module.scss";

const About = () => {
    return (
        <Page
            head={{
                title: "About | D-MER",
                description: "Skills Development - Accessible To All.",
                canonical: "/contact",
            }}
            className={styles.about}
        >

            <Landing
                image="/images/pages/about/landing.jpeg">
                <h1>Skills Development <span>+</span> Accessible To All</h1>
            </Landing>

            <Section
                heading={<h2><span>Competence</span>  Management  System</h2>}
                keywords="Competence"
                className={styles.cms}
            >
                <h3>A good quality CMS will bring real and lasting benefits to any diving organization.</h3>
                <p>
                    Blended learning allows on-line studies complimented with on-site work place skills development for all members of staff with a structured, measured system that gives the organisation confidence that all personnel appointed to safety-critical and other relevant positions can carry out their jobs in an effective manner.
                </p>
                <p>
                    D+MER keeps track of performance. You can be satisfied that personnel have demonstrated their competence on the job and track and report performance.
                </p>
                <ul>
                    <li>
                        <i className="icon-square"></i>
                        Organizes content
                    </li>
                    <li>
                        <i className="icon-square"></i>
                        Addresses learning and assessment
                    </li>
                    <li>
                        <i className="icon-square"></i>
                        Tracks student progression and achievement
                    </li>
                    <li>
                        <i className="icon-square"></i>
                        Offers support and guidance to learners
                    </li>
                    <li>
                        <i className="icon-square"></i>
                        Allow access to on-line resources
                    </li>
                </ul>
            </Section>

            <Section
                keywords="Compliance"
                className={styles.cms2}
            >
                <h3>Designed to meet audit compliance and strengthen operational dive teams.</h3>
                <p>
                    D+MER offers blended learning and keeps track of performance. The combination of on-line learning with on-site skills assessment ensures easy accessibility to all.

                </p>
                <ul>
                    <li>
                        <i className="icon-square"></i>
                        Employees can learn in their own time at their own pace</li>
                    <li>
                        <i className="icon-square"></i>
                        Employers can track progress to ensure organization funded training and professional development activities are cost-effective, goal-oriented and productive</li>
                </ul>
                <p>
                    Tracking performance and collecting data is invaluable.
                </p>
                <ul>
                    <li>
                        <i className="icon-square"></i>
                        It defines patterns</li>
                    <li>
                        <i className="icon-square"></i>
                        It changes our approach</li>
                    <li>
                        <i className="icon-square"></i>
                        It changes the way we look at business and training</li>
                </ul>
            </Section>

            <Banner image="/images/pages/about/banner1.jpg">
                <h2> <span>Online</span> Continuous Professional Development <span>Courses</span>.</h2>
                <Button icon link="/courses#book">
                    Book a Course
                </Button>
            </Banner>

            <section className={styles.blocks}>
                <Container>
                    <div className={styles.grid}>
                        <div className={styles.block}>
                            <img src="/images/icons/multiple-users-silhouette.svg" alt="Icon" />
                            <h5>People Management</h5>
                            <p>
                                For companies to ensure Continuous Professional Development (CPD) the superintendent has a responsibility to manage the provision for training. They are expected to understand the Impact of training, supervision, support and coaching on the safety performance of personnel.
                    </p>
                        </div>
                        <div className={styles.block}>
                            <img src="/images/icons/verify.svg" alt="Icon" />
                            <h5>Industry Alignment</h5>
                            <p>
                                D+MER offers quality control and assurance in accordance with IMCA C003: Guidance on competence assurance and assessment.
                    </p>
                        </div>
                        <div className={styles.block}>
                            <img src="/images/icons/search.svg" alt="Icon" />
                            <h5>Quality Assurance</h5>
                            <p>
                                D+MER indicates quality assurance, giving industry the confidence in knowing that there is a robust quality check on training which is cross referenced to industry guidance.
                    </p>
                        </div>
                    </div>
                </Container>

            </section>

            <Section
                heading={<h2>Promoting <span>Skill</span> Retention <br /><span>+</span><br /> Preventing <span>Skill</span> Fade.</h2>}
                keywords="Competence"
                className={styles.skills}>
                <h3>D+MER is a powerful tool to ensure an effective common framework for all Commercial Diving job functions to demonstrate knowledge and skills development.</h3>
                <p>
                    <span>IMCA Diving Division:</span>
                    D+MER specifically addresses all 12 job functions within IMCA C003.
                </p>
                <ul>
                    <li>
                        <i className="icon-square"></i>
                        <span>D01 -</span> Diving Superintendent
                    </li>
                    <li>
                        <i className="icon-square"></i>
                        <span>D02 -</span> Bell Diving Supervisor
                    </li>
                    <li>
                        <i className="icon-square"></i>
                        <span>D03 -</span> Air (Surface Supplied) Diving Supervisor
                    </li>
                    <li>
                        <i className="icon-square"></i>
                        <span>D04 -</span> Bell (Saturation) Diver
                    </li>
                    <li>
                        <i className="icon-square"></i>
                        <span>D05 -</span> Air (Surface Supplied) Diver
                    </li>
                    <li>
                        <i className="icon-square"></i>
                        <span>D06 -</span> Life Support Supervisor
                    </li>
                    <li>
                        <i className="icon-square"></i>
                        <span>D07 -</span> Life Support Technician
                    </li>
                    <li>
                        <i className="icon-square"></i>
                        <span>D08 -</span> Assistant Life Support Technician
                    </li>
                    <li>
                        <i className="icon-square"></i>
                        <span>D09 -</span> Tender
                    </li>
                    <li>
                        <i className="icon-square"></i>
                        <span>D10 -</span> Senior Dive Technician
                    </li>
                    <li>
                        <i className="icon-square"></i>
                        <span>D11 -</span>  Senior Dive Technician (Surface Supplied Only)
                    </li>
                    <li>
                        <i className="icon-square"></i>
                        <span>D12 -</span> Dive Technician
                    </li>
                </ul>
            </Section>

            <Banner image="/images/pages/about/banner2.jpg" reverse>
                <h2><span>20+</span> Years Industry <span>Experience</span>.</h2>
            </Banner>

            <Section
                heading={<h2>Our <span>Team</span></h2>}
                keywords="Our Team."
                className={styles.team}
            >
                <h3>Our team of professionals consist of multiple highly skilled &amp; qualified members with decades of collective team experience.</h3>
                <div className={styles.grid}>
                    <div className={styles.member}>
                        <div className={styles.image}>
                            <NextImage
                                src="/images/pages/about/team/bridget.jpg"
                                alt="Team Member - Bridget"
                                width={500}
                                background
                            />
                        </div>
                        <div className={styles.text}>
                            <h5>Bridget Thomson</h5>
                            <p>Chief Executive Officer</p>
                        </div>
                    </div>
                    <div className={styles.member}>
                        <div className={styles.image}>
                            <NextImage
                                src="/images/pages/about/team/juliette.jpg"
                                alt="Team Member - Juliette"
                                width={500}
                                background
                            />
                        </div>
                        <div className={styles.text}>
                            <h5>Juliette van Vuuren</h5>
                            <p>Operations Manager</p>
                        </div>
                    </div>
                </div>
            </Section>

        </Page>
    )
}

export default About
