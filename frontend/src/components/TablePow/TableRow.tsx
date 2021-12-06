import React, { FC, useState } from "react";
import "./TableRow.scss";
import sort from "../../store/Sort";

interface DataProps {
    id: number | string;
    date: string;
    name: string;
    count: number | string;
    distance: number | string;
}

interface TableRowProps {
    data: DataProps;
    main?: Boolean;
}

interface ClassesProps {
    id: string;
    name: string;
    count: string;
    distance: string;
}

const TableRow: FC<TableRowProps> = ({ data, main = false }) => {
    const [classes, setClasses] = useState<ClassesProps>({
        id: " active-sort sort-increasing",
        name: "",
        count: "",
        distance: "",
    });

    const emptyClasses = { id: "", name: "", count: "", distance: "" };

    return (
        <div className={main ? "table-row main-row" : "table-row"}>
            <div
                onClick={() => {
                    sort.changeType("id");
                    if (sort.lastTarget === "id") {
                        sort.changeOrder(!sort.isIncreasing);
                    } else {
                        sort.changeOrder(true)
                    }
                    sort.changeLastTarget("id");
                    setClasses({
                        ...emptyClasses,
                        id: ` active-sort sort-${
                            sort.isIncreasing ? "increasing" : "decreasing"
                        }`,
                    });
                }}
                className={"table-id" + classes.id}
            >
                {data.id}
            </div>
            <div className="table-date">{data.date}</div>
            <div
                onClick={() => {
                    sort.changeType("name");
                    if (sort.lastTarget === "name") {
                        sort.changeOrder(!sort.isIncreasing);
                    } else {
                        sort.changeOrder(true)
                    }
                    sort.changeLastTarget("name");
                    setClasses({
                        ...emptyClasses,
                        name: ` active-sort sort-${
                            sort.isIncreasing ? "increasing" : "decreasing"
                        }`,
                    });
                }}
                className={"table-name" + classes.name}
            >
                {data.name}
            </div>
            <div
                onClick={() => {
                    sort.changeType("count");
                    if (sort.lastTarget === "count") {
                        sort.changeOrder(!sort.isIncreasing);
                    } else {
                        sort.changeOrder(true)
                    }
                    sort.changeLastTarget("count");
                    setClasses({
                        ...emptyClasses,
                        count: ` active-sort sort-${
                            sort.isIncreasing ? "increasing" : "decreasing"
                        }`,
                    });
                }}
                className={"table-count" + classes.count}
            >
                {data.count}
            </div>
            <div
                onClick={() => {
                    sort.changeType("distance");
                    if (sort.lastTarget === "distance") {
                        sort.changeOrder(!sort.isIncreasing);
                    } else {
                        sort.changeOrder(true)
                    }
                    sort.changeLastTarget("distance");
                    setClasses({
                        ...emptyClasses,
                        distance: ` active-sort sort-${
                            sort.isIncreasing ? "increasing" : "decreasing"
                        }`,
                    });
                }}
                className={"table-distance" + classes.distance}
            >
                {data.distance}
            </div>
        </div>
    );
};

export default TableRow;
