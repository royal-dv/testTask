import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        setMatches(media.matches);
        const handler = (event: MediaQueryListEvent) => setMatches(event.matches);

        // Добавлена поддержка легаси обработчика
        if (media.addEventListener) media.addEventListener('change', handler);
        else media.addListener(handler);

        return () => {
            if (media.removeEventListener) media.removeEventListener('change', handler);
            else media.removeListener(handler);
        };
    }, [query]);

    return matches;
};