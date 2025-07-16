import comics from "../../data/comics";

export default function ComicCard(props) {
    const { id, thumb, title, series } = comics
    return (
        <div className="col d-flex flex-column gap-3" key={props.id}>
            <div className='thumbnail'>
                <img className="w-100 h-100 d-block object-fit-cover" src={props.thumb} alt={props.title} />
            </div>
            <span className='d- block text-uppercase text-white fw-normal text-start w-100'>
                {props.series}
            </span>
        </div>
    )
}