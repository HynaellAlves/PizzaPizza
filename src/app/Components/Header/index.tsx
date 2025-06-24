// Importando folha de estilo
import "./index.css";

// Importando componentes
import Title from "../Title";

// Definindo tipo do componente
type headerProps = {
    children?: React.ReactNode
}

export default function Header(props: headerProps) {
    return (
        <header>
            <Title fontStyle='var(--font-lacquer-regular)' fontSize='2rem'>
                <span>Pizza</span>Pizza
            </Title>
            {props.children}
        </header>
    )
}