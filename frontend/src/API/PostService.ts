interface RowProps {
    id: number;
    date: string;
    name: string;
    count: number;
    distance: number;
}

interface RowsProps extends Array<RowProps> {}

export default class PostService {
    static async getAll(): Promise<RowsProps> {
        return await fetch("/api/data").then((res) =>
            res.json().then((data) => {
                return data;
            })
        );
    }
}
