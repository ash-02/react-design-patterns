export const ProductListItem = ({
    product
}) => {
    return(
        <>
        <h3>
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