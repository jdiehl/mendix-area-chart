/**
 * This file was generated from AreaChart.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ListValue, ListExpressionValue } from "mendix";
import { Big } from "big.js";

export interface AreaChartProps<Style> {
    name: string;
    style: Style[];
    data: ListValue;
    xAttr: ListExpressionValue<Big>;
    yAttr: ListExpressionValue<Big>;
    unit: string;
    height: number;
    lineColor: string;
    lineWidth: Big;
    areaColor: string;
}

export interface AreaChartPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    data: {} | { caption: string } | { type: string } | null;
    xAttr: string;
    yAttr: string;
    unit: string;
    height: number | null;
    lineColor: string;
    lineWidth: number | null;
    areaColor: string;
}
