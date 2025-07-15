import Logo from './Logo'

export default function Header() {
    return (
        <header className='bg-white text-black text-uppercase'>
            <div className="container h-100 d-flex justify-content-between align-items-center">
                <div className="logo">
                    <Logo />
                </div>
                <nav className='h-100'>
                    <ul className='h-100 d-flex gap-4 list-unstyled mb-0 align-items-center'>
                        <li className='h-100'>
                            <a className='h-100 text-black d-block py-3 fw-bold text-decoration-none' href="#">
                                Characters
                            </a>
                        </li>
                        <li className="h-100">
                            <a className='d-block py-3 h-100 fw-bold text-decoration-none active' href="#">
                                Comics
                            </a>
                        </li>
                        <li className="h-100">
                            <a className='text-black d-block py-3 h-100 fw-bold text-decoration-none' href="#">
                                Movies
                            </a>
                        </li>
                        <li className="h-100">
                            <a className='text-black d-block py-3 h-100 fw-bold text-decoration-none' href="#">
                                TV
                            </a>
                        </li>
                        <li className="h-100">
                            <a className='text-black d-block py-3 h-100 fw-bold text-decoration-none' href="#">
                                Games
                            </a>
                        </li>
                        <li className="h-100">
                            <a className='text-black d-block py-3 h-100 fw-bold text-decoration-none' href="#">
                                Collectibles
                            </a>
                        </li>
                        <li className="h-100">
                            <a className='text-black d-block py-3 h-100 fw-bold text-decoration-none' href="#">
                                Videos
                            </a>
                        </li>
                        <li className="h-100">
                            <a className='text-black d-block py-3 h-100 fw-bold text-decoration-none' href="#">
                                Fans
                            </a>
                        </li>
                        <li className="h-100">
                            <a className='text-black d-block py-3 h-100 fw-bold text-decoration-none' href="#">
                                News
                            </a>
                        </li>
                        <li className="h-100">
                            <a className='text-black d-block py-3 h-100 fw-bold text-decoration-none' href="#">
                                Shop
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}