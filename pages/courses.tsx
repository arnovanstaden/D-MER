// Components
import Page from "../components/UI/Page/Page";
import Landing from "../components/UI/Landing/Landing";
import Container from "../components/UI/Library/Container/Container";
import Course from "../components/content/Course/Course";

// Styles
import styles from "../styles/pages/courses.module.scss";

const Courses = () => {
    return (
        <Page
            head={{
                title: "About | D-MER",
                description: "Book an online CPD course.",
                canonical: "/about",
            }}
            className={styles.courses}
        >

            <Landing
                image="/images/pages/courses/landing.jpeg">
                <h1><span>Online</span> Continuous Professional Development <span>Courses</span></h1>
            </Landing>

            <section>
                <Container>
                    <div className={styles.grid}>
                        <Course />
                    </div>
                </Container>
            </section>


        </Page>
    )
}

export default Courses
