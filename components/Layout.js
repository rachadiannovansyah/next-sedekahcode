import Head from 'next/head'
import Navbar from './Navbar'

export default function Layout(props) {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
                <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1200px-Go_Logo_Blue.svg.png"></link>
            </Head>
            <Navbar/>
            <div className="my-8">
                {props.children}
            </div>

            <footer className="py-5 mt-5 border-t">
                <div className="container">
                    Dummy {props.title} footer
                </div>
            </footer>
        </div>
    )
}