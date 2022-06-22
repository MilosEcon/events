const model = {
    // state
    app: {
        currentPage: 'user',
    },


    // inputs

    inputs: {
        userPage: {
            date: {
                start: today,
                end: afterSevenDays
            },
            filterDate: false,
            isSelectAll: true, // categories
            isCategoryDropdownOpen: false,
            modal: null,
        },
        
        adminPage: {
            title: '',
            description: '',
            image: '',
            category: null,
            payment: null,
            date: {
                start: today,
                end: afterSevenDays
            },
            time: {
                start: '08:00',
                end: '20:00'
            },
            link: '',
            isConfirmationModalOn: false
        }
    },
    
    // data 

    ads: [
        //example
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1586356415056-bd7a5c2bbef7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
            title: 'Slalåmkonkurranse',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit fugit nisi similique, veritatis dolor impedit. Consectetur, sit! Neque accusamus deleniti, eos perferendis veniam incidunt corrupti eaque aut qui. Eveniet quidem enim commodi ipsum aspernatur nam quo delectus eum corporis quaerat, animi, rerum recusandae reprehenderit natus ad, deserunt facilis. Velit, veniam fuga ipsa repellat eos asperiores maxime voluptatem quam porro harum nostrum explicabo tempora animi reiciendis.',
            category: {
                id: 5,
                icon: 'prize.svg',
            },
            date: {
                start: '2022-08-07',
                end: '2022-08-30'
            },
            time: {
                start: '08:00',
                end: '16:00'
            },
            payment: 1,
            link: '',
        },

        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1588556008426-af415581d44b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80',
            title: 'Halv Pris På Taco!',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit fugit nisi similique, veritatis dolor impedit. Consectetur, sit! Neque accusamus deleniti, eos perferendis veniam incidunt corrupti eaque aut qui. Eveniet quidem enim commodi ipsum aspernatur nam quo delectus eum corporis quaerat, animi, rerum recusandae reprehenderit natus ad, deserunt facilis. Velit, veniam fuga ipsa repellat eos asperiores maxime voluptatem quam porro harum nostrum explicabo tempora animi reiciendis.',
            category: {
                id: 3,
                icon: 'restaurant.svg',
            },
            date: {
                start: '2022-08-14',
                end: '2022-09-03'
            },
            time: {
                start: '08:00',
                end: '16:00'
            },
            payment: 1,
            link: '',
        },

        {
            id: 3,
            image: 'images/rybak.jpg',
            title: 'Alexander Rybak Konsert',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit fugit nisi similique, veritatis dolor impedit. Consectetur, sit! Neque accusamus deleniti, eos perferendis veniam incidunt corrupti eaque aut qui. Eveniet quidem enim commodi ipsum aspernatur nam quo delectus eum corporis quaerat, animi, rerum recusandae reprehenderit natus ad, deserunt facilis. Velit, veniam fuga ipsa repellat eos asperiores maxime voluptatem quam porro harum nostrum explicabo tempora animi reiciendis.',
            category: {
                id: 1,
                icon: 'music.svg',
            },
            date: {
                start: '2022-08-12',
                end: '2022-08-25'
            },
            time: {
                start: '08:00',
                end: '16:00'
            },
            payment: 1,
            link: '',
        },
        
        {
            id: 4,
            image: 'images/ski-school.jpg',
            title: 'Skiskole For Barn',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit fugit nisi similique, veritatis dolor impedit. Consectetur, sit! Neque accusamus deleniti, eos perferendis veniam incidunt corrupti eaque aut qui. Eveniet quidem enim commodi ipsum aspernatur nam quo delectus eum corporis quaerat, animi, rerum recusandae reprehenderit natus ad, deserunt facilis. Velit, veniam fuga ipsa repellat eos asperiores maxime voluptatem quam porro harum nostrum explicabo tempora animi reiciendis.',
            category: {
                id: 4,
                icon: 'course.svg',
            },
            date: {
                start: '2022-08-24',
                end: '2022-08-30'
            },
            time: {
                start: '08:00',
                end: '16:00'
            },
            payment: 1,
            link: '',
        },

        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            title: 'Statsministeren Holder Tale',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit fugit nisi similique, veritatis dolor impedit. Consectetur, sit! Neque accusamus deleniti, eos perferendis veniam incidunt corrupti eaque aut qui. Eveniet quidem enim commodi ipsum aspernatur nam quo delectus eum corporis quaerat, animi, rerum recusandae reprehenderit natus ad, deserunt facilis. Velit, veniam fuga ipsa repellat eos asperiores maxime voluptatem quam porro harum nostrum explicabo tempora animi reiciendis.',
            category: {
                id: 2,
                icon: 'happening.svg',
            },
            date: {
                start: '2022-08-22',
                end: '2022-09-17'
            },
            time: {
                start: '08:00',
                end: '16:00'
            },
            payment: 1,
            link: '',
        }
    ],
    
    categories: [
        {
            id: 1,
            name: 'konserter',
            icon: 'music.svg',
            isSelected: true,
            isChecked: false
        },
        {
            id: 2,
            name: 'arrangementer',
            icon: 'happening.svg',
            isSelected: true,
            isChecked: false
        },
        {
            id: 3,
            name: 'restaurant',
            icon: 'restaurant.svg',
            isSelected: true,
            isChecked: false
        },
        {
            id: 4,
            name: 'kurser',
            icon: 'course.svg',
            isSelected: true,
            isChecked: false
        },
        {
            id: 5,
            name: 'konkurranse',
            icon: 'prize.svg',
            isSelected: true,
            isChecked: false
        }
    ],

    payment: [
        {
            id: 1,
            name: 'Gratis'
        },
        {
            id: 2,
            name: 'Betalt'
        },
        {
            id: 3,
            name: 'Extra Betalt'
        }
    ]
}
