'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { Loader2, Search } from "lucide-react";

interface SearchInputProps {
    category: string;
}

export const SearchInput = ({ category }: SearchInputProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();

    const handleSearch = (term: string) => {
        const params = new URLSearchParams(searchParams);
        if(term){
            params.set('q',term);
        }else{
            params.delete('q');
        }

        startTransition(() => {
            router.push(`?${params.toString()}`);
        });
    };

    const getPlaceholder = () => {
        if (category === 'people') return "Procurar Personagem...";
        if (category === 'vehicles') return "Procurar Veículo...";
        if (category === 'planets') return "Procurar Planeta...";
        return "Procurar...";
    };

    return(
        <InputGroup className="mb-10">
            <InputGroupInput
                placeholder={getPlaceholder()}
                defaultValue={searchParams.get('q')?.toString()}
                onChange={(e) => handleSearch(e.target.value)}
                className="capitalize"
            />
            <InputGroupAddon>
                {isPending ? <Loader2 className="animate-spin"/> : <Search/>}
            </InputGroupAddon>
        </InputGroup>
    );
}