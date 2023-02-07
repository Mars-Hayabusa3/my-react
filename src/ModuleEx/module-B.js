import { foo, abc } from './module-A'
import fooDefault from './default-module-A'

function ModuleB() {
  return (
    <>
      {foo()}
      {fooDefault()}
      {abc}
    </>
  )
}

export default ModuleB
