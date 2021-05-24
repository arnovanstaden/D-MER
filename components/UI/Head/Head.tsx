import NextHead from 'next/head';

interface THead {
    title: string;
    description: string;
    canonical: string;
    robots?: boolean;
}

export default function Head(props: THead) {
    const date = new Date();
    const currentYear = date.getFullYear();

    return (
        <NextHead>
            <title>{props.title}</title>
            <link rel="icon" type="image/png" href="/images/logos/favicon.png" />
            <meta name="description" content={props.description} />
            <meta name="robots" content={props.robots === false ? "noindex, nofollow" : "index, follow"} />
            {props.canonical ? <link rel="canonical" href={`https://www.dmerworldwide.com${props.canonical}`} /> : null}


            <meta name="author" content="Webdacity" />
            <meta name="copyright" content={`D-MER © ${currentYear}`} />
            <meta name="theme-color" content="#ffffff" />

            {/* Open Graph */}
            <meta property="og:site_name" content="D-MER Worldwide" />
            <meta property="og:title" content={props.title} />
            <meta property="og:description" content={props.description} />
            <meta property="og:type" content="Website" />
            {props.canonical ? <meta property="og:url" content={`https://www.dmerworldwide.com${props.canonical}`} /> : null}
            <meta property="og:image" name="image" content="https://www.dmerworldwide.com/social.png" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="500" />
            <meta property="og:image:height" content="500" />
            <meta property="og:image:alt" content="D-MER Logo" />
        </NextHead>
    )
}
