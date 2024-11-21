'use client';
import React, { useState } from 'react';
import styles from '@/app/components/contactus/contactus.module.css';
import { caveat, inter } from '@/app/font';
import { IoIosMail } from 'react-icons/io';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { sendEmail } from '@/app/utils/emailService';

function Contactus() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit =  async (e: React.FormEvent)=>{
    e.preventDefault();

    const templateParams = {
      to_name: "Yumna Nasir",
      from_name: name,
      from_email: email,
      message: message
    };

    try{
      await sendEmail(templateParams);
        alert("Email sent successfully");
        setName('');
        setEmail('');
        setMessage('');
    }
    catch (error){
      console.error('EmailJs Error',error);
      alert("Failed to send email");
    }
  }		

  return (
    <>
      <section id='contact' className={`${styles.Contactus} ${inter.className}`}>
        <h1 className={caveat.className}>
          <span>C</span>ontact <span>M</span>e
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          deserunt laudantium officia fuga ipsam quasi corrupti in <br />
          numquam dolor libero explicabo, inventore aperiam.
        </p>

        <div className={styles.contactusdiv}>
  <div className={styles.contactLeftdiv}>
    <div className={styles.contactleftdivcontainer}>
      <IoIosMail size={24} color={"var(--logo-color)"} />
      <div className={styles.conactleftdivtext}>
        <h6>Have a question?</h6>
        <h6>I am here to help you</h6>
        <h6>Email me at <br />yumnanasir719@gmail.com</h6>
      </div>
    </div>

    <div className={styles.contactleftdivcontainer}>
      <FaMapMarkerAlt size={24} color={"var(--logo-color)"} />
      <div className={styles.conactleftdivtext}>
        <h6>Have a question?</h6>
        <h6>Karachi, Pakistan</h6>
        <h6>serving clients worldwide</h6>
      </div>
    </div>
  </div>
  
  <div  className={styles.contactrightdiv}>
   <form onSubmit={handleSubmit}>
    <div className={styles.topinputdiv}>

      <input type="text" placeholder='Your name' className={styles.inputdetails} name='name' value={name} onChange={(e)=>setName(e.target.value)}/>

      <input type="text" placeholder='Your email' className={styles.inputdetails}  name='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
    </div>

    <input type="text"  placeholder='Subject' className={styles.inputdetails}/>

     <textarea placeholder='Your message' className={styles.inputdetails} style={{height: "224px"}}
      name='message' value={message} onChange={(e)=>setMessage(e.target.value)}
     ></textarea >
     <input type="submit" className={styles.inputbtn} value={"Send message"}/>
   </form>
  </div>

</div>

      </section>
    </>
  );
}

export default Contactus;

