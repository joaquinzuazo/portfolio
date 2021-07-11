import { Fragment } from 'react';
import { Typography, Space } from 'antd';
import Banner from '../banner/Banner'
import Contact from '../contact/Contact'
import Video from './video/Video'

const { Text, Title } = Typography;

const Project=({title,subtitle,detail,image,video})=>{ 
  return (
    <Fragment>
        <Banner url={image}/>
        <div className='project' id='index'>               
            <Space direction="vertical" className='aboutMe'>
            <Title level={4}>{title}</Title>
            <Text mark>{subtitle}</Text>
            <Text type="secondary">{detail} </Text>
            </Space>
        </div>
        <div className='project-video'>
          {video && <Video url={video} />}
        </div>
        <Contact />
    </Fragment>
  );
}

export default Project;