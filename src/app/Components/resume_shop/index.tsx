import './resume_shop.css'

import Title from '../Title';
import { useEffect, useState } from 'react';

import { pizza } from '../../types/Pizza_propierts';

import { getAllCart } from '@/app/Functions/Functions_request';

export default function Resume_shop() {

    const [subtotal, setsubTotal] = useState<number>(0);
    const [data, setData] = useState<pizza[]>([]);
    const [tax, setTaxValue] = useState<number>(0);

    const Get = async () => {

        let data = await getAllCart();

        if (data !== undefined && data !== null) {
            setData(data)
        }
    }

    function setTax(value: number) {

        setTaxValue(value)

        return undefined
    }

    useEffect(() => {
        Get();
    }, []);

    useEffect(() => {

        data.map((item: pizza) => {

            setsubTotal(prev => prev + (item.price * item.quantity));
        });

    }, [data]);

    return (
        < div className="resume_shop_container" >
            <div className='header_resume'>
                <Title id='title_resume' fontStyle={'var(--font-nunito-regular)'} fontSize='1.5rem'>
                    Resumo do pedido
                </Title>
                <div className='subTotal_resume_value'>
                    <Title id='subTitle_resume' fontStyle={'var(--font-nunito-regular)'} fontSize='1rem'>
                        Subtotal
                    </Title>
                    <label className='subTotal'>R$ {new Intl.NumberFormat('pt-BR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }).format(subtotal)}</label>
                </div>
            </div>
            <div className='delivery_resume'>
                <Title id='title_delivery_resume' fontStyle={'var(--font-nunito-regular)'} fontSize='1.5rem'>
                    Entrega
                </Title>
                <ul className='options_delivey_resume'>
                    <li className='option_item'>
                        <input onClick={() => { setTax(8.90) }} name='radio' className='select_delivery_item' type="radio" />
                        <Title fontStyle={'var(--font-nunito-regular)'} fontSize='1rem'>
                            Entrega
                        </Title> 
                        &nbsp;
                        <label className='subTotal'>(R$ {new Intl.NumberFormat('pt-BR', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        }).format(8.90)})</label>
                    </li>
                    <li className='option_item'>
                        <input onClick={() => { setTax(0) }} name='radio' className='select_delivery_item' type="radio" />
                        <Title fontStyle={'var(--font-nunito-regular)'} fontSize='1rem'>
                            Retirada
                        </Title>
                        <label className='value_item_delivery'>(Grátis)</label>
                    </li>
                </ul>
            </div>
            <div className='resume_total'>
                <div className='resume_total_delivery'>
                    <Title fontStyle={'var(--font-nunito-regular)'} fontSize='1rem'>
                        Taxa de entrega
                    </Title>
                    <label className='subTotal'>R$ {new Intl.NumberFormat('pt-BR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }).format(tax)}</label>
                </div>
                <div className='resume_total_delivery'>
                    <Title fontStyle={'var(--font-nunito-regular)'} fontSize='1rem'>
                        Total
                    </Title>
                    <label className='subTotal'>R$ {new Intl.NumberFormat('pt-BR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }).format(subtotal + tax)}</label>
                </div>
            </div>
            <button type='submit' className='submit_shop'>
                Finalizar Pedido
            </button>
        </div >
    );
}