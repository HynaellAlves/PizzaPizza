// Importando folha de estilo
import './index.css';

// Importando componente Prismic
import { SliceZone } from '@prismicio/react';
import { components } from '../../../../slices'

export default async function SectionTerciary(request: any) {

    const slice = await request.data.slices.filter( (slice: any) => slice.slice_type === 'comments_zone');

    return (
        <section id='section_terciary'>
            <SliceZone slices={slice} components={components} />
        </section >
    )
}