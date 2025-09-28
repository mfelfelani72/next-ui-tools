export declare function getDictionary(lang: "en" | "fa"): Promise<{
    home: {
        title: string;
        description: string;
    };
    about: {
        title: string;
        content: string;
    };
    posts: {
        title: string;
        description: string;
    };
    postDetail: {
        title: string;
        content: string;
    };
} | {
    home: {
        title: string;
        description: string;
    };
    about: {
        title: string;
        content: string;
    };
    posts: {
        title: string;
        description: string;
    };
    postDetail: {
        title: string;
        content: string;
    };
}>;
