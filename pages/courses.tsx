import { GetStaticProps } from 'next';
import { ICourse } from "../utils/interfaces";

// Components
import Page from "../components/UI/Page/Page";
import Landing from "../components/UI/Landing/Landing";
import Container from "../components/UI/Library/Container/Container";
import Course from "../components/content/Course/Course";

// Styles
import styles from "../styles/pages/courses.module.scss";

const Courses = ({ courses }: { courses: ICourse[] }) => {
    return (
        <Page
            head={{
                title: "Courses | D-MER",
                description: "Book an online CPD course.",
                canonical: "/courses",
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
                        {courses.map((course, index) => (<Course {...course} key={index} />))}
                    </div>
                </Container>
            </section>


        </Page>
    )
}

export default Courses

export const getStaticProps: GetStaticProps = async () => {
    const coursesResponse = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_API_URL}/courses`);
    const courses = await coursesResponse.json();

    return {
        props: {
            courses
        },
    }
}
