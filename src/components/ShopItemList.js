import React                           from "react";
import {Button, Segment, SegmentGroup} from "semantic-ui-react";

export default function ShopItemList({items}) {
    return items.length === 0 || <SegmentGroup>
        {
            items.map((item) => {
                return <Segment key={item.id}>{item.item.name} - <Button>{item.price} coins</Button></Segment>
            })
        }
    </SegmentGroup>;
};