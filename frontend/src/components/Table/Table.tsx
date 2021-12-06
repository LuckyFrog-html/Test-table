import { FC } from "react"
// import PostService from "../../API/PostService"
import TableRow from "../TablePow/TableRow"
import "./Table.scss"

interface RowProps {
    id: number;
    date: string;
    name: string;
    count: number;
    distance: number;
}

interface RowsProps extends Array<RowProps> {}

interface TableProps {
    limit?: number,
    rows?: RowsProps
}

const Table: FC<TableProps> = ({ rows }) => {

    return (
        <div className="main-table">
            <h1 className="table-header">Таблица данных</h1>
            <TableRow main={true} data={{id: "id", date: "date", name: "name", count: "count", distance: "distance"}}/>
            {rows && rows.map((row, i)=>{
                return (
                    <TableRow data={row} key={i}/>
                )
            })}
        </div>
    )
}

export default Table