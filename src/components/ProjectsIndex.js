import { useParams } from "react-router-dom";
import Data from './data/Data'
import Project from './project/Project'
import NotFound from "./notFound/NotFound";

const ProjectsIndex=()=>{ 
    let { project } = useParams();

    switch(project){
            case "ingame":return <Project title={Data.ingame.title} subtitle={Data.ingame.subtitle} detail={Data.ingame.detail} image={Data.ingame.image}/>
            case "fc":return <Project title={Data.fc.title} subtitle={Data.fc.subtitle} detail={Data.fc.detail} image={Data.fc.image} video={Data.fc.video} />
            case "gobcaba":return <Project title={Data.gobierno.title} subtitle={Data.gobierno.subtitle} detail={Data.gobierno.detail} image={Data.gobierno.image} video={Data.gobierno.video} />
            case "universidad":return <Project title={Data.universidad.title} subtitle={Data.universidad.subtitle} detail={Data.universidad.detail} image={Data.universidad.image} video={Data.universidad.video}/>
            default:return <NotFound/>
    }
}

export default ProjectsIndex;