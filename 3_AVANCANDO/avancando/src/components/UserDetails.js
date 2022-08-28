export function UserDetails({name, age, job}){
  return(
    <div>
      <h2>Nome: {name}</h2>
      <p>Profissão: {job}</p>
      <p>Idate : {age}</p>
      {age >= 18 ? (<p> Pode dirigir</p>
      ):(
        <p>Nao pode dirigir</p>
      )}

    </div>
  )
}