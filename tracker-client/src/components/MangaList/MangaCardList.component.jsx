import MangaCard from "./MangaCard.component"
import "./MangaCardList.css"

const MangaCardList = ({mlist}) => {
  
  if (!mlist || mlist.length < 1) {
    return (
      <h1> Title not found </h1> 
    )
  } 
  
  return (
    <div className="cardlist"> 
        {mlist.map((manga) => (
          <MangaCard key={manga.id} manga={manga}> </MangaCard>
        ))}
    </div>

  )
}

export default MangaCardList;