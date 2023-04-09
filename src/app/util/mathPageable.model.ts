export class MathPageable<T>{
    content: T[] = [];
    first: boolean = false;
    last: boolean = false;
    number: number = 0;
    numberOfElements: number = 0;
    pageable!: any;
    size: number = 0;
    sort: number = 0;
    totalElements: number = 0;
    totalPages: number = 0;
}
