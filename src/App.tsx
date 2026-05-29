import { Button } from './components/Button'

function App() {

  return (
    <>
    <Button onClick={()=>alert("Criar")} name="Criar"/>
    <Button onClick={()=>alert("Alterar")} name="Alterar"/>
    <Button onClick={()=>alert("Deletar")} name="Deletar"/>
    </>
  )
}

export default App
