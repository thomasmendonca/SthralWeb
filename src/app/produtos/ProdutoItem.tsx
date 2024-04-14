
interface ProdutoItemProps{
    produto: Produto
}

export function ProdutoItem(props: ProdutoItemProps) {
    
    const categoria = props.produto

    return (
        <div className="flex justify-between">
            <div className="flex gap-2">
                <span>{produto.nome}</span>
            </div>
        </div>
    )
}