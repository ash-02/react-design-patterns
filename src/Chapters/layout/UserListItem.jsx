export const UserListItem = ({
    user
}) => {
    return(
        <>
        <h3>
            Name: <br />
            {
                user.name
            }
        </h3>
        <h4>
            Age: <br />
            {
                user.age
            }
        </h4>
        </>
    );
}