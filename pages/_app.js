import MainLayout from '@/src/components/layout/main-layout';
import '../styles/general.sass'
import '../styles/globals.css'


function MyApp({Component, pageProps}){
    return(
        <>
           <MainLayout>
                <Component {...pageProps}/>
            </MainLayout>
        </>
    );
}

export default MyApp