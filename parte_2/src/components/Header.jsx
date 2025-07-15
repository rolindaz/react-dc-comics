import Logo from './Logo'

export default function Header() {

    const navItems = [
        {
            id: 1,
            text: 'Characters',
            dataStatus: 'inactive'
        },
        {
            id: 2,
            text: 'Comics',
            dataStatus: 'active'
        },
        {
            id: 3,
            text: 'Movies',
            dataStatus: 'inactive'
        },
        {
            id: 4,
            text: 'TV',
            dataStatus: 'inactive'
        },
        {
            id: 5,
            text: 'Games',
            dataStatus: 'inactive'
        },
        {
            id: 6,
            text: 'Collectibles',
            dataStatus: 'inactive'
        },
        {
            id: 7,
            text: 'Videos',
            dataStatus: 'inactive'
        },
        {
            id: 8,
            text: 'Fans',
            dataStatus: 'inactive'
        },
        {
            id: 9,
            text: 'News',
            dataStatus: 'inactive'
        },
        {
            id: 10,
            text: 'Shop',
            dataStatus: 'inactive'
        }
    ]

    return (
        <header className='bg-white text-black text-uppercase'>
            <div className="container h-100 d-flex justify-content-between align-items-center">
                <div className="logo">
                    <Logo />
                </div>
                <nav className='h-100'>
                    <ul className='h-100 d-flex gap-4 list-unstyled mb-0 align-items-center'>
                        {
                            navItems.map((item) => {
                                return (
                                    <li className='h-100' key={item.id}>
                                        <a className='h-100 d-block py-3 fw-bold text-decoration-none' status={item.dataStatus} href="#" >
                                            {item.text}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
        </header >
    )
}