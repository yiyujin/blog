import Image from 'next/image'

export default function ProjectItem({data}){

    //데이터 정리
    const title = data.properties.Name.title[0].plain_text

    const date = data.properties.Date.formula.string

    const category = data.properties.Category.select.name

    const tags = data.properties.Tags.multi_select

    const url = data.url

    //파일이 없으면,
    // const imgSrc = data.icon.emoji || data.icon.external.url


    let imgSrc;

    if(data.icon.type == "emoji"){
        imgSrc = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8f07ba30-fefd-49a6-a0eb-759ae7f9a65f/Frame_501.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220731T085934Z&X-Amz-Expires=86400&X-Amz-Signature=0d2ad15449b7e3c1316dbc53f4a9c756062d00507c73b13246cc8670ae5f63e1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Frame%2520501.jpg%22&x-id=GetObject"
    }else if(data.icon.type =="external"){
        imgSrc = data.icon.external.url
    }

    return(
        <a href = {data.url}>
        <div class="card" className="flex flex-col bg-slate-400 rounded-xl">
            <div class = "imgContainer">
                <img class="thumbnail" src={imgSrc} width="100%"/>
            </div>

        <div className='p-4 flex flex-col'>
            <h1 className='font-bold text-2xl'>{title}</h1>
            <p>{date}</p>

            <div className='flex mt-2'>
                <h1 className='px-2 py-1 mr-2 rounded-md bg-rose-200 dark:bg-rose-700'>{category}</h1>

                {tags.map((aTag) => (
                    <h1 className="px-2 py-1 mr-2 rounded-md bg-lime-200 dark:bg-lime-700" key={aTag.id}>{aTag.name}</h1>
                ))}
            </div>
        </div>
        </div>
        </a>
    )
}