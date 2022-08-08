import Layout from '../components/layout'
import Head from 'next/head'
import {TOKEN, DATABASE_ID} from '../config'
import ProjectItem from '../components/project-item';

const primaryColor = "#E85441"

export default function Projects({projects}){

    // console.log(projectNames)

    return(
        <div>
            <Layout>
                <h1 className='text-2xl font-bold p-4 flex'>
                    Total
                    <span className='pl-2 text-orange-600'>{projects.results.length}</span>
                </h1>



                {/* html로 형태 바꾸기 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-80">
                    {projects.results.map((aProject) =>(
                        // <h1>{aProject.properties.Name.title[0].plain_text}</h1>
                        //고유값으로 키 설정
                        <ProjectItem key={aProject.id} data={aProject}/>
                    ))}
                </div>
            </Layout>
        </div>
    )
}


//nextjs fetch data notion
export async function getStaticProps() {

    //notion API
    const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Notion-Version': '2022-02-22', //최신 버전에선 json형태가 다름
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`
        },

        //100페이지 까지 가져와라, sorting
        body: JSON.stringify({
            sorts:[
                {
                    "property" : "Created",
                    "direction" : "descending"
                }
            ],
            page_size: 100
        })
      };
      
      const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)

      const projects = await res.json()

      //가져오기, map으로 형태 변경해주기
      // const projectNames = projects.results.map((aProject) => (
      //   aProject.properties.Name.title[0].plain_text
      // ))

    //   console.log(projectNames)

      //여기가 넣어야 바깥에서 사용가능
    return {
      props: {projects}, // will be passed to the page component as props
    }
  }