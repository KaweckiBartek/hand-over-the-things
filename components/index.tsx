import dynamic from 'next/dynamic';

// Shared across multiple subpages
// const PlatformNav = dynamic(() => import('./platform/platformNav'));

const HomeHeader = dynamic(()=> import("../components/home/header"))
const MainButton = dynamic(()=> import('../components/home/buttons/MainButton'))

export const SharedComponents = {
 HomeHeader,
 MainButton,
};

export default SharedComponents;
