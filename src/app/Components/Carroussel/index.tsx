'use client'

import './Carroussel.css'

// Importando componentes do React
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Importando os estilos dos componentes do React
import 'swiper/css';
import 'swiper/css/navigation';

type CarrousselProps = {
    children: React.ReactNode
}

export default function Carroussel(props: CarrousselProps) {
    return (
        <Swiper navigation={true} className="swiper" modules={[Navigation]} speed={600} grabCursor={true}>
                {props.children}
        </Swiper>
    )
}