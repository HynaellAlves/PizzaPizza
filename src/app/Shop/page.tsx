'use client';

// Importando o CSS
import "./index.css";

//Importando componente de imagem do React
import Image from "next/image";

// Importando os hooks para gerenciar estado e execução
import { useEffect, useState } from "react";

// Importando propriedades do objeto
import { pizza } from "../types/Pizza_propierts";

// Importando as funções de requisição
import { allClear, getAllCart } from "../Functions/Functions_request";

// Importando os Componentes criados
import Title from "../Components/Title";
import List from "../Components/List";
import List_itens from "../Components/List_itens";
import Control_buttons from "../Components/Control_buttons_quantity";
import Resume_shop from "../Components/resume_shop";
import Header from "../Components/Header";
import Button from "../Components/Buttons/Button_shop";

export default function Shop_page() {

    const [data, setData] = useState<pizza[]>([]);

    const Get = async () => {

        let data = await getAllCart();

        setData(data);
    }

    const AllClearCart = () => {
        allClear(data);
    }

    useEffect(() => {
        Get();
    }, [])

    return (
        <div id="container_shop_page">
            <Header>
                <div className="select_back_home">
                    <Image id="back_icon" src={'/reply-stroke.png'} alt="" width={20} height={10} /><a href="http://localhost:3000">Voltar ao cardápio</a>
                </div>
            </Header>
            <Title id="container_shop_page_title" fontStyle='var(--font-nunito-regular)' fontSize="2rem">
                Seu Carrinho
            </Title>
            <div id="container_shop_page_content">
                <List>
                    <div id="content_itens">
                        {/* Executando código Typescript para percorrer o array do carrinho e exibir */}
                        {data && data.map((item: pizza) => {

                            if (item.quantity !== 0) {
                                return (
                                    <List_itens key={item.id}>
                                        <Image className="image_pizza_shop" src={item.path_image} alt="Item 1" width={80} height={80} />
                                        <div id="container_shop_page_content_list_itens_info">
                                            <h1>{item.name}</h1>
                                            <p>{item.description}</p>
                                            <p className="price_item">R$ {new Intl.NumberFormat('pt-BR', {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2
                                            }).format(item.price)}</p>
                                        </div>
                                        <Control_buttons
                                            key={item.id}
                                            quantity={item.quantity}
                                            id={item.id}
                                            name={item.name}
                                            path_image={item.path_image}
                                            description={item.description}
                                            price={item.price} />
                                    </List_itens>
                                );
                            }
                        }
                        )}
                    </div>

                    <div className="footer_cart">
                        <Button id="button_shop" onClick={AllClearCart}>
                            Limpar Carrinho
                        </Button>
                    </div>
                </List>
                <Resume_shop />
            </div>
            {/* <div className="button_content">
                <button onClick={AllClearCart}>Limpar carrinho</button>
            </div> */}
        </div>
    )
}