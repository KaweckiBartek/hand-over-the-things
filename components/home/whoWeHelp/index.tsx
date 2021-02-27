import React, { useEffect, useState } from 'react'
import { IHelpNavItem } from '../../../types';
import SharedComponents from '../../index'
import InstitutionItem from './InstitutionItem';
import PageCounter from './PageCounter';
import HelpNavItem from './HelpNavItem';
import { fundations, nonGovermentOrganisations, localCollections } from '../../../data'

const { HeadingItem } = SharedComponents;

const WhoWeHelp = () => {
  const [ start, setStart ] = useState(0);
  const [ end, setEnd ] = useState(3);
  const [ institution, setInstitution ] = useState(fundations)
  const pagesCounters = [];
  const numbersOfPages = Math.ceil(institution.length / 3);
  for (let i = 0; i < numbersOfPages; i++) {
    pagesCounters.push(<PageCounter {...{ setEnd, setStart, i, key: i }} />)
  }

  useEffect(() => {
    setStart(0)
    setEnd(3)
  }, [ institution ])

  return (
    <div className="whoWeHelp" id="Institutions">
      <HeadingItem firstLine="Komu pomagamy?" secondLine="" />
      <div className="whoWeHelp__institutions">
        <HelpNavItem
          {...{ setInstitution }}
          onClick={fundations}
          name="Fundacjom"
        />
        <HelpNavItem
          {...{ setInstitution }}
          onClick={nonGovermentOrganisations}
          name="Organizacjom pozarządowym"
        />
        <HelpNavItem
          {...{ setInstitution }}
          onClick={localCollections}
          name="Lokalnym zbiórkom"
        />
      </div>

      <section className="whoWeHelp__institutions__section">
        {institution === fundations && <p className="whoWeHelp__institutions__descriptions">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>}

        {institution === nonGovermentOrganisations && <p className="whoWeHelp__institutions__descriptions">nonGovermentOrganisations - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>}

        {institution === localCollections && <p className="whoWeHelp__institutions__descriptions">localCollections - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>}

        <ul className="institutions__list">
          {institution.slice(start, end).map((fundation, key) => {
            const { name, mision, description } = fundation;

            return (
              <InstitutionItem {...{ name, mision, description, key, index: key }} />
            )
          })}
        </ul>
      </section>
      
      <div className="institutions__pages">
        {numbersOfPages > 1 && pagesCounters}
      </div>
    </div>
  )
}

export default WhoWeHelp
