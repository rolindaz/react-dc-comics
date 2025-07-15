export default function Footer() {
    return (
        <footer>
            <div className="footer-top position-relative overflow-hidden">
                <div className="container py-4">
                    <div className="row">
                        <div className="col">
                            <h5 className="text-white text-uppercase fw-bold">
                                DC Comics
                            </h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#" className="text-decoration-none">
                                        Characters
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-decoration-none">
                                        Comics
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-decoration-none">
                                        Movies
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-decoration-none">
                                        TV
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-decoration-none">
                                        Games
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-decoration-none">
                                        Videos
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-decoration-none">
                                        News
                                    </a>
                                </li>
                            </ul>
                            <div>
                                <h5 className="text-white text-uppercase fw-bold">
                                    Shop
                                </h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#" className="text-decoration-none">
                                            Shop DC
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-decoration-none">
                                            Shop DC Collectibles
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <h5 className="text-white text-uppercase fw-bold">
                                DC
                            </h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#" className="text-decoration-none">
                                        Terms Of Use
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-decoration-none">
                                        Privacy policy (New)
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-decoration-none">
                                        Ad Choices
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-decoration-none">
                                        Advertising
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-decoration-none">
                                        Jobs
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-decoration-none">
                                        Subscriptions
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-decoration-none">
                                        Talent Workshops
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-decoration-none">
                                        CPSC Certificates
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-decoration-none">
                                        Ratings
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-decoration-none">
                                        Shop Help
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-decoration-none">
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <h5 className="text-white text-uppercase fw-bold">
                                Sites
                            </h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#" className="text-decoration-none">
                                        DC
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-decoration-none">
                                        MAD Magazine
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-decoration-none">
                                        DC Kids
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-decoration-none">
                                        DC Universe
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-decoration-none">
                                        DC Power Visa
                                    </a>
                                </li>
                            </ul>
                        </div>


                        <img src="/img/dc-logo-bg.png" alt="Logo DC" className="z-3 position-absolute" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom text-uppercase py-2">
                <div className="container h-100 d-flex justify-content-between align-items-center">
                    <button className="btn border-2 rounded-0 text-uppercase text-white fw-bold">
                        Sign-up now!
                    </button>
                    <div className="d-flex gap-4 align-items-center">
                        <span className="text-uppercase fw-bold">
                            Follow us
                        </span>
                        <div className="d-flex gap-3">
                            <img src="/img/footer-facebook.png" alt="Facebook Icon" />
                            <img src="/img/footer-twitter.png" alt="Twitter Icon" />
                            <img src="/img/footer-youtube.png" alt="YouTube Icon" />
                            <img src="/img/footer-pinterest.png" alt="Pinterest Icon" />
                            <img src="/img/footer-periscope.png" alt="Periscope Icon" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}