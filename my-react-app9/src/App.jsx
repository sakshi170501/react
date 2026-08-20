import { useForm } from "react-hook-form";
import './App.css'

function App() {
  const {
  register,
  handleSubmit,
  watch,
  formState: { errors,isSubmitting },
} = useForm();

async function onSubmit(data){
  // API call ko simulate krte h
  await new Promise((resolve)=>setTimeout(resolve,5000));
  console.log("submitting the form",data);
}

  
 
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name:</label>
        <input 
        className={errors.firstName?"input-error":""}
        {...register('firstName',{
          required:true,minLength:{value:3,message:'min len atleast3'},maxLength:{value:20,message:'jayada likh diya h'}})}/>
          {errors.firstName&&<p className="error-msg">{errors.firstName.message}</p>}
      </div>
      <br />

      <div>
        <label>Middle Name:</label>
        <input  className={errors.middletName?"input-error":""}{...register('middleName')} />
      </div>
       <br />

            <div>
        <label>last Name:</label>
        <input   className={errors.lastName?"input-error":""}{...register('lastName',{pattern:{value:/^[A-Za-z]+$/i,message:"last name is not in letters"}

        })}/>
        {errors.lastName && <p className="error-msg">{errors.lastName.message}</p>}
      </div>
      <br />
      <input type='submit' disabled={isSubmitting} value={isSubmitting?"Submitting":"submit"} />



      
    </form>
 
  )
}

export default App
