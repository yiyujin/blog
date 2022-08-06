import {url} from '../components/project-item'
import ProjectItem from '../components/project-item';

export default function Items({data}){
    
    //데이터 정리
    const url = data.url

    //페이지 데이터
    
    return(
        <div>
            <h1>hahaha</h1>
            <h1>{title}</h1>
            <h1>{date}</h1>
            <h1>{days}</h1>
            <h1>{category}</h1>
        </div>
    )
}

export async function getStaticProps() {
	//여기에 노션 REQUEST 코드를 넣어준다
    const options = {
        method: 'GET',
        headers: {Accept: 'application/json', 'Notion-Version': '2022-02-22'}
      };
      
      const res = await fetch(`https://api.notion.com/v1/blocks/${url}/children?page_size=100`, options)
        // .then(response => response.json())
        // .then(response => console.log(response))
        // .catch(err => console.error(err));

      const items = await res.json()
    

  return {
    props: {items}, // will be passed to the page component as props
  }
}