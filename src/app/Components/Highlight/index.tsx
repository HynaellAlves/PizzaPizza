// Importando folha de estilo
import './highlight.css';

// Definindo o tipo do componente
type HighlightProps = {
    id?: string
    children: React.ReactNode;
}

export default function Highlight(Highlight_path: HighlightProps) {
    return (
        <div id={Highlight_path.id} className='highlight'>
            {Highlight_path.children}
        </div>
    )
};