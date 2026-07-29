// Importando propriedade do objeto
import { pizza } from "../types/Pizza_propierts";

import { email } from "../types/email_prooierts";

export async function getAllMenu() {

    const url = `${process.env.NEXT_PUBLIC_Base_url}pizzas`;

    try {

        const Get = await fetch(url, {
            method: 'GET',
        });

        const data_json = await Get.json();

        if (!data_json || data_json === null || data_json === undefined) throw 'Erro de requisição, a resposta está vazia';
        if (data_json.length === 0) throw 'A lista do cardápio está vazia';

        return data_json
    }
    catch (err) {

        console.log(`Erro de execução ${err}`);
    }
}

export async function getAllCart() {

    const url = `${process.env.NEXT_PUBLIC_Base_url}shop_cart`;

    try {

        const Get = await fetch(url, {
            method: 'GET',
        });

        const data_json = await Get.json();

        await allClearNull(data_json);

        return data_json
    }
    catch (err) {
        console.log(`Erro de execução ${err}`);
    }
}

// export async function getComments() {

//     try {

//         const Get = await fetch(Base_url_comments, {
//             method: 'GET',
//         });

//         const data_json = await Get.json();

//         return data_json
//     }
//     catch (err) {
//         console.log(`Erro de execução ${err}`);
//     }
// }

export async function add_cart(pizza: pizza) {

    const url = `${process.env.NEXT_PUBLIC_Base_url}shop_cart`;

    if (pizza.quantity > 0 && pizza.quantity && pizza.quantity !== undefined || null) {

        try {
            const Get = await fetch(`${url}/${pizza.id}`, {
                method: 'GET'
            });

            if (Get.status == 404) {

                const Post = await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(pizza)
                });

                return true
            }
            return false
        }

        catch (err) {
            return err
        }

    } else {
        alert("A quantidade do item é insuficiente em estoque");
    }
}

export async function alter_cart(pizza: pizza) {

    const url = `${process.env.NEXT_PUBLIC_Base_url}shop_cart`;

    try {
        const Post = await fetch(`${url}/${pizza.id}`, {
            method: 'PATCH',
            body: JSON.stringify(pizza)
        });
    } catch (err) {
        console.log(`Erro de execução: `, err);
    }
}

async function allClearNull(pizzas: pizza[]) {

    const url = `${process.env.NEXT_PUBLIC_Base_url}shop_cart`;

    try {
        pizzas.map(async (item: pizza) => {

            if (item.quantity == 0) {
                const Del = await fetch(`${url}/${item.id}`, {
                    method: 'DELETE'
                });
            }
        })
    }
    catch (err) {
        console.log(err);
    }

}

export async function allClear(data: any) {

    const url = `${process.env.NEXT_PUBLIC_Base_url}shop_cart`;

    if (data !== undefined && data !== null && data.length !== 0) {

        try {
            data.map(async (item: pizza) => {

                const Del = await fetch(`${url}/${item.id}`, {
                    method: 'DELETE'
                });
            });


        }
        catch (err) {
            console.log(`Erro de execução: `, err);
        }

        location.reload();
    }
}

export async function submit_form(data_form: email) {

    const url = `/api/send-mail`;

    if (data_form.message || data_form.email || data_form.name) {
        try {
            const Post = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(data_form)
            });

            if (Post.status !== 200) {
                return false
            } else {
                setTimeout(() => {
                    location.reload();
                }, 2000);
                return true
            }
        }
        catch (err) {
            return false
        }
    } else {
        return false
    }

}