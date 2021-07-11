import DividerTitle from './dividerTitle/DividerTitle'
import About from './about/About'

import Banner from './banner/Banner'
import CarrouselBo from './indexCarrousel/IndexCarrousel'
import Contact from './contact/Contact'

const Index=()=>{ 
  return (
    <div className='app-index'>
        <Banner url="/images/juan-bargiano-foto1.jpg" />
        <DividerTitle title='Sobre mi.' />
        <About />
        <DividerTitle title='Proyectos.' />
        <CarrouselBo/>
        <Contact />
    </div>
  );
}

export default Index;