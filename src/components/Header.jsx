import Logo from './Logo'

export default function Header() {
    return (
        <header>
            <div className="container d-flex justify-content-between align-items-center">
                <div className="logo">
                    <Logo />
                </div>
                <nav>
                    <ul className='d-flex gap-4'>
                        <li>
                            <a href="#">Characters</a></li>
                        <li><a href="#">Comics</a></li>
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">TV</a></li>
                        <li><a href="#">Games</a></li>
                        <li><a href="#">Collectibles</a></li>
                        <li><a href="#">Videos</a></li>
                        <li><a href="#">Fans</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Shop</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}