import React from "react";


function ListItems(props) {


    return (
        <div>
            {props.drops?.normal.length !== 0? <h3>{props.type} Man Normal</h3> : null}
            {props.drops?.normal.map((item) => {
                let itemObj = {
                    id: "",
                    name: ""
                }
                let [id, name] = item.split("/")
                itemObj.id = id;
                itemObj.name = name;
                return <div className="loot-container" key={itemObj.id + props.name}><a className="loot" href={"https://www.wowhead.com/wotlk/item=" + itemObj.id}
                    data-wowhead={"item=" + itemObj.id} target="_blank">{itemObj.name}</a></div>
            })}

            {props.drops?.hard.length !== 0? <h3>{props.type} Man Hard</h3> : null}
            {props.drops?.hard.map((item) => {
                let itemObj = {
                    id: "",
                    name: ""
                }
                let [id, name] = item.split("/")
                itemObj.id = id;
                itemObj.name = name;
                return <div className="loot-container" key={itemObj.id + props.name}><a className="loot" href={"https://www.wowhead.com/wotlk/item=" + itemObj.id}
                    data-wowhead={"item=" + itemObj.id} target="_blank">{itemObj.name}</a></div>
            })}
        </div>


    )

}

export default ListItems;