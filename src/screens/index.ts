export interface RootState {
  user: {
    userData: any;
  };
}

export interface flatListItem {
  age: string;
  name: string;
  city: string;
}

export interface Apidata {
  product: {
    data: any;
    isError: boolean;
    isLoader: boolean;
  };
}

export interface ApiRenderList {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
