import { useEffect } from 'react';
import { Navigate, Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import { LoginPage } from '../auth';
// import { CalendarPage } from '../calendar';
import { useAuthStore } from '../hooks';

//Pages
import { AboutUsPrincipal, Services, ServicesOur, Home, 
    ContactUs, Banner, CTA, AboutUs, Calculator, Testimonials, Partners,
ServicesHome, ServicesHomeDetail } from '../pages';

          


export const AppRouter = () => {

    const { status, checkAuthToken } = useAuthStore();
    // // const authStatus = 'not-authenticated'; // 'authenticated'; // 'not-authenticated';
    
    useEffect(() => {
        checkAuthToken();
    }, [])
    


    status === 'authenticated'


    // if ( status === 'checking' ) {
    //     return (
    //         <h3>Cargando...</h3>
    //     )
    // }
    console.log("logado...")

    
    return (
    

        <Routes>
            
            {
                ( status === 'not-authenticated')  
                    ? (
                        <>
                            {/* <Route path="/auth/*" element={ <LoginPage /> } /> */}
                            {/* <Route path="/*" element={<Navigate to="/auth/login" />} /> */}
                            

                            <Route path="/" element={<Home />} />
                            <Route path="/*" element={<Home />} />
                            <Route path="/*" element={ <Navigate to="/*" /> } />
                            
                            <Route path="/about" element={<AboutUsPrincipal />} />
                            {/* <Route path="/services" element={<Services />} /> */}
                            <Route path="/our-services" element={<ServicesOur />} />
                            <Route path="/contact-us" element={<ContactUs />} />
                            <Route path="/testimonials" element={<Testimonials />} />
                            
                            <Route path="/services" element={<ServicesHome />} />
                            <Route path="/services/:serviceId" element={<ServicesHomeDetail />} />   


                            {/* <Route path="/auth/*" element={ <Home /> } />                            
                            
                            <Route path="/booking" element={<Booking />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/destination" element={<Destination />} />
                            <Route path="/package" element={<Package />} />
                            <Route path="/service" element={<Service />} />
                            <Route path="/travel" element={<Team />} />
                            <Route path="/testimonial" element={<Testimonial />} />
                            <Route path="/404" element={<Pag404 />} /> */}


                        </>
                    )
                    : (
                        <>
                            {/* <Route path="/auth/*" element={ <LoginPage /> } /> */}
                            {/* <Route path="/" element={ <CalendarPage /> } /> */}
                            {/* <Route path="/*" element={ <Navigate to="/" /> } /> */}

                            <Route path="/" element={<Home />} />
                            <Route path="/*" element={<Home />} />
                            <Route path="/*" element={ <Navigate to="/*" /> } />
                            <Route path="/about" element={<AboutUsPrincipal />} />
                            {/* <Route path="/services" element={<Services />} /> */}
                            <Route path="/our-services" element={<ServicesOur />} />
                            <Route path="/contact-us" element={<ContactUs />} />
                            
                                      
                            <Route path="/services" element={<ServicesHome />} />
                            <Route path="/services/:serviceId" element={<ServicesHomeDetail />} />   

                            {/* <Route path="/about" element={<About />} />
                            <Route path="/booking" element={<Booking />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/destination" element={<Destination />} />
                            <Route path="/package" element={<Package />} />
                            <Route path="/service" element={<Service />} />
                            <Route path="/travel" element={<Team />} />
                            <Romeu-projeto-react/src/apimeu-projeto-react/src/apiute path="/testimonial" element={<Testimonial />} />
                            <Route path="/404" element={<Pag404 />} />
                        
                         */}
                        
                        </>
                    )
            }

            </Routes>
    
    
    )
}
