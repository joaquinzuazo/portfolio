import { Divider, Typography } from 'antd';

const { Title } = Typography;

const DividerTitle=({title})=>{ 
    return (
        <div className='divider'>
          <Divider />
          <Title level={4} className='divider-title'>{title}</Title>
        </div>
    );
  }
  
export default DividerTitle;