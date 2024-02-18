import {data } from '../../contents/about.js'
const About =()=>{
    return(
        <div className='space-y-4'>
        <div className='text-primaryAccent font-medium'>{data.title}</div>
        <div>{data.descritption}</div>
        </div>
    )
}
export default About
