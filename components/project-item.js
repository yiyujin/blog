import Image from 'next/image'

export default function ProjectItem({data}){

    //데이터 정리
    const title = data.properties.Name.title[0].plain_text

    const date = data.properties.Date.formula.string
    
    const days = data.properties.Days.formula.string

    const category = data.properties.Category.select.name

    const tags = data.properties.Tags.multi_select

    const url = data.url

    //파일이 없으면,
    // const imgSrc = data.icon.emoji || data.icon.external.url

    const whales = [
        "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6c6bb281-1e94-4f62-bf64-9cf648937c9f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220806T112358Z&X-Amz-Expires=86400&X-Amz-Signature=2a724b3ada4faa2a3acb734efe117dce34b040372f1ae7d2a42e47a577e160cb&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",
        "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e4156602-d5e8-4cd6-9a53-98b87396dbd3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220806T112357Z&X-Amz-Expires=86400&X-Amz-Signature=94b6733c708b310868d7c4ee0507965e5ff7764d5f37a2824df4ee54d1aff245&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",
        "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/114e93c1-ca6a-47a9-90e3-984288179fe7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220806T112354Z&X-Amz-Expires=86400&X-Amz-Signature=192a177c5d654dc6867b44b4d38589e638aaec86fdd0445e3a7faa9e3cc920d3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",
    ]

    let imgSrc;

    if(data.icon == null || data.icon.type == "emoji"){
        imgSrc = whales[Math.floor(Math.random()*whales.length)]
    }else if(data.icon.type =="external"){
        imgSrc = data.icon.external.url
    }else if(data.icon.type == "file"){
        imgSrc = data.icon.file.url
    }

    let cateColor
    if(category == "Study"){
        cateColor = "Study"
    }else if(category == "Read"){
        cateColor = "Read"
    }else if(category == "Watch"){
        cateColor = "Watch"
    }else if(category == "Experience"){
        cateColor = "Experience"
    }else if(category == "Review"){
        cateColor = "Review"
    }else if(category == "Think"){
        cateColor = "Think"
    }
    

    return(
        <a href ="/items">
        <div className="card flex flex-row">
            <div className = "imgContainer">
                <Image className="thumbnail" src={imgSrc} width="100%" height="100%"/>
            </div>

            <div className='flex flex-col'>
                <p className='text-lg'>{title}</p>
                <p className='dates text-xs'>{days} · {date}</p>

                <div className='tagContainer flex mt-2'>
                    <p className={cateColor}>{category}</p>
                    {tags.map((aTag) => (
                        <p className="tags" key={aTag.id}>{aTag.name}</p>
                    ))}
                </div>
            </div>
        </div>
        </a>
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