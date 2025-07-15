import comics from '../../data/comics'

export default function Main() {

    return (
        <main className="bg-black text-white fw-bold">
            <div className="container d-flex align-items-center h-100 py-2">
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
            </div>
        </main>
    )
}