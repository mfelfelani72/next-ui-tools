type Column<T> = {
    header: string;
    accessor: keyof T;
};
type TableProps<T> = {
    columns: Column<T>[];
    data: T[];
};
export default function Table<T>({ columns, data }: TableProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
