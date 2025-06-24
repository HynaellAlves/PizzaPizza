// Importando componente React
import Image_component from 'next/image';

// Definindo tipo do componente
type image = {
    id: string
    class?: string
    path: string;
    alt: string
    width: number
    Height: number
}

export default function Image(props: image) {
    return (
        <div id={props.id} className={props.class}>
            <Image_component width={props.width} height={props.Height} className='image' src={props.path} alt={props.alt} />
        </div>
    )
}