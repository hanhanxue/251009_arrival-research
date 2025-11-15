declare module "masonry-layout" {
  interface MasonryOptions {
    itemSelector?: string;
    columnWidth?: number | string | Element;
    columnGutter?: number;
    rowGutter?: number;
    gutter?: number;
    percentPosition?: boolean;
    transitionDuration?: string | number;
    resize?: boolean;
    initLayout?: boolean;
    [key: string]: unknown;
  }

  class Masonry {
    constructor(element: string | Element, options?: MasonryOptions);
    layout?(): void;
    reloadItems?(): void;
    destroy?(): void;
    options?: MasonryOptions;
    [key: string]: unknown;
  }

  export default Masonry;
}
