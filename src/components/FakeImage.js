import React from "react";

export default function FakeImage({size, backgroundColor, textColor, text, fontName}) {
    let options = size;

    options += backgroundColor ? `/${backgroundColor}` : "";
    options += textColor       ? `/${textColor}`       : "";

    options += `?text=${text}`;
    options += fontName ? `&font=${fontName}` : "";

    return <img alt="Placeholder" src={`https://fakeimg.pl/${options}`}
    />;
};