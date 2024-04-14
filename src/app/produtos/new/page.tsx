import { Button, Input, Navbar } from "@nextui-org/react";
import Link from "next/link";


export default async function FormProdutos() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <Navbar />
            <section className="flex flex-col gap-5 bg-neutral-900 p-6 mt-6 rounded min-w-96">
                <form action="" className="flex flex-col gap-4 p-6 m-6">
                    <h2 className="text-2xl font-bold">Cadastrar Categoria</h2>
                    <div className="flex flex-col gap-1">
                        <Input
                            key="nome"
                            label="Nome"
                            name="nome"
                            labelPlacement="outside"
                        />
                        <Input
                            key="preco"
                            label="Preço"
                            name="preco"
                            labelPlacement="outside"
                        />
                        <Input
                            key="tela"
                            label="Tamanho da Tela"
                            name="tela"
                            labelPlacement="outside"
                        />
                        <Input
                            key="armazenamento"
                            label="Armazenamento"
                            name="armazenamento"
                            labelPlacement="outside"
                        />
                        <Input
                            key="cor"
                            label="Cor"
                            name="cor"
                            labelPlacement="outside"
                        />
                        <Input
                            key="camera"
                            label="Camera"
                            name="camera"
                            labelPlacement="outside"
                        />
                    </div>

                    <div className="flex justify-around">
                        <Link href="/produtos">
                            <Button color="danger" variant="shadow">Cancelar</Button>
                        </Link>
                        <Button type="submit" color="success" variant="shadow">Salvar</Button>
                    </div>
                </form>
            </section>
        </main>
    )
}