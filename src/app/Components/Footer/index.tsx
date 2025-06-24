import './index.css';
import Title from '../Title';
import Text from '../Text';
import Image_icons from 'next/image';
import Icon_copyright from '../../../../public/Copyright.svg';
import Icon_instagram from '../../../../public/Instagram.svg';
import Icon_facebook from '../../../../public/Facebook.svg';

export default function Footer() {
    return (
        <footer id='footer'>
            <div id='container_social_media'>
                <Title id='social_media_title' fontStyle='var(--font-lacquer-regular)' fontSize='48px'>
                    <span>Pizza</span>Pizza
                </Title>
                <div id='container_social_media_icons'>
                    <Image_icons id='icon_social_media' src={Icon_instagram} alt='instagram' />
                    <Image_icons id='icon_social_media' src={Icon_facebook} alt='facebook' />
                </div>
            </div>
            <div id='container_footer_copyright'>
                <Image_icons id='icon_copyright' src={Icon_copyright} alt='copyright icon' />
                <Text fontStyle='var(--font-nunito-regular)' fontSize='18px' fontWeight='600'>
                    Copyright - PIZZAPIZZA
                </Text>
            </div>
        </footer>
    )
}