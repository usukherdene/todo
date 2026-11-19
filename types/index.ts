export type Task = {
    title: string;
    completed: boolean;
    id: string;
};

export type FilterType = "All" | "Active" | "Completed";