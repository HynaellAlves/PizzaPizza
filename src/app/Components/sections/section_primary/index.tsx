// Importando folha de estilo
import './section_primary.css';

// Importando componentes
import Title from '../../Title'
import Image from '../../image'
import Button from '../../Buttons/Button_hero'

import { PrismicRichText } from '@prismicio/react';

export default function SectionPrimary({ data }: any) {

    return (
        <section id='section_primary'>
            <div className='container_section_primary container_sections'>
                <div className='information'>
                    <Title id='section_primary_title' fontStyle='var(--font-nunito-regular)' fontSize='2rem'>
                        {data.titulo_banner}
                    </Title>
                    <div className='container_text'>
                        <PrismicRichText field={data.descricao_principal} />
                    </div>
                    <Button>
                        <a href="#section_menu">Peça Online</a>
                    </Button>
                </div>
                <div id='container_image'>
                    <Image width={496} Height={496} id='image_primary' path={data.imagem_banner.url} alt='Pizza Hero' />
                </div>
            </div>
        </section>
    )
}