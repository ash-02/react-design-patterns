import React from 'react'
import { ProductList, UserList } from '../assets/testingJsonLists'
import { ProductListItem } from '../layout/ProductListItem'
import { UserListItem } from '../layout/UserListItem'
import { CustomList } from '../layout/customList'

const Layout = () => {
    return (
        <>
            <h1>Chapter 1 : Layout</h1>
            <hr />
            <br />
            <h2>Product List</h2>
            <CustomList
                itemList={
                    ProductList
                }
                referenceName={"product"}
                itemComponent={
                    ProductListItem
                }
            />
            <hr style={{
                width: "50%"
            }} />
            <br />
            <h2>User List</h2>
            <CustomList
                itemList={
                    UserList
                }
                referenceName={"user"}
                itemComponent={
                    UserListItem
                }
            />
        </>
    )
}

export default Layout