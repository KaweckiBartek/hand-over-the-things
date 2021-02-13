import dynamic from 'next/dynamic';

// Shared across multiple subpages
// const PlatformNav = dynamic(() => import('./platform/platformNav'));

const HomeHeader = dynamic(()=> import("../components/home/header"))

export const SharedComponents = {
 HomeHeader

};

export default SharedComponents;
