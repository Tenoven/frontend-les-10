export function ProductTile({bestSellerOrNewCollection, imageSource, bagname, price}) {
    return (
    <article>
        <span>
            {bestSellerOrNewCollection}
        </span>
        <img src={imageSource} alt=""/>
        <p>{bagname}</p>
        <h4>€{price},-</h4>
    </article>
    )
}