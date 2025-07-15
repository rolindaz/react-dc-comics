import digitalIcon from '/img/buy-comics-digital-comics.png'
import merchandiseIcon from "/img/buy-comics-merchandise.png"
import subscriptionIcon from "/img/buy-comics-subscriptions.png"
import shopLocatorIcon from "/img/buy-comics-shop-locator.png"
import dcVisaIcon from "/img/buy-dc-power-visa.svg"

export default function Banner() {

    let rowHTML = []

    const iconCols = [
        {
            id: 1,
            image: digitalIcon,
            title: "Digital Comics"
        },
        {
            id: 2,
            image: merchandiseIcon,
            title: "DC Merchandise"
        },
        {
            id: 3,
            image: subscriptionIcon,
            title: "Subscription"
        },
        {
            id: 4,
            image: shopLocatorIcon,
            title: "Comic Shop Locator"
        },
        {
            id: 5,
            image: dcVisaIcon,
            title: "DC Power Visa"
        }
    ]

    console.log(iconCols);

    iconCols.forEach((col) => {

        const {
            id,
            image,
            title
        } = col;


        const colMarkup =
            <div className="col text-align-center" key={id}>
                <img className="h-100 me-2" src={image} alt={title} />
                <span className="align-middle">
                    {title}
                </span>
            </div>

        rowHTML.push(colMarkup)

    })
    console.log(rowHTML);

    return (
        <div className="banner text-white text-uppercase">
            <div className="container h-100">
                <div className="row h-100 align-items-center justify-content-around px-3">
                    {rowHTML}
                </div>
            </div>
        </div>
    )
}