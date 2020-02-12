import React          from "react";
import "./ReozList.css";
import {Grid, GridColumn, Segment, SegmentGroup} from "semantic-ui-react";

export default function ReozList({reozs}) {
    return <SegmentGroup className="reoz-list">
        {reozs.map(reoz => <Segment key={reoz.id}>
            <Grid columns={2}>
                <GridColumn width={3}>
                    <img className="reoz-img" alt="Placeholder" src={`https://fakeimg.pl/96x96/${reoz.color}?text=${reoz.name}`}/>
                </GridColumn>
                <GridColumn width={13}>
                    <div className="reoz-info">
                        <h2>{reoz.name}</h2>

                        <ul className="reoz-stats">
                            <li>Faim : {reoz.satiety} / 10</li>
                            <li>Amusement : {reoz.happiness} / 10</li>
                        </ul>
                    </div>
                </GridColumn>
            </Grid>

        </Segment>)}
    </SegmentGroup>;
}