import { ReactElement, createElement, useMemo } from "react";
import { TextStyle, ViewStyle } from "react-native";
import { VictoryArea, VictoryAxis, VictoryChart } from "victory-native";

import { Style } from "@mendix/pluggable-widgets-tools";

import { AreaChartProps } from "../typings/AreaChartProps";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

export function AreaChart({
    data,
    xAttr,
    yAttr,
    unit,
    height,
    lineColor,
    lineWidth,
    areaColor
}: AreaChartProps<CustomStyle>): ReactElement | null {
    const chartData = useMemo(() => {
        if (data.status !== "available" || !data.items || !xAttr || !yAttr) {
            return [];
        }
        return data.items.map(d => ({
            x: xAttr.get(d).value!.toNumber(),
            y: yAttr.get(d).value!.toNumber()
        }));
    }, [data, xAttr, yAttr]);

    const padding = 40;
    console.info("unit: " + (unit ?? ""));

    return (
        <VictoryChart height={height} padding={padding}>
            <VictoryAxis />
            <VictoryAxis dependentAxis tickFormat={t => `${Math.round(t * 10) / 10}${unit ?? ""}`} />
            <VictoryArea
                style={{
                    data: {
                        fill: areaColor,
                        fillOpacity: 1.0,
                        stroke: lineColor,
                        strokeWidth: lineWidth.toNumber()
                    }
                }}
                data={chartData}
            />
        </VictoryChart>
    );
}
