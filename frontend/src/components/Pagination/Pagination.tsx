import { FC, useEffect, useState } from "react";
import "./Pagination.scss";

interface PaginationProps {
    countOfPages: number;
    onClick: (e: number) => void;
}

const Pagination: FC<PaginationProps> = ({ countOfPages, onClick }) => {
    const [pages, setPages] = useState<number[]>([]);

    useEffect(() => {
        let tempPages = [];
        for (let i = 0; i < countOfPages; i++) {
            tempPages.push(i + 1);
        }
        setPages(tempPages);
    }, []);

    return (
        <div className="pagination">
            {pages.map((e) => {
                return (
                    <p
                        onClick={() => {
                            onClick(e)
                        }}
                    >
                        {e}
                    </p>
                );
            })}
        </div>
    );
};

export default Pagination;
