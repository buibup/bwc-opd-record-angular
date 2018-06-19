export const navOpdRecordItems = [
    {
        name: 'Bwc Opd Record',
        url: '/dashboard',
        icon: 'icon-speedometer',
        badge: {
            variant: 'info',
            text: 'NEW'
        }
    },
    {
        title: true,
        name: 'ePR'
    },
    {
        name: 'Doctor Panel',
        url: '/base',
        icon: 'icon-puzzle',
        children: [
            {
                name: 'Vital Signs OPD',
                url: '/base/cards',
                icon: 'icon-puzzle'
            },
            {
                name: 'Physical Exam',
                url: '/base/carousels',
                icon: 'icon-puzzle'
            },
            {
                name: 'Diet',
                url: '/base/collapses',
                icon: 'icon-puzzle'
            },
            {
                name: 'Exercise',
                url: '/base/forms',
                icon: 'icon-puzzle'
            },
            {
                name: 'Treatment',
                url: '/base/paginations',
                icon: 'icon-puzzle'
            }
        ]
    }
];
