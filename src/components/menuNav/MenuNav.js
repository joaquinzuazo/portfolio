import { Link } from "react-router-dom";
import { Typography, Menu, Dropdown, Row, Col } from 'antd';
import { MenuOutlined, CoffeeOutlined, CameraOutlined, DownOutlined } from '@ant-design/icons';
import { Fragment } from "react";

const { SubMenu } = Menu;
const { Title, Text } = Typography;

const menu = (
    <Menu >
      <Menu.Item key="1" icon={<MenuOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<CoffeeOutlined />}>
        <Link to="/about">Sobre mi</Link>
      </Menu.Item>
      <SubMenu title="Proyectos" icon={<CameraOutlined />}>
        <Menu.Item>
          <Link to="/projects/ingame">Ingame</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/projects/fc">FC Diez Media</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/projects/gobcaba">Gobierno de CABA</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/projects/universidad">Universidad de Belgrano</Link>
        </Menu.Item>        
      </SubMenu>
    </Menu>
  );

const menuLap = (
    <Menu>
      <Menu.Item>
          <Link to="/projects/ingame">Ingame</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/projects/fc">FC Diez Media</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/projects/gobcaba">Gobierno de CABA</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/projects/universidad">Universidad de Belgrano</Link>
        </Menu.Item>        
    </Menu>
  );
    

const MenuNav=()=>{ 
  return (
    <Fragment>
      <div className='menu'>
          <Row>
              <Col span={12} offset={6}><Link to="/"><Title style={{'fontSize':'16px', 'marginTop':'7px'}}>Juan Bargiano | Portfolio</Title></Link></Col>
              <Col span={1} offset={1}>
                  <Dropdown.Button overlay={menu} placement="bottomLeft" icon={<MenuOutlined />}></Dropdown.Button>
              </Col>
          </Row>
      </div>
      <div className='menuLap'>
          <Row>
              <Col span={24} style={{"textAlign":"center"}}><Link to="/"><Title style={{'fontSize':'30px', 'marginTop':'60px'}}>Juan Bargiano | Portfolio</Title></Link></Col>
          </Row>
          <Row className='menuLap-subMenu'>
            <Col span={3} offset={7}>
              <Link to="/"><Text type="secondary" >Home</Text></Link>
            </Col>
            <Col span={3} offset={1}>
              <Link to="/about"><Text type="secondary" >Sobre mi</Text></Link>
            </Col>
              <Col span={3} offset={1}>
                <Dropdown overlay={menuLap}>
                  <Text type="secondary" >Proyectos<DownOutlined /></Text>
                </Dropdown>
              </Col>
          </Row>
      </div>
    </Fragment>
  );
}

export default MenuNav;