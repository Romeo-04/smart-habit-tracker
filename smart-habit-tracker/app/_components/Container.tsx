'use client';

import { usePathname } from 'next/navigation';

export default function Container({children}:{children : React.ReactNode}) {
    const pathname = usePathname();
    
    // No container constraints for landing page
    if (pathname === '/' || pathname === '/landing') {
        return <>{children}</>;
    }
    
    return <div className="mx-auto max-w-3xl px-4 py-10">{children}</div>;
}