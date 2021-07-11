import {
    LinkedinOutlined,
    MailOutlined
  } from '@ant-design/icons';

const Contact=()=>{ 
    return (
        <div className='contact'>
          <a href='https://www.linkedin.com/in/juanbargiano/'><LinkedinOutlined className='buttonContact' /></a>
          <a href='mailto:juanbargiano@gmail.com'><MailOutlined className='buttonContact' /></a>
        </div>
    );
  }
  
export default Contact;