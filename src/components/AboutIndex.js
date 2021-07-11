import DividerTitle from './dividerTitle/DividerTitle'
import About from './about/About'
import Banner from './banner/Banner'
import Contact from './contact/Contact'

const AboutIndex=()=>{ 
  return (
    <div>
        <Banner url="/images/juan-bargiano-foto2.jpg"/>
        <DividerTitle title='Sobre mi.' />
        <About />
        <Banner url="/images/juan-bargiano-foto3.jpg"/>
        <Contact />
        
    </div>
  );
}

export default AboutIndex;