import { Typography, Space } from 'antd';
import { Fragment } from 'react';
import Contact from '../contact/Contact';

const { Title } = Typography;

const NotFound=()=>{ 
  return (
    <Fragment>
    <div className='notFound'>               
            <Space direction="vertical" className='aboutMe'>
            <img src="/images/notfound.png" className='itemBanner-img' alt="img-itemBanner" />
            <Title level={4}>404 Not Found</Title>
            </Space>
    </div>
    <Contact/>
    </Fragment>
  );
}

export default NotFound;