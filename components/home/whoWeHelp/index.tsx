import React from 'react'
import { INavItem } from '../../../types';
import SharedComponents from '../../index'

const { HeadingItem } = SharedComponents;



export const NavItem = ({name}: INavItem) => {
  return (
    <li className="nav__item whoWeHelp">
      {name}
    </li>
  )
}

const WhoWeHelp = () => {
  return (
    <div className="whoWeHelp">
      <HeadingItem firstLine="Komu pomagamy?" secondLine="" />
      <div className="whoWeHelp__institutions">
        <NavItem name="Fundacjom" />
        <NavItem name="Organizacjom pozarządowym" />
        <NavItem name="Lokalnym zbiórkom" />
      </div>

      <section className="whoWeHelp__institution__description">
        <Fundations />
        <NonGovernmentalOrganizations />
        <LocalCollections />
      </section>
    </div>
  )
}

export default WhoWeHelp
