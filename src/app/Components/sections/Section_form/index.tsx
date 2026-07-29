'use client'

import './Section_form.css'

// Importando o gerenciamento de estado do formulário React
import { useForm } from 'react-hook-form';

import { toast, Zoom } from 'react-toastify';

// Importando função que cria os objetos de validação do Yup
import { yupResolver } from '@hookform/resolvers/yup';

import { email } from '@/app/types/email_prooierts';

// Importando todas as propriedades do Yup
import * as yup from 'yup';

// Importando componentes
import Image from '../../image'
import Text from '../../Text'
import Title from '../../Title'
import Button from '../../Buttons/Button_form'

import { submit_form } from '../../../Functions/Functions_request'

// Criando e mapeando o esquema dos campos
const schema = yup.object().shape({
    name: yup.string().required('Campo obrigatório').matches(/^[a-zA-Z\s]+$/, 'O nome deve conter apenas letras'),
    email: yup.string().email('Email inválido').required('Campo obrigatório').matches(/^[a-zA-Z0-9._]+@[a-zA-Z.]+.com$/, 'Formato do Email: example@dominio.com'),
    message: yup.string().required('Campo Obrigatório')
});

export default function Section_form() {

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    const submit = async (data: any) => {
        const response = await submit_form(data);
        notify(response);
    };

    const notify = (validation: boolean | undefined) => {

        if (validation == true) {
            toast.success("Formulário enviado com sucesso", {
                className: "Toast_default",
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: false,
                rtl: false,
                pauseOnFocusLoss: true,
                draggable: true,
                pauseOnHover: true,
                theme: "dark",
                transition: Zoom,
            })
        } else if (validation == false || validation == undefined) {
            toast.error("Ocorreu algum erro no envio do formulário", {
                className: "Toast_default",
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                rtl: false,
                pauseOnFocusLoss: true,
                draggable: true,
                pauseOnHover: true,
                theme: "dark",
                transition: Zoom,
            })
        }
    };

    return (
        <section id='section_form'>
            <div id='section_form_container'>
                <div className='section_form_information'>
                    <div id='content_hours' className='content_informations'>
                        <Image id='clock_icon' class='section_form_icon' path='/clock.svg' alt='Clock Icon' width={60} Height={60} />
                        <Text fontSize='16px' fontWeight='700' fontStyle='var(--font-nunito-regular)'>
                            SEG - QUI   10:00 - 23:00
                            <br className='br_text' />
                            SEX - DOM  18:00 - 23:00
                        </Text>
                    </div>
                    <div className='content_informations'>
                        <Image id='location_icon' class='section_form_icon' path='/location.svg' alt='Location Pin Icon' width={24} Height={24} />
                        <Text fontSize='16px' fontWeight='600' fontStyle='var(--font-nunito-regular)'>
                            Rua Flores Cordovil, 106
                        </Text>
                    </div>
                    <div className='content_informations'>
                        <Image id='whatsapp_icon' class='section_form_icon' path='/whatsapp.svg' alt='Whatsapp Icon' width={24} Height={24} />
                        <Text fontSize='16px' fontWeight='600' fontStyle='var(--font-nunito-regular)'>
                            (95) 99460-9947
                        </Text>
                    </div>
                </div>

                <form onSubmit={handleSubmit(submit)} className='section_form_inputs'>
                    <Title id='title_section_form' fontSize='24px' fontStyle='var(--font-nunito-regular)' >
                        Fale Conosco
                    </Title>
                    <input {...register('name')} id='input_name' placeholder='Nome e Sobrenome' type="text" className='inputs' />
                    {errors.name && <p className='label_error'>{errors.name.message}</p>}
                    <input {...register('email')} id='input_email' placeholder='Email' type="text" className='inputs' />
                    {errors.email && <p className='label_error'>{errors.email.message}</p>}
                    <textarea {...register('message')} id='input_message' placeholder='Mensagem...' rows={5} className='inputs' />
                    {errors.message && <p className='label_error'>{errors.message.message}</p>}
                    <Button id='button_form'>
                        Enviar
                    </Button>
                </form>
            </div>
        </section>
    )
}