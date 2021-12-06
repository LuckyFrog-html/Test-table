import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import PostService from "./API/PostService";
import "./App.scss";
import Pagination from "./components/Pagination/Pagination";
import Table from "./components/Table/Table";
import sort from "./store/Sort";

interface SortProps {
    type: string;
    isIncreasing: Boolean;
}

interface RowProps {
    id: number;
    date: string;
    name: string;
    count: number;
    distance: number;
}

interface RowsProps extends Array<RowProps> {}

const App = observer(() => {
    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const [rows, setRows] = useState<RowsProps>();
    const [allRows, setAllRows] = useState<RowsProps>();
    const [page, setPage] = useState<number>(1);
    const limit = 10; // Менять количество постов на странице

    async function getRows(): Promise<void> {
        setIsLoading(true);
        const response: RowsProps = await PostService.getAll();
        setAllRows(response);
        setIsLoading(false);
    }

    useEffect((): void => {
        getRows();
    }, []);

    useEffect((): void => {
        console.log(allRows);

        // Функция отрабатывает после загрузки постов
        if (!allRows) {
            return;
        }
        let tempRows = [];
        for (let i = 0; i < limit; i++) {
            try {
                if (!allRows[limit * (page - 1) + i]) {
                    continue;
                }
            } catch {}
            console.log(allRows[limit * (page - 1) + i]);
            tempRows.push(allRows[limit * (page - 1) + i]);
        }
        setRows(tempRows);
    }, [allRows, page]);

    useEffect((): void => {
        sortRows(sort);
    }, [sort, sort.type, sort.isIncreasing]);

    const sortRows = (sort: SortProps) => {
        rows &&
            setRows([
                ...rows.sort((a: RowProps, b: RowProps): number => {
                    if (typeof eval(`a["${sort.type}"]`) == "number") {
                        // Если a[sort.type] - число - возращаем их сравнение
                        return sort.isIncreasing
                            ? Number(
                                  eval(`a["${sort.type}"] > b["${sort.type}"]`)
                              ) - 1
                            : Number(
                                  eval(`a["${sort.type}"] < b["${sort.type}"]`)
                              ) - 1;
                    } else {
                        // Если нет - возращаем их сравнение с помощью .localeCompare()
                        return sort.isIncreasing
                            ? eval(
                                  `String(a["${sort.type}"]).localeCompare(String(b["${sort.type}"]))`
                              )
                            : eval(
                                  `String(b["${sort.type}"]).localeCompare(String(a["${sort.type}"]))`
                              );
                    }
                }),
            ]);
    };

    return (
        <div className="App">
            {isLoading ? (
                <div>Content is loading...</div>
            ) : (
                <>
                    <Table rows={rows} />
                    <Pagination
                        countOfPages={
                            allRows ? Math.ceil(allRows?.length / limit) : 0
                        }
                        onClick={(e) => {
                            setPage(e);
                        }}
                    />
                </>
            )}
        </div>
    );
});

export default App;
