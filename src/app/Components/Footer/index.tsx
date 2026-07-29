import './index.css';
import Title from '../Title';
import Text from '../Text';
import Image from '../image';

export default function Footer() {
    return (
        <footer id='footer'>
            <div id='container_social_media'>
                <Title id='social_media_title' fontStyle='var(--font-lacquer-regular)' fontSize='48px'>
                    <span>Pizza</span>Pizza
                </Title>
                <div id='container_social_media_icons'>
                    <Image id='icon_social_media' path='/instagram.svg' alt='instagram' width={48} Height={48} />
                    <Image id='icon_social_media' path='/facebook.svg' alt='facebook' width={48} Height={48} />
                </div>
            </div>
            <div id='container_footer_copyright'>
                <Image id='icon_copyright' path='/copyright.svg' alt='copyright icon' width={24} Height={24} />
                <Text fontStyle='var(--font-nunito-regular)' fontSize='18px' fontWeight='600'>
                    Copyright - PIZZAPIZZA
                </Text>
            </div>
        </footer>
    )
}