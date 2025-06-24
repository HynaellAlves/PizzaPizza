// Importando propriedade do objeto
import { comment } from "../types/Comments_propierts";
import { pizza } from "../types/Pizza_propierts";

// Urls das reqisições
const Base_url_shop_cart = 'http://localhost:3001/shop_cart';
const Base_url_menu = 'http://localhost:3001/pizzas';
const Base_url_comments = 'http://localhost:3001/comments';

export async function getAllMenu() {

    try {

        const Get = await fetch(Base_url_menu, {
            method: 'GET',
        });

        const data_json = await Get.json();

        if (!data_json) throw 'Erro de requisição';
        if (data_json.length === 0) throw 'A lista está vazia';
        if (data_json === null) throw 'A lista é nula';

        return data_json
    }
    catch (err) {
        console.log(`Erro de execução ${err}`);
    }
}

export async function getAllCart() {

    try {

        const Get = await fetch(Base_url_shop_cart, {
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

export async function getComments() {

    try {

        const Get = await fetch(Base_url_comments, {
            method: 'GET',
        });

       const data_json = await Get.json();

        return data_json
    }
    catch (err) {
        console.log(`Erro de execução ${err}`);
    }
}

export async function add_cart(pizza: pizza) {

    if (pizza.quantity > 0 && pizza.quantity && pizza.quantity !== undefined || null) {

        try {
            const Get = await fetch(`${Base_url_shop_cart}/${pizza.id}`, {
                method: 'GET'
            });

            if (Get.status == 404) {

                const Post = await fetch(Base_url_shop_cart, {
                    method: 'POST',
                    body: JSON.stringify(pizza)
                });

                alert('Item adicionado ao carrinho');
            }
        }

        catch (err) {

            console.log(err);
        }

    } else {
        alert("A quantidade do item é insuficiente em estoque");
    }
}

export async function alter_cart(pizza: pizza) {

    try {
        const Post = await fetch(`${Base_url_shop_cart}/${pizza.id}`, {
            method: 'PATCH',
            body: JSON.stringify(pizza)
        });
    } catch (err) {
        console.log(`Erro de execução: `, err);
    }
}

async function allClearNull(pizzas: pizza[]) {
    try {
        pizzas.map(async (item: pizza) => {

            if (item.quantity == 0) {
                const Del = await fetch(`${Base_url_shop_cart}/${item.id}`, {
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

    if (data !== undefined && data !== null && data.length !== 0) {

        try {
            data.map(async (item: pizza) => {

                const Del = await fetch(`${Base_url_shop_cart}/${item.id}`, {
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