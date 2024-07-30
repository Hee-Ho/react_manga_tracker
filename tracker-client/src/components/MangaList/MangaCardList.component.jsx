import MangaCard from "./MangaCard.component"
import "./MangaCardList.css"

const MangaCardList = ({mlist}) => {
  return (
    <div className="cardlist"> 
        {mlist.map((manga) => (
          <MangaCard key={manga.id} manga={manga}> </MangaCard>
        ))}
    </div>

  )
}

export default MangaCardList;