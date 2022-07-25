import { Form, Formik } from "formik"
import { useAuth } from "hooks/useAuth"
import { loginSchema } from "utils/validation/loginSchema"
import { LoginData } from "../LoginData"

export interface IFormValues {
  email: string,
  password: string
}

export const LoginForm = () => {
  const { logIn } = useAuth()
  const initialFormValues = {
    email: "",
    password: ""
  }

  const handleSubmit = async (values: IFormValues) => {
    const formatedData = {
      email: values.email,
      password: values.password
    }

    logIn(formatedData)
  }
  return (
    <div>
      <Formik
        initialValues={initialFormValues}
        validationSchema={loginSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {() => {
          return (
            <Form>
              <LoginData />
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}
