declare module 'masonry-layout' {
  interface MasonryOptions {
    itemSelector?: string;
    columnWidth?: number | string | Element;
    columnGutter?: number;
    rowGutter?: number;
    gutter?: number;
    percentPosition?: boolean;
    [key: string]: any;
  }

  class Masonry {
    constructor(element: string | Element, options?: MasonryOptions);
    layout?(): void;
    reloadItems?(): void;
    destroy?(): void;
    [key: string]: any;
  }

  export default Masonry;
}

