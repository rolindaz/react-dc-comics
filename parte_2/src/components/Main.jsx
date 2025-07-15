import comics from '../../data/comics'
import Jumbotron from './Jumbotron'
import Banner from './Banner'

export default function Main() {

    return (
        <main className="bg-black text-white fw-bold">
            <Jumbotron />
            <div className="container d-flex align-items-center h-100 pb-2 pt-4 position-relative flex-column justify-content-center gap-3">
                <div className='text-white text-uppercase fw-bold position-absolute top-0 translate-middle current-series py-2 px-3'>
                    Current series
                </div>
                <div className="row row-cols-sm-2 row-cols-md-4 row-cols-lg-6 h-100 align-items-center justify-content-around py-3">
                    {
                        comics.map((comic) => {
                            return (
                                <div className="col d-flex flex-column gap-3" key={comic.id}>
                                    <div className='thumbnail'>
                                        <img className="w-100 h-100 d-block object-fit-cover" src={comic.thumb} alt={comic.title} />
                                    </div>
                                    <span className='d- block text-uppercase text-white fw-normal text-start w-100'>
                                        {comic.series}
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
                <button className="border-0 rounded-0 text-white text-uppercase fw-bold py-2 px-4 mb-4">
                    Load more
                </button>
            </div>
            <Banner />
        </main>
    )
}