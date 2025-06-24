// Importando folha de estilo
import './section_secundary.css';

import { SliceZone } from '@prismicio/react'
import { components } from '../../../../slices'

export default async function SectionSencudary(request: any) {

    const slice = await request.data.slices.filter( (slice: any) => slice.slice_type === 'highlights');

    return (
        <section className="section_secundary" id="section_secundary">
            <div id='container_section_secundary'>
                <SliceZone slices={slice} components={components} />
            </div>
        </section>
    )
};