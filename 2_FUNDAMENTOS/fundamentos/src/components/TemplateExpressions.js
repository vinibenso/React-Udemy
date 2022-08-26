import { MyComponent } from "./MyComponent"


export function TemplateExpressions () {
  
  const name = "Vinicius"
  
  return (
    <div>
    <h1> Oi {name}, td bem? </h1>
    <MyComponent />

   
    </div>
  )
}