import { Button } from "components/Button"
import { ErrorMessage, Field, useFormikContext } from "formik"
import toast from "react-hot-toast"

export const styles = {
  firstLabel: "text-gray-200 text-sm font-semibold mb-2 block",
  label: "text-neutral-200 text-sm font-semibold mb-2 block",
  field: "bg-neutral-100 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none",
  socialField: "bg-neutral-100 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded-r-md py-2 px-4 block w-full appearance-none",
  errorMessage: "text-red-500 text-sm"
}

export const LoginData = () => {
  const { handleSubmit, errors } = useFormikContext()

  const submitForm = async () => {
    try {
      const isError = Object.keys(errors).length !== 0

      if (isError) {
        toast.error("Please fill all required fields")
      }

      handleSubmit()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="flex flex-col items-center gap-10 bg-[#1D0327] p-8 rounded-md">
      <div className="flex flex-col gap-4">
        <div>
          <label className={styles.label} htmlFor="email">Email</label>
          <Field id="email" className={styles.field} type="text" name="email" placeholder="alberto@cleverpy.com" />
          <ErrorMessage className={styles.errorMessage} name="email" component="div" />
        </div>
        <div>
          <label className={styles.label} htmlFor="password">Password</label>
          <Field id="password" className={styles.field} type="password" name="password" placeholder="alberto" />
          <ErrorMessage className={styles.errorMessage} name="password" component="div" />
        </div>
      </div>
      <Button
        className="w-full rounded-sm"
        variant="primary"
        onClick={submitForm}
      >
        <span>Sign in</span>
      </Button>
    </div>
  )
}
