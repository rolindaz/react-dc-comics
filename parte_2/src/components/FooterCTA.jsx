export default function FooterCTA() {
    return (
        <div className="footer-cta text-uppercase py-2">
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
    )
}