import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'

// const validate = values =>{
//     const errors = {};
//     if (!values.name){
//         errors.name = 'Обязательное поле!'
//     } else if(values.name.length < 5){
//         errors.name = 'Минимум 5 символа'
        
//     }

//     if (!values.email){
//         errors.email = 'Обязательное поле!';
       
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
//         errors.email = 'Не верный email'
//     }

//     return errors;
// }

const CustomForm = () => {

    return (
        <Formik
            initialValues = {
                {
                    name: '',
                    email: '',
                    amount: 0,
                    currency: '',
                    text: '',
                    terms: '',
                }}
            validationSchema = {Yup.object({
                    name: Yup.string()
                            .min(2, "Минимум 2 символа")
                            .required('Поле обязательное'),
                    email: Yup.string()
                            .email("введите корректный Email")
                            .required('Поле обязательное'),
                    amount: Yup.number()
                                .min(5, "Не менее 5")
                                .required('Поле обязательное'),
                    currency: Yup.string().required('Выберете валюту'),
                    text: Yup.string().min(10, 'Не менее 10 символов'),
                    terms: Yup.boolean()
                                .oneOf([true], 'Необходимо согласие')
                                .required('Необходимо согласие')            
            })}

            onSubmit = {values => console.log(JSON.stringify(values, null, 2))}
        >
            <Form className="form">
                <h2>Отправить пожертвование</h2>
                <label htmlFor="name">Ваше имя</label>
                <Field
                    id="name"
                    name="name"
                    type="text"                   
                />
                <ErrorMessage className='error' name='name' component={'div'}/>
                <label htmlFor="email">Ваша почта</label>
                <Field
                    id="email"
                    name="email"
                    type="email"
                />
                <ErrorMessage className='error' name='email' component={'div'}/>
                <label htmlFor="amount">Количество</label>
                <Field
                    id="amount"
                    name="amount"
                    type="number"            
                />
                <ErrorMessage className='error' name='amount' component={'div'}/>
                <label htmlFor="currency">Валюта</label>
                <Field
                    id="currency"
                    name="currency"
                    as="select"
                    >
                        <option value="">Выберите валюту</option>
                        <option value="USD">USD</option>
                        <option value="UAH">UAH</option>
                        <option value="RUB">RUB</option>
                </Field>
                <ErrorMessage className='error' name='currency' component={'div'}/>
                <label htmlFor="text">Ваше сообщение</label>
                <Field 
                    id="text"
                    name="text"
                    as='textarea'
                />
                <ErrorMessage className='error' name='text' component={'div'}/>
                <label className="checkbox">
                    <Field name="terms" type="checkbox" 
                   
                    />
                    Соглашаетесь с политикой конфиденциальности?
                    <ErrorMessage className='error' name='terms' component={'div'}/>   
                </label>
                <button type="submit">Отправить</button>
            </Form>
        </Formik>
    )
}

export default CustomForm;