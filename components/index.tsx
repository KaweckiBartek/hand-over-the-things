import dynamic from 'next/dynamic';

// Shared across multiple subpages
// const PlatformNav = dynamic(() => import('./platform/platformNav'));

const HomeHeader = dynamic(() => import("../components/home/header"))
const MainButton = dynamic(() => import('../components/home/buttons/MainButton'))
const Columns = dynamic(() => import('../components/home/columns'))
const HeadingItem = dynamic(() => import('./home/headingItem'))

export const SharedComponents = {
  HomeHeader,
  MainButton,
  Columns,
  HeadingItem,
};

export default SharedComponents;
