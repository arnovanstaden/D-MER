import ClassNames from "classnames";

// Components
import Head from "../Head/Head";
import Landing from "../Landing/Landing";

interface IProps {
    children: React.ReactNode;
    head: {
        title: string;
        description: string;
        canonical: string;
        robots?: boolean;
    },
    landing?: {
        text: string;
        image: string;
    }
    className: string
}

const Page = (props: IProps) => {
    return (
        <>
            <Head
                {...props.head}
            />
            <main className={props.className}>
                {props.landing ? <Landing {...props.landing} /> : null}
                {props.children}
            </main>
        </>
    )
}

export default Page
