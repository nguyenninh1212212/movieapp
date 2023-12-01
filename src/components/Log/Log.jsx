import React from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup'
import "./Log.css"
const Log = () => {
    const validationSchema = yup.object({
        username: yup.string().min(6,'Tên người dùng phải có ít nhất 8 ký tự').required('Tên người dùng là bắt buộc'),
        password: yup.string().min(8, 'Mật khẩu phải có ít nhất 8 ký tự').required('Mật khẩu là bắt buộc'),
        email: yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
        confirm:yup.string().oneOf([yup.ref("password")],"Không khớp mật khẩu").required('xác nhận mật khẩu để tiếp tục')
      });
    const formik = useFormik({
        initialValues: {
          username: '',
          email: '',
          password: '',
        },
        validationSchema: validationSchema,
        onSubmit: values => {
          console.log('Form submitted:', values);
          // Xử lý logic gửi dữ liệu đến server hoặc làm các công việc khác tùy ý
        },
      });

      const onclick=()=>{
          console.log(formik.values)
          
      }
  return (
    <div className='Log' >
        
        <div className="inside">
        <h1>Login</h1>
    <form onSubmit={formik.handleSubmit}>
      <div className="input">
      <label htmlFor="username">Username:</label>
     <div className="inputEle">
     <input
      className='LogINP'
        type="text"
        id="username"
        name="username"
        onChange={formik.handleChange}
        value={formik.values.username}
      />
       <p className='pLog'>{formik.errors.username}</p>   
     </div>
      </div>
  <div className="input">
  <label htmlFor="email">Email:</label>
      <div className="inputEle">
      <input
      className='LogINP'
        type="email"
        id="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
       <p className='pLog'>{formik.errors.email}</p></div></div>   
     <div className="input">
     <label htmlFor="password">Password:</label>
       <div className="inputEle">
       <input
      className='LogINP'
        type="password"
        id="password"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
       <p className='pLog'>{formik.errors.password}</p>  
       </div>
     </div> 
      <button type="submit" onClick={onclick} >Submit</button>
    </form>
        </div>
    </div>
  )
}

export default Log