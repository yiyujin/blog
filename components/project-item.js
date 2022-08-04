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
        "https://c.files.bbci.co.uk/1178C/production/_114246517_gettyimages-639203462-594x594.jpg",
        "https://www.imf.org/-/media/Images/IMF/FANDD/article-image/2019/December/chami-index.ashx",
        "https://pbs.twimg.com/media/DFgrLkaUwAA3UBS.jpg"
    ]

    //category colors
    const colors = ["#63C97C", "#6F6FED", "#68BACC", "#E96146", "#DA354B", "#F5C344"]
    let cateColor;

    if(category == "Study"){
        cateColor = "#63C97C"
    }else if (category == "Think"){
        cateColor = "#E96146"
    }else{
        cateColor = "#F5C344"
    }

    let imgSrc;

    if(data.icon.type == null || data.icon.type == "emoji"){
        imgSrc = whales[Math.floor(Math.random()*whales.length)]
    }else if(data.icon.type =="external"){
        imgSrc = data.icon.external.url
    }else if(data.icon.type == "file"){
        imgSrc = data.icon.file.url
    }

    return(
        <a href = {data.url}>
        <div className="card flex flex-row">
            <div className = "imgContainer">
                <img className="thumbnail" src={imgSrc}/>
            </div>

            <div className='flex flex-col'>
                <p className='text-lg'>{title}</p>
                <p className='dates text-xs'>{days} · {date}</p>

                <div className='flex mt-2'>
                    <p className='category text-xs px-2 py-1 mr-2 rounded-md bg-`{$cateColor}`'>{category}</p>

                    {tags.map((aTag) => (
                        <p className="text-xs px-2 py-1 mr-2 rounded-md bg-slate-200 dark:bg-slate-700" key={aTag.id}>{aTag.name}</p>
                    ))}
                </div>
            </div>
        </div>
        </a>
    )
}