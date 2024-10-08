import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Layout = ({children}) => {
    const {pathname} = useRouter()
    return (
        <>
            <Head>
                <title>Study ReactJs/NextJs</title>
                <meta name="description" content="Study ReactJs/NextJs" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div style={{ paddingBottom: '50px' }}>
                {pathname !== '/' && <Link href="/">Back</Link>}
            </div>
            {children}
        </>
    )
}

export default Layout;