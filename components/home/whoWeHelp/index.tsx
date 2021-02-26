import React, { useState } from 'react'
import { INavItem } from '../../../types';
import SharedComponents from '../../index'
import InstitutionItem from './InstitutionItem';
import { fundations, nonGovermentOrganisations, localCollections } from '../../../data'

const { HeadingItem } = SharedComponents;

export const NavItem = ({ name, onClick, setInstitution }: INavItem) => {
  return (
    <li
      onClick={() => setInstitution(onClick)}
      className="whoWeHelp__item"
    >
      {name}
    </li>
  )
}

const WhoWeHelp = () => {
  const [ start, setStart ] = useState(0);
  const [ end, setEnd ] = useState(3);
  const [ institution, setInstitution ] = useState(fundations)

  return (
    <div className="whoWeHelp">
      <HeadingItem firstLine="Komu pomagamy?" secondLine="" />
      <div className="whoWeHelp__institutions">
        <NavItem
          {...{ setInstitution }}
          onClick={fundations}
          name="Fundacjom"
        />
        <NavItem
          {...{ setInstitution }}
          onClick={nonGovermentOrganisations}
          name="Organizacjom pozarządowym"
        />
        <NavItem
          {...{ setInstitution }}
          onClick={localCollections}
          name="Lokalnym zbiórkom"
        />
      </div>

      <section className="whoWeHelp__institutions__section">
        <p className="whoWeHelp__institutions_descriptions">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>

        <ul className="institutions__list">
          {institution.slice(start, end).map((fundation, key) => {
            const { name, mision, description } = fundation;

            return (
              <InstitutionItem {...{ name, mision, description, key, index:key }} />
            )
          })}
        </ul>


      </section>
    </div>
  )
}

export default WhoWeHelp
