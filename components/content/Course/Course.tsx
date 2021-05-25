// Components
import Button from "../../UI/Library/Button/Button"
// Styles
import styles from "./course.module.scss";

// interface IProps {
//     title: string;
//     objective: string;
//     description: string;
//     price: number
// }

// const Course = (props: IProps) => {
const Course = () => {
    return (
        <article className={styles.course}>
            <div className={styles.image}>
                <img src="/images/logos/Dmer-Logomark.svg" alt="" />
            </div>
            <div className={styles.content}>
                <h3>DMAC 11 First Aid for the Commercial Dive Team</h3>

                <div className={styles.row}>
                    <h5>Objective</h5>
                    <p>Provision of first aid and the training of divers, supervisors and members of dive teams in first aid.</p>
                </div>
                <div className={styles.row}>
                    <h5>Description</h5>
                    <p>Commercial diving exposes divers to a variety of hazards specific to their work in addition to many hazards shared with other workers. While these hazards can be well controlled by adherence to good working practices, the potential for serious injury remains. As a result there is a requirement for contingency planning for medical emergencies caused both by accident and illness occurring during diving operations. Fist Aid is the first step !</p>
                </div>
                <div className={`${styles.row} ${styles.price}`}>
                    <h5>Price</h5>
                    <p>R 900</p>
                </div>
                <div className={styles.button}>
                    <Button icon>Book</Button>
                </div>
            </div>
        </article>
    )
}

export default Course
