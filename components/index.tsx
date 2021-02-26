import dynamic from 'next/dynamic';

// Shared across multiple subpages

const HomeHeader = dynamic(() => import("./home/header"))
const MainButton = dynamic(() => import('./home/buttons/MainButton'))
const Columns = dynamic(() => import('./home/columns'))
const HeadingItem = dynamic(() => import('./home/headingItem'))
const SimpleSteps = dynamic(() => import('./home/simpleSteps'))
const AboutUs = dynamic(() => import('./home/aboutUs'))
const WhoWeHelp = dynamic(() => import('./home/whoWeHelp'))
const ContactUs = dynamic(() => import('./home/contactUs'))
const Footer = dynamic(()=> import('./home/footer'))

export const SharedComponents = {
  HomeHeader,
  MainButton,
  Columns,
  HeadingItem,
  SimpleSteps,
  AboutUs,
  WhoWeHelp,
  ContactUs,
  Footer,
};

export default SharedComponents;
