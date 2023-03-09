import Tilt from 'react-tilt';
import { SectionWrapper } from '../hoc';
import {motion } from 'framer-motion'
import { styles } from '../style';
import { github } from '../assets/assets';
import { fadeIn ,textVariant } from '../motion';
import { projects } from '../constants';

const ProjectCard=({index , name , description , tags ,image , source_code_link})=>{
return (
  <motion.div variants={fadeIn("up","spring",index*0.5,0.75)}>
    <Tilt 
    options={{
      max:45,
      scale:1,
      speed:450
    }}
    className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
      <div className='relative w-full h-[230px]'>
      <img src={image} alt={name}  className="w-full h-full object-cover rounded-2xl"/>
      <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
      <div onClick={()=> window.open(source_code_link , "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
        <img src={github} alt="github" className='w-1/2 h-1/2 object-contain'/>
      </div>
      </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag)=>(
          <p key={tag.name} className={`text-[14px] ${tag.color}`}> #{tag.name}</p>
        ))}
      </div>
    </Tilt>
  </motion.div>
)
}


const Works = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>My Work</p>
    <h2 className={styles.sectionHeadText}>Projects.</h2>
    </motion.div>


    <div className='w-full flex'>
      <motion.p variants={fadeIn("","",0.1,1)}
      className="mmt-3 text-secondary  text-[17px] max-w-3xl leading-[30px]">
        Following are my Project work that i have done so far and working on some others . I hope You all give some love and appreciate me !
      </motion.p>
    </div>
    
    <div className='mt-20 flex flex-wrap gap-7'>
      {projects.map((project,index)=>(
        <ProjectCard 
        key={`project-${index}`}
        index={index}
        {...project}/>

      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Works,"");