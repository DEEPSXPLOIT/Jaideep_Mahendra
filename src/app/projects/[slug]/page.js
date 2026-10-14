import {notFound} from 'next/navigation';
import {projects} from '@/data/projects';
import ProjectLab from '@/components/projects/ProjectLab';
export function generateStaticParams(){return projects.map(project=>({slug:project.slug}));}
export async function generateMetadata({params}){const {slug}=await params;const project=projects.find(item=>item.slug===slug);return {title:project?`${project.title} | Jaideep Mahendra`:'Project not found',description:project?.description};}
export default async function ProjectPage({params}){const {slug}=await params;const project=projects.find(item=>item.slug===slug);if(!project)notFound();return <ProjectLab project={project}/>;}
