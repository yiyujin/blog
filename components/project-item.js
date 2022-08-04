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
        <a href = {data.url}>
        <div className="card flex flex-row">
            <div className = "imgContainer">
                <img className="thumbnail" src={imgSrc}/>
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