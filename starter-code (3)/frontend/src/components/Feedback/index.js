import './style.css'
import { useState } from 'react';

const Feedback = ()=>{

    let params

    const [value1,setValue1]=useState("")
    const [value2,setValue2]=useState("")
    const [value3,setValue3]=useState("")
    const [feedbackMessage,setFeedbackMessage] = useState("")
    const SendMail = ()=>{
       params = {
        form_name : value1,
        email_id :value2,
        message:value3
      }
      emailjs.send("service_e8hjc0b","template_rhj8sbc",params).then(function(res){
        setFeedbackMessage("Your Feedback Has Been Sent")
      })
    }
    
return(
    <div className='feedback_container'>
  
<div className='feedback_form'>
  <h3 className='Feed_back_p'>Your Feedback is Important to Us !! Please Help Us to Improve Our Site
</h3>
  <input type ="text" placeholder='Enter Your Full Name' id = 'fullName' required onChange={(e)=>{
  setValue1(e.target.value)
  }}></input><br />
  <input type="email" placeholder='Enter Your Email' id='email_id'  onChange={(e)=>{
  setValue2(e.target.value)}} required></input><br />
  <textarea placeholder='Enter Your Feedback' id ="message" required onChange={(e)=>{
  setValue3(e.target.value)}} ></textarea><br />
  <button onClick={()=>{
    SendMail()
  }}>Send</button>
  {feedbackMessage}
  
</div>
<img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Circle-icons-car.svg/1200px-Circle-icons-car.svg.png"></img>
</div>)
}

export default Feedback