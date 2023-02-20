import React from "react";


function ListItems(props) {

    const normalDrops = [];
    const hardDrops = [];

    return (
        <div>
            <h2>{props.type} Man Normal</h2>
            {props.drops?.normal.map((item) => {
                let itemObj = {
                    id: "",
                    name: ""
                }
                let [id, name] = item.split("/")
                itemObj.id = id;
                itemObj.name = name;
                return <a href="" data-wowhead={"item=" + itemObj.id}>{itemObj.name}</a>
            })}
            <h2>{props.type} Man Hard</h2>
            {props.drops?.hard.map((item) => {
                let itemObj = {
                    id: "",
                    name: ""
                }
                let [id, name] = item.split("/")
                itemObj.id = id;
                itemObj.name = name;
                return <a key={item.name} href={"https://www.wowhead.com/wotlk/item=" + itemObj.id} data-wowhead={"item=" + itemObj.id} >{itemObj.name}</a>
            })}
        </div>


    )

}

export default ListItems;