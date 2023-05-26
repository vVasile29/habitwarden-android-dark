import React from "react";
import {SvgXml} from "react-native-svg";
import {View} from "react-native";

export default function WaterLogo() {
    const svgMarkup = `
        <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" id="glass-water-2" data-name="Flat Line"
             xmlns="http://www.w3.org/2000/svg" class="icon flat-line">
            <path id="secondary"
                  d="M18.39,9.5,17.22,20.11a1,1,0,0,1-1,.89H7.78a1,1,0,0,1-1-.89L5.5,8.5C11.8,8.55,12.15,9.44,18.39,9.5Z"
                  style="fill: rgb(44, 169, 188); stroke-width: 2;"></path>
            <path id="primary" d="M5.5,8.5c6.3.05,6.65.94,12.89,1"
                  style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path>
            <path id="primary-2"
                  d="M18,3a1,1,0,0,1,1,1.11l-1.77,16a1,1,0,0,1-1,.89H7.78a1,1,0,0,1-1-.89L5,4.11A1,1,0,0,1,6,3Z"
                  style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path>
        </svg>`;
    const SvgImage = () => (
        <View style={{ position: "absolute", top: 40 }}>
            <SvgXml xml={svgMarkup} width="100px" height="100px" />
        </View>
    );

    return <SvgImage/>;
}
