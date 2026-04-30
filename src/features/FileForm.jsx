import { useFormik } from 'formik';
import React from 'react'

function FileForm() {
  const fileForm = useFormik({
    initialValues:{
      profile : null
    },
    onSubmit:(values)=>{
      console.log(values.profile)
      const formData = new FormData();
      formData.append("profile",values.profile)
      fetch("http://localhost:2244/file/upload",{
        method:"POST",
        body:formData
      }).then((res=>res.json()))
      .then(data=>console.log(data.msg))
    }
  })
  return (
    <div>
      <h1>Upload your profile pic..</h1>
      <form onSubmit={fileForm.handleSubmit}>
        <input type="file" name="profile" onChange={(ev)=>{
          const file=ev.target.files[0]
          console.dir(file)
          fileForm.setFieldValue("profile",file)
        }}/><br /><br />
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default FileForm;