export const UserInfo = ({ user }) => {

    const { name, age, hairColor, hobbies } = user || {};

    return (
        <>
            {
                user ? (
                    <>
                        <h3>
                            {
                                name
                            }
                        </h3>
                        <h4>
                            {
                                age
                            }
                        </h4>
                        <h5>
                            {
                                hairColor
                            }
                        </h5>
                        <ul>
                            {
                                hobbies.map((h) => {
                                    <>
                                        <li key={h}>
                                            {
                                                h
                                            }
                                        </li>
                                    </>
                                })
                            }
                        </ul>
                    </>
                ) 
                : 
                <>
                    <h1>
                        User Loading....
                    </h1>
                </>
            }
        </>
    );

}