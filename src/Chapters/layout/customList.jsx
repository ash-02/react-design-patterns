export const CustomList = ({
    itemList,
    referenceName,
    itemComponent : ItemComponent
}) => {
    return(
        <>
        {
            itemList.map((item, i) => {
                return(
                    <ItemComponent key={i} {...{[referenceName] : item}} />
                )
            })
        }
        </>
    )
};