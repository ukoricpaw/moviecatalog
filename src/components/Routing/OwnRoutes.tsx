import { Routes, Route } from "react-router-dom"
import { myRoutes } from "../../types/ForRoutes"
import { FC } from 'react'

export const OwnRoutes: FC = () => {
  return (
    <Routes>
      {myRoutes.map((route, index) =>
        <Route key={index} path={route.path} Component={route.element} />
      )}
    </Routes>
  )
}