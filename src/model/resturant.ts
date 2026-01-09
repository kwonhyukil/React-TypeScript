// let data: any = {
//   name: "내 식당",
//   category: "western",
//   address: {
//     city: "incheoi",
//     detail: "somewhere",
//     zipCode: 24231321,
//   },
//   menu: [
//     { name: "rose pasta", price: 20000, category: "PASTA" },
//     { name: "garlic steak", price: 30000, category: "steak" },
//   ],
// };

// 1. interface

// 2. type
export type Restaurant = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[];
};

export type Address = {
  city: string;
  detail: string;
  zipCode: Number;
};

// ? 있어도 오케이 없어도 오케이

export type Menu = {
  name: string;
  price: Number;
  category: string;
};

export type AddressWithoutZip = Omit<Address, "zipCode">;
export type RestaurantOnlycategory = Pick<Restaurant, "category">;

export type ApiResponse<T> = {
  data: T[];
  totalPage: number;
  page: number;
};

export type RestaurantResponse = ApiResponse<Restaurant>;
export type MenuResponse = ApiResponse<Menu>;
