'use client'
import ContainerContact from "@/components/contact";
import Footer from "@/components/footer";
// import NavBar from "@/components/header";
import ReactPlayer from 'react-player'

export default function Contact() {
    return (
      <main>
        {/* <NavBar/> */}
        <ContainerContact/>
        <Footer/>
        {/* <video 
          preload="auto"
          playsInline 
          autoPlay
          // muted 
          loop
          controls
          playbackRate="1.5"
          >
          <source src="https://drive.google.com/file/d/1H7-kR1_X8A7n1aGFMQ0SDxW7ST2q3PIj/view?usp=drive_link" type="video/mp4" /> 
        # Arrumar url
        </video> */}
        <ReactPlayer 
        url='https://drive.google.com/file/d/1H7-kR1_X8A7n1aGFMQ0SDxW7ST2q3PIj/view'
        width="320px" 
        height="240px" 
        controls={true}
        playbackRate={1.5}
        />
        {/* <video 
        // playbackRate="1.5"
        autoPlay
        preload="auto"
        >
            
            
            <source src="https://drive.google.com/file/d/1H7-kR1_X8A7n1aGFMQ0SDxW7ST2q3PIj/view?usp=drive_link" type="video/mp4"/>
        </video>   */}
      </main>

    )
}
