export default function FooterSitemap({ websiteSections }) {

    return (
        <div className="footer-sitemap position-relative overflow-hidden">
            <div className="container py-4">
                <img src="/img/dc-logo-bg.png" alt="Logo DC" className="z-3 position-absolute" />
                <div className="row">
                    {
                        websiteSections.map((section, index) => {
                            if (index != 3) {
                                return (
                                    <div className="col" key={section.id}>
                                        <h5 className="text-white text-uppercase fw-bold">
                                            {section.title}
                                        </h5>
                                        <ul className="list-unstyled">
                                            {
                                                section.content.map((item) => {
                                                    return (
                                                        <li key={item.id}>
                                                            <a href={item.link} className="text-decoration-none">
                                                                {item.text}
                                                            </a>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>

                                        {(index == 0) ? (
                                            websiteSections.map((section, index) => {
                                                if (index == 3) {
                                                    return (
                                                        <div className="col" key={section.id}>
                                                            <h5 className="text-white text-uppercase fw-bold">
                                                                {section.title}
                                                            </h5>
                                                            <ul className="list-unstyled">
                                                                {
                                                                    section.content.map((item) => {
                                                                        return (
                                                                            <li key={item.id}>
                                                                                <a href={item.link} className="text-decoration-none">
                                                                                    {item.text}
                                                                                </a>
                                                                            </li>
                                                                        )
                                                                    })
                                                                }
                                                            </ul>
                                                        </div>
                                                    )
                                                }
                                            })
                                        ) : ''}
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}

/*<div className="col">
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
</div>*/