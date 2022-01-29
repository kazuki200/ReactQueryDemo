import { VFC } from 'react'
import { ClaasicalFetchA } from './ClaasicalFetchA'
import { ClassicalFetchB } from './ClassicalFetchB'
import { ContextA } from './ContextA'
import { ContextB } from './ContextB'

export const MainContext: VFC = () => {
  return (
    <div className="grid grid-cols-2 gap-40">
      <ClaasicalFetchA />
      <ClassicalFetchB />
      <ContextA />
      <ContextB />
    </div>
  )
}
