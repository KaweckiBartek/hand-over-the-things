import React from 'react'

export interface IHomeNavItem{
  name: string;
  navLink: string;
}

export interface IHelpNavItem {
  name: string,
  onClick: {name: string, mision: string, description: string} [],
  setInstitution: (arg: { name: string, mision: string, description: string }[]) => void;
}

export interface IMainButton {
  size: string,
  text: string,
  href: string,
}

export interface IColumn{
  number: number,
  title: string,
  description: string,
}

export interface IHeadingItem {
  firstLine: string;
  secondLine: string;
}

export interface IStep {
  icon: string,
  title: string;
  description: string;
}

export interface IInstitutionItem {
  name: string,
  mision: string;
  description: string;
  index: number;
}