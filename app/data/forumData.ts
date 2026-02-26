export interface Comment {
    text: string;
    createdAt: string;
}

export interface BrandForum {
    brand : string;
    updatedAt: string;
    comments : Comment[];
}

export const forumData: BrandForum[] = [
    {
        brand: "Audi",
        updatedAt: "2 months ago",
        comments: [
            {text: "Audi is very reliable!", createdAt: "11-01-2026"},
            {text: "Fuel average is amazing", createdAt: "08-02-2026"}
        ],
    },
     {
    brand: "BMW",
    updatedAt: "6 months ago",
    comments: [
      { text: "BMW has powerful engines.", createdAt: "2026-02-11" },
    ],
  },
  {
    brand: "Toyota",
    updatedAt: "3 months ago",
    comments: [],
  },
]