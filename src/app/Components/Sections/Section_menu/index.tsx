"use client"

// Importando hooks do React
import { useEffect, useState } from "react";

// Importando folha de estilo
import './Section_menu.css'

// Importando componentes do React
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Importando os estilos dos componentes do React
import 'swiper/css';
import 'swiper/css/navigation';

// Importando componentes
import Title from '../../Title';
import Card_menu from '../../Card/Card_menu';

// Importando propriedade do objeto
import { pizza } from "@/app/types/Pizza_propierts";

// Importando função de requisição
import { getAllMenu } from "@/app/Functions/Functions_request";

export default function Section_menu() {

    const [data, setData] = useState<pizza[]>([]);

    // Essa função executa a função de requisição importada e atribui o valor ao array do cardápio
    const Get = async () => {

        let data = await getAllMenu();

        if (data !== undefined && data !== null) {
            // Atribuindo o valor retornado da função de requisição ao data que exibe os cards
            setData([...data]);
        }
    }

    useEffect(() => {
        Get();
    }, []);

    return (
        <section id='section_menu'>
            <Title id='section_menu_title' fontStyle='var(--font-nunito-regular)' fontSize='1.5rem'>
                Nosso Cardápio
            </Title>
            <div id="section_menu_content" className="section_menu_content">

                {/* 
                Elemento swiper com as propriedades 
                navigation: true -> para mostrar as setas de navegação
                modules: [Navigation] -> para usar o swiper com as setas de navegação
                speed: 600 -> para a velocidade da animação
                breakpoints: {} -> para passar os tamanhos de tela para o swiper
                slidesPerView: {} -> para passar o número de slides por view
                spaceBetween: {} -> para passar o espaçamento entre os slides
                */}

                <Swiper navigation={true} className="swiper" modules={[Navigation]} speed={600} grabCursor={true} breakpoints={{

                    /* Passando os tamanhos de tela para o swiper */
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 8,
                    },
                    700: {
                        slidesPerView: 2,
                        spaceBetween: 8,
                    },
                    980: {
                        slidesPerView: 3,
                        spaceBetween: 8,
                    },
                    1366: {
                        slidesPerView: 4,
                    }
                }}>

                    {data && data.length == 0 && (

                        <div id='section_menu_content_empty'>
                            <Title id='section_menu_content_empty' fontStyle='var(--font-nunito-regular)' fontSize='2rem'>O cardápio está vazio</Title>
                        </div>
                    )
                    }

                    {data && data.map((item: pizza) => (
                        <SwiperSlide className='swiper-slide'>
                            <Card_menu
                                key={item.id}
                                id={item.id}
                                path_image={item.path_image}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                quantity={item.quantity} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}