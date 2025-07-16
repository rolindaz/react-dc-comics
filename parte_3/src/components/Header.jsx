import Logo from './Logo'
import navItems from '../../data/navItems'

export default function Header() {

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