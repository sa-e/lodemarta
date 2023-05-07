export interface Producto{
    nombre: string,
    precio: number
}

export interface Categoria{
    titulo: string,
    productos: Producto[]
}