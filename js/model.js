const model = {
    // state
    app: {
        currentPage: 'user',
        currentUser: 1
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
                start: '',
                end: ''
            },
            time: {
                start: null,
                end: null
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
                icon: 'trophy.svg',
            },
            date: {
                start: '2022-03-20',
                end: '2022-04-10'
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
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi iure tempora error. Fugit, iusto aliquam nulla nostrum sequi possimus quaerat culpa exercitationem ad eos aspernatur quae corporis ratione magni velit quibusdam minus quam consequatur voluptatibus quis. Recusandae quos voluptate nobis voluptatibus cum praesentium laborum exercitationem deserunt dolor unde et eaque cumque quia id provident, officiis quisquam aperiam, nisi aut. Tempore, hic. Ipsum eveniet sint odit, cupiditate, beatae, ducimus ad blanditiis aliquam dignissimos molestiae natus quis necessitatibus culpa quibusdam voluptate quisquam?',
            category: {
                id: 3,
                icon: 'restaurant.svg',
            },
            date: {
                start: '2022-03-20',
                end: '2022-03-30'
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
            image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            title: 'Alexander Rybak Konsert',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci possimus illo et nisi iure! Unde nesciunt obcaecati quidem porro itaque impedit cumque, minus quos sed exercitationem ipsam aut blanditiis eos nostrum incidunt voluptatibus sint numquam beatae sunt est dicta expedita veniam! Voluptatum magni fugit maiores eum vero molestiae commodi impedit voluptate quam perferendis. Mollitia repellendus quasi assumenda quidem reprehenderit qui incidunt quibusdam, illo minus tempora aperiam ducimus nam velit voluptatibus, veritatis placeat nihil, error nemo. Veniam optio minus dolore eligendi?',
            category: {
                id: 1,
                icon: 'music.svg',
            },
            date: {
                start: '2022-03-12',
                end: '2022-03-31'
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
            image: 'https://images.unsplash.com/photo-1631779202803-7f1415c87a9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            title: 'Skiskole For Barn',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci possimus illo et nisi iure! Unde nesciunt obcaecati quidem porro itaque impedit cumque, minus quos sed exercitationem ipsam aut blanditiis eos nostrum incidunt voluptatibus sint numquam beatae sunt est dicta expedita veniam! Voluptatum magni fugit maiores eum vero molestiae commodi impedit voluptate quam perferendis. Mollitia repellendus quasi assumenda quidem reprehenderit qui incidunt quibusdam, illo minus tempora aperiam ducimus nam velit voluptatibus, veritatis placeat nihil, error nemo. Veniam optio minus dolore eligendi?',
            category: {
                id: 4,
                icon: 'course.svg',
            },
            date: {
                start: '2022-03-24',
                end: '2022-03-30'
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
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci possimus illo et nisi iure! Unde nesciunt obcaecati quidem porro itaque impedit cumque, minus quos sed exercitationem ipsam aut blanditiis eos nostrum incidunt voluptatibus sint numquam beatae sunt est dicta expedita veniam! Voluptatum magni fugit maiores eum vero molestiae commodi impedit voluptate quam perferendis. Mollitia repellendus quasi assumenda quidem reprehenderit qui incidunt quibusdam, illo minus tempora aperiam ducimus nam velit voluptatibus, veritatis placeat nihil, error nemo. Veniam optio minus dolore elig',
            category: {
                id: 2,
                icon: 'happening.svg',
            },
            date: {
                start: '2022-03-25',
                end: '2022-04-01'
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
            name: 'concerts',
            icon: 'music.svg',
            isSelected: true,
            isChecked: false
        },
        {
            id: 2,
            name: 'happening',
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
            name: 'course',
            icon: 'course.svg',
            isSelected: true,
            isChecked: false
        },
        {
            id: 5,
            name: 'competition',
            icon: 'trophy.svg',
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
    ],
    
    users: [
        {
            id: 1,
            name: 'Olav',
            password: 123
        }
    ],

    places: [
        {
            id: 1,
            name: 'Hemsedal'
        }
    ]
}