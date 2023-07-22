import React from 'react';
import pk from './pics/pk.svg';
import ParallaxDiv from './ParallaxDiv';
import philipp from "../philipp.jpg"

function Home(props) {
    return (
        <div className='h-fit md:h-[90vh] w-screen md:w-[80%] md:px-10 font-urbanist relative mx-auto'>
            
            <ParallaxDiv
                offset={100}
                className='relative md:absolute w-screen mx-auto h-[400px] md:w-[35%] max-w-[500px] min-w-[300px] md:left-[10%] top-[0%] md:top-[10%] md:shadow-lg'
            >
                <img className="md:rounded-md" src={philipp}/>
                
            </ParallaxDiv>

            
            <ParallaxDiv
                className='invisible md:visible absolute mx-auto w-[100%] max-w-[300px] z-10 top-[6%] md:top-[50%] md:left-[50px]'
                offset={200}
                >
                <img src={pk}/>
                </ParallaxDiv>
            
            
            
            <ParallaxDiv
                className='relative h-fit w-screen mx-auto md:absolute top-[20px] md:top-[20%] max-w-[430px] z-20 min-w-[300px] md:left-[45%] p-4 bg-isabelline bg-opacity-90 md:rounded-lg shadow-lg '
                offset={50}
                >
                <h1 className='text-3xl'>Hello! I am <p className="font-semibold text-[35px] font-instrument inline">Philipp Körber</p>, an aspiring web developer with background in organbuilding and culinary arts.</h1>
                <p className='text-xl'>After completing my bachelor's degree in organbuilding back in Germany, I set out to travel the world. Finally based in Tokyo, I decided in September 2022 to start learning how to code in my free time, with a focus on frontend. I'm excited to showcase my skills and projects through my React portfolio.</p>
                
            </ParallaxDiv>
        
        </div>
    );
}

export default Home;