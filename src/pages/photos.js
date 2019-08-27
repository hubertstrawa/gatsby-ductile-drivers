import React from 'react'
import Layout from '../components/Layout'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import photoStyles from '../styles/Photos.module.scss'
import img1 from '../assets/photos/img1.jpg'
import img2 from '../assets/photos/img2.jpg'
import img3 from '../assets/photos/img3.jpg'
import img4 from '../assets/photos/img4.jpg'
import img5 from '../assets/photos/img5.jpg'
import img6 from '../assets/photos/img6.jpg'
import img7 from '../assets/photos/img7.jpg'
import img8 from '../assets/photos/img8.jpg'
import img9 from '../assets/photos/img9.jpg'
import img10 from '../assets/photos/img10.jpg'
import img11 from '../assets/photos/img11.jpg'

const Photos = () => {

    return (
        <Layout>
            <div className={photoStyles.wrapper}>
            <Carousel showThumbs={false} useKeyboardArrows={true} showStatus={false}>
                <div className={photoStyles.imgDiv}>
                    <img src={img1}/>
                </div>
                <div className={photoStyles.imgDiv}>
                    <img src={img2} />
                </div>
                <div className={photoStyles.imgDiv}>
                    <img src={img3} />
                </div>
                <div className={photoStyles.imgDiv}>
                    <img src={img4} />
                </div>
                <div className={photoStyles.imgDiv}>
                    <img src={img5} />
                </div>
                <div className={photoStyles.imgDiv}>
                    <img src={img6} />
                </div>
                <div className={photoStyles.imgDiv}>
                    <img src={img7} />
                </div>
                <div className={photoStyles.imgDiv}>
                    <img src={img8} />
                </div>
                <div className={photoStyles.imgDiv}>
                    <img src={img9} />
                </div>
                <div className={photoStyles.imgDiv}>
                    <img src={img10} />
                </div>
                <div className={photoStyles.imgDiv}>
                    <img src={img11} />
                </div>
            </Carousel>
            </div>
        </Layout>
    )
}

export default Photos
