import Image from 'next/image';
import ClassNames from "classnames";

import styles from "./next-image.module.scss";

interface IProps {
    src: string;
    alt: string;
    width?: number;
    background?: boolean;
    priority?: boolean;
    alignTop?: boolean;
}

// next/image creates unintended image styles. This components rectifies some styles to use the components just like a normal image, but still making use of the optimization & sizing features

const NextImage = ({ src, alt, width, background, priority, alignTop }: IProps) => {
    const imageClasses = ClassNames(
        styles.image,
        alignTop ? styles.alignTop : null
    )

    if (width) {
        const containerClasses = ClassNames(
            styles.container,
            styles.intrinsic,
            background ? styles.background : null
        )

        return (
            <div className={containerClasses}>
                <Image
                    src={src}
                    alt={`Picture of ${styles.image}`}
                    layout="intrinsic"
                    className={imageClasses}
                    width={width}
                    height="auto"
                    priority={priority}
                />
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <Image
                src={src}
                alt={`Picture of ${styles.image}`}
                layout="fill"
                className={imageClasses}
                priority={priority}
            />
        </div>
    )
}

export default NextImage
