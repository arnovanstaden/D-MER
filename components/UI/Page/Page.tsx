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
                {props.children}
            </main>
        </>
    )
}

export default Page
