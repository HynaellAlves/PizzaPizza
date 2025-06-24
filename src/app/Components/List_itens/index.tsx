import "./list_itens.css";

type List_itensProps = {
    children: React.ReactNode;
    justifyContent?: string;
}

export default function List_itens({ children, justifyContent }: List_itensProps) {
    return (
        <div id="container_list_itens" style={{ justifyContent: justifyContent }}>
            {children}
        </div>
    )
};