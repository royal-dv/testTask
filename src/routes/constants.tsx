import type { RouteObject } from "react-router-dom"

export const routes: RouteObject[] = [
    {
        path: '/',
        lazy: async () => ({
            Component: (await import('@/pages/PlansAndEpisodes/PlansAndEpisodes')).default
        }),
    },
]