import digitalIcon from '/img/buy-comics-digital-comics.png'
import merchandiseIcon from "/img/buy-comics-merchandise.png"
import subscriptionIcon from "/img/buy-comics-subscriptions.png"
import shopLocatorIcon from "/img/buy-comics-shop-locator.png"
import dcVisaIcon from "/img/buy-dc-power-visa.svg"

export default function Banner() {

    let rowHTML = ''

    const iconCols = [
        {
            image: digitalIcon,
            title: "Digital Comics"
        },
        {
            image: merchandiseIcon,
            title: "DC Merchandise"
        },
        {
            image: subscriptionIcon,
            title: "Subscription"
        },
        {
            image: shopLocatorIcon,
            title: "Comic Shop Locator"
        },
        {
            image: dcVisaIcon,
            title: "DC Power Visa"
        }
    ]

    console.log(iconCols);

    iconCols.forEach((col) => {

        const {
            image,
            title
        } = col;


        const colMarkup =
            `
            <div className="col text-align-center">
                <img className="h-100 me-2" src=${image} alt=${title} />
                <span className="align-middle">
                    <${title} />
                </span>
            </div>
            `

        rowHTML += colMarkup

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