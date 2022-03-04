import styles from '../styles/Home.module.css'

import { useFormik, Formik, Form, Field } from 'formik';
import {
    Button, FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, Input
} from '@chakra-ui/react'

export default function GenericForm(props2) {


    const handleSubmit = (values, actions) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
        }, 200)

    }

    return (
        <div className={styles.card}>
            <Formik
                initialValues={{ password: '', email: '' }}
                onSubmit={handleSubmit}
            >
                {(formikProperties) => (
                    <Form>
                        {
                            props2.config.fields.map((el) => renderElement(formikProperties, el))
                        }
                    </Form>
                )}
            </Formik>
        </div>

    )
}


const renderElement = (props, el) => {

    if (el.formControl === 'button') {
        return (
            <Button key={el.id}
                mt={4}
                colorScheme='teal'
                isLoading={props.isSubmitting}
                type={el.type}
            >
                {el.label}
            </Button>)
    }

    if (el.formControl === 'input') {
        return (
            <Field key={el.id} name={el.name} validate={el.validate}>
                {({ field, form }) => {
                   console.log('errors ->',el.name,form.errors[`${el.name}`]!==undefined && form.errors[`${el.name}`]);
                    return (
                        <FormControl isInvalid={form.errors.name && form.touched.name}>
                            <FormLabel htmlFor={el.id}>{el.label}</FormLabel>
                            <Input {...field} id={el.id} placeholder={el.placeholder} />
                            {/* <FormErrorMessage>{form.errors[`${el.name}`]}</FormErrorMessage> */}
                            <FormErrorMessage>test</FormErrorMessage>
                        </FormControl>
                    )
                }
                }
            </Field>
        )
    }


}




