import React, {
    useEffect,
    useState
}                        from "react";
import axios             from "axios";
import "./App.css";
import ReozList          from "./components/ReozList";
import InventoryItemList from "./components/InventoryItemList";
import SOCKET_IO         from "socket.io-client";
import {Segment}         from "semantic-ui-react";
import ShopItemList      from "./components/ShopItemList";

export default function App() {
    const [reozs, setReozs]         = useState([]);
    const [shopItems, setShopItems] = useState([]);

    useEffect(() => {
        console.log("Asking server for token validity...");
        axios
            .post(
                "http://127.0.0.1:8080/setup",
                {token: localStorage.getItem("token")}
            )
            .then(res => {
                console.log("Token received: ", res.data.token);
                localStorage.setItem("token", res.data.token);

                console.log(res.data);
                setReozs(res.data.garden);

                // Tokens are query-param-safe... isn't it?
                const socket = SOCKET_IO("http://127.0.0.1:8081?token=" + res.data.token);
                socket.on("new-stock", (data) => {
                    setShopItems(Object.values(data));
                });

                return () => {
                    socket.close();
                };
            })
        ;
    }, []);

    return (
        <div className="app-frame">
            <div className="header">
                <div>
                    <h1>Reoz App</h1>
                </div>
            </div>

            <div className="content">
                <div className="garden">
                    <Segment><h1>Garden</h1></Segment>
                    <ReozList reozs={reozs} />
                </div>

                <div className="shop">
                    <Segment><h1>Shop</h1></Segment>
                    <ShopItemList items={shopItems} />
                </div>
            </div>

            <div className="footer">
                <div className="inventory">
                    <InventoryItemList />
                </div>
            </div>
        </div>
    );
}