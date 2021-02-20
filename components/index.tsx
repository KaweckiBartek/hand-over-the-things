import dynamic from 'next/dynamic';

// Shared across multiple subpages
// const PlatformNav = dynamic(() => import('./platform/platformNav'));

const HomeHeader = dynamic(() => import("./home/header"))
const MainButton = dynamic(() => import('./home/buttons/MainButton'))
const Columns = dynamic(() => import('./home/columns'))
const HeadingItem = dynamic(() => import('./home/headingItem'))
const SimpleSteps = dynamic(()=> import('./home/simpleSteps'))

export const SharedComponents = {
  HomeHeader,
  MainButton,
  Columns,
  HeadingItem,
  SimpleSteps,
};

export default SharedComponents;
