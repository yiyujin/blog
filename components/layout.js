import Header from './header'
import Footer from './footer';

export default function Layout({children}){
    return (
        <div className='bg-primary'>
            <Header/>
            {/* <h1>Layout</h1> */}
            <div>
                {children}
            </div>
            <Footer/>
        </div>
    );
}