import React from "react";

type TabsProps = {
    tabs: {
        tabName: string;
        panelTitle: string;
        panelDesc: string;
        image: string;
        link: string;
        linkText: string;
    }[];
};