import Head from 'next/head'
import Navbar from './Navbar'

const Layout = (props) => (
    <div>
        <Head>
            <title>BitzPrice</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
        </Head>

        <Navbar />
        <div className="container">
            {props.children}
        </div>
    </div>
)

export default Layout;