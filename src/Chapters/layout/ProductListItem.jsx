export const ProductListItem = ({
    product
}) => {
    return(
        <>
        <h3>
            1.
            Name: <br />
            {
                product.name
            }
        </h3>
        <h4>
            Price: <br />
            {
                product.price
            }
        </h4>
        </>
    )
};