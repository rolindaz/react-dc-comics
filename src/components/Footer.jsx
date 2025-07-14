export default function Footer() {
    return (
        <footer>
            <div className="footer-top position-relative overflow-hidden">
                <div className="container">
                    <div className="row w-25">
                        <div className="col">
                            <h5 className="text-white text-uppercase fw-bold">
                                DC Comics
                            </h5>
                            <ul className="list-unstyled"></ul>
                        </div>
                        <div className="col">
                            <h5 className="text-white text-uppercase fw-bold">
                                Shop
                            </h5>
                            <ul className="list-unstyled"></ul>
                        </div>
                        <div className="col">
                            <h5 className="text-white text-uppercase fw-bold">
                                DC
                            </h5>
                            <ul className="list-unstyled"></ul>
                        </div>
                        <div className="col">
                            <h5 className="text-white text-uppercase fw-bold">
                                Sites
                            </h5>
                            <ul className="list-unstyled"></ul>
                        </div>
                        <img src="/img/dc-logo-bg.png" alt="Logo DC" className="z-3 position-absolute" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom text-uppercase">
                <div className="container d-flex justify-content-between">
                    <button className="btn btn-outline-primary"></button>
                    <div>
                        <span></span>
                        <div><i></i><i></i><i></i><i></i><i></i></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}