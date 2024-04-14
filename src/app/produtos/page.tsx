import { Button, Navbar } from "@nextui-org/react";
import Link from "next/link";


export default async function Produto( ){
    
    

    return (
        <main className="flex min-h-screen flex-col items-center">
          <Navbar />
    
          <section className="flex flex-col gap-5 bg-neutral-800 p-6 mt-6 rounded min-w-96">
    
            <div className="flex justify-between gap-4">
              <h2 className="text-2xl font-bold">Produtos Cadastrados</h2>
              <Link href="/produtos/new">
                <Button color="success" variant="shadow">
                  Novo produto
                </Button>
              </Link>
            </div>
    
            {/* {categorias.map(categoria => <CategoriaItem categoria={categoria} /> )} */}
    
          </section>
          
        </main>
      );
}