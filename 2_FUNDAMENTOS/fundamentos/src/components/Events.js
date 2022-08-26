export function Events () {
  
    const handleMyEvent = () => {};

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique Aqui</button>
      </div>
      <div>
        <button onClick={()=> console.log("Cliquei")}>Clique Aqui tambem</button>
      </div>
    </div>
  )

}