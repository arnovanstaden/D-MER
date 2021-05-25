// Components
import Page from "../components/UI/Page/Page";
import Landing from "../components/UI/Landing/Landing";
import Button from "../components/UI/Library/Button/Button";
import Container from "../components/UI/Library/Container/Container"

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
            className={styles.about}
        >

            <Landing
                image="/images/pages/courses/landing.jpeg">
                <h1><span>Online</span> Continuous Professional Development <span>Courses</span></h1>
            </Landing>



        </Page>
    )
}

export default Courses
