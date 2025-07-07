import Button from "../button/button.jsx";
import React, { useState } from 'react';
import Input from '../input/input.jsx'
import eye from '../../assets/eye.png'
import CheckBox from '../checkbox/checkbox.jsx'

export default function Form({children}){
    const [formData, setFormData] = useState({});

    const [status, setStatus] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    console.log(formData)
  }

    async function handleSubmit(e) {
        e.preventDefault(); // 阻止默认提交刷新页面
    
        setStatus('submitting');
    
        try {
          const response = await fetch('https://your-api-endpoint.com/api/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (!response.ok) {
            throw new Error(`请求失败，状态码: ${response.status}`);
          }
    
          const data = await response.json();
    
          setStatus('Success');
          console.log('return:', data);
        } catch (error) {
          setStatus('Fail');
          console.error('error:', error);
        }
      }
      
    return(
        <>
            <form class="sign-in-form" onSubmit={handleSubmit}>
                    <div class="title">
                        <h1 id="sign-in-title">Sign In</h1>
                        <p>enter</p>
                    </div>
                    <Input type="phone-number" label="Phone Number" placeholder="Phone Number" onChange={handleChange}/>
                    <Input type="password" label="Password" placeholder="enter your password" link="..." linkText="link" imgUrl={eye} imgAlt="show password" onChange={handleChange}/>
                    <CheckBox id="remember-me" className="remember-div" label="Remember me"/>
                    <Button type='submit'> Sign In</Button>
                    <div class="other-info">
                            <p>dont acct</p>
                            <a rel="stylesheet" href="">dw</a>
                    </div>
            </form>
        </>
    )
}