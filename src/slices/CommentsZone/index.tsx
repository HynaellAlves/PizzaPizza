'use client'

import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

// Importando componentes do React
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Importando componentes
import Title from "../../app/Components/Title";
import Image from "../../app/Components/image";
import Highlight from '../../app/Components/Highlight';

// Importando os estilos dos componentes do React
import 'swiper/css';
import 'swiper/css/navigation';

export type CommentsZoneProps = SliceComponentProps<Content.CommentsZoneSlice>;

const CommentsZone: FC<CommentsZoneProps> = ({ slice }) => {

  if (slice.variation == 'default' && slice.slice_type == 'comments_zone') {
    return (
      <div className="section_terciary_content" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
        <Swiper loop={true} className='swiper' navigation={true} modules={[Navigation]}>
          {slice.primary.comments_group.map((item, i) => (
            <SwiperSlide key={i}>
              <Highlight id="comment">
                {item.comment_image.url && (<Image id="comment_image" alt="Imagem do autor do comentário" width={48} Height={48} path={item.comment_image.url} />)}
                <PrismicRichText field={item.comment_description} />
                <Title fontStyle="--font-nunito-regular" fontSize="16px">
                  {item.comment_name}
                </Title>
              </Highlight>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
  }
};

export default CommentsZone;
