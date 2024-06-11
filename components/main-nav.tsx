"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Define props interface for MainNav component
interface MainNavProps {
    data: Category[]; // Array of category data
}


const MainNav: React.FC<MainNavProps> = ({
    data
}) => {
    // Get current pathname
    const pathname = usePathname();
    // Generate navigation routes
    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}` // check if link active
    }));

    return (
        <nav
        className="mx-6 flex items-center space-x-4 lg:space-x-6"
        >
            {/* Map over routes and render links */}
            {routes.map((route) => (
                <Link
                key={route.href}
                href={route.href}
                className={cn(
                    "text-sm font-medium transition-colors hover:text-black",
                    route.active ? "text-black" : "text-neutral-500"
                )}
                >
                    {route.label} {/* Link label */}
                </Link>
            ))}
        </nav>
    );
}

export default MainNav;