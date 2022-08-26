export function Container({children, myValue}) {
  return(
    <div>
      <h2>Esse é o titulo do container.</h2>
      {children}
      Aqui esta o {myValue}
    </div>
  )
}