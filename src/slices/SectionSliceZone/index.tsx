import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import Image from "../../app/Components/image"
import Title from "../../app/Components/Title"
import Text from "../../app/Components/Text"
import Highlight from "../../app/Components/Highlight"

import { PrismicRichText } from '@prismicio/react';

export type HighlightsProps = SliceComponentProps<Content.HighlightsSlice>;

const Highlights: FC<HighlightsProps> = ({ slice }) => {

  if (slice.variation == 'highlights' && slice.slice_type == 'highlights') {
    return (
      slice.primary.highlight_image.map((item, i) => (
        <Highlight key={i}>
          {item.image_highlight.url && (<Image id='chef_image_vector' class='highlight_vector' path={item.image_highlight.url} alt='Image Chef Vector' width={96} Height={96} />)}
          <Title id='section_sencudary_title' fontStyle='var(--font-nunito-regular)' fontSize='24px'>
            {item.title_highlight}
          </Title>
          <div id="container_text_rich">
            <PrismicRichText field={item.description_highlight} />
          </div>
        </Highlight>
      ))
    )
  }

  if (slice.variation == 'highlightsText' && slice.slice_type == 'highlights') {
    return (
      slice.primary.highlight_text.map((item, i) => (
        <Highlight key={i}>
          <Text fontStyle='var(--font-nunito-regular)' fontSize='16px' position='center' fontWeight='400'>
            {item.highlight_description}
          </Text>
        </Highlight>
      ))
    )
  }

  return null
};

export default Highlights;
