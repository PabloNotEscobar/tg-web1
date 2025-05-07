import React, {useCallback, useEffect, useState} from 'react';
import ProductItem from "../ProductItem/ProductItem";
import './ProductList.css'
import {useTelegram} from "../../hooks/useTelegram";


const products = [
    {id: 1, title: 'Джинсы', price: 5000, description: 'Цвет: синий, парашюты'},
    {id: 2, title: 'Футболка', price: 2345, description: 'йцукйцукйцукйцук'},
    {id: 3, title: 'Шорты', price: 76666, description: 'Цвет: синий, парашюты'},
    {id: 4, title: 'Бейсболка', price: 555, description: 'Цвет: синий, парашюты'},
    {id: 5, title: 'Шарф', price: 9000, description: 'Цвет: синий, парашюты'},
    {id: 6, title: 'Наггетсы', price: 66, description: 'Цвет: синий, парашюты'},
    {id: 7, title: 'Кола', price: 4, description: 'Цвет: синий, парашюты'},
]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

const ProductList = () => {

    const [addedItems, setAddedItems] = useState([])
    const { tg, queryId} = useTelegram()


    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            totalPrice: getTotalPrice(addedItems),
            queryId
        };

        // Используем Telegram Bot API вместо прямого запроса к серверу
        fetch(`https://api.telegram.org/bot7842171869:AAFrYNCR3F7lznkJpyIY9eJwyHwVByR3zpI/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: 185186278, // Замени на свой chat_id (можно получить через @userinfobot)
                text: `Заказ: ${JSON.stringify(data)}`
            })
        });
    }, [addedItems, queryId]);

    useEffect(() => {
        console.log('effect схватил')
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData, tg, tg.WebApp]);


    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id)

        let newItems = []

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id)
        } else {
            newItems = [...addedItems, product]
        }

        setAddedItems(newItems)

        if(newItems.length === 0) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
            tg.MainButton.setParams({
                text: `купить ${getTotalPrice(newItems)}`
            })
        }
    }


    return (
        <div className={'list'}>
            {products.map(item => (
                <ProductItem
                    product={item}
                    onAdd={onAdd}
                    className="item"
                />
            ))}
        </div>
    );
};

export default ProductList;