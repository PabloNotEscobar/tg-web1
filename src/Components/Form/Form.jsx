import React, {useState} from 'react';

const Form = () => {

    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [subject, setSubject] = useState('physical')


    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }


    const onChangeCity = (e) => {
        setCity(e.target.value)
    }



    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }


    return (
        <div>
            <h3>Введите ваши данные</h3>
            <input
                className='input'
                value={country}
                type="text"
                placeholder="Страна"
                onChange={onChangeCountry}
            />
            <input
                className='input'
                type="text"
                value={city}
                placeholder="Улица"
                onChange={onChangeCity}
            />
            <select value={subject} onChange={onChangeSubject} className='select'>
                <option value='physical'>Физ. лицо</option>
                <option value='legal'>Юр. лицо</option>
            </select>
        </div>
    );
};

export default Form;