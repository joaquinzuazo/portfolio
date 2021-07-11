import { Typography, Space } from 'antd';

const { Text } = Typography;

const About=()=>{ 
  return (
    <div className='project'>               
      <Space direction="vertical" className='aboutMe'>
      <Text mark>Juan Bargiano | Realizador Audiovisual</Text>
      <Text type="secondary">Lic. en Producción y Dirección de Tv, Cine y Radio con más de 9 años de experiencia en el rubro audiovisual. Apasionado por la producción, edición y cámara. Realicé contenidos para grandes marcas como Dift.Co (Grupo Vorterix), Gobierno de la Ciudad Autónoma de Buenos Aires, Conmebol y la Universidad de Belgrano, entre otros. También con una gran experiencia en proyectos independientes. </Text>
      </Space>
    </div>
  );
}

export default About;