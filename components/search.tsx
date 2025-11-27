"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CircleX, SearchIcon } from "lucide-react";

export default function Search() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [query, setQuery] = useState("");

  useEffect(() => {
    const current = searchParams.get("q") || "";
    setQuery(current);
  }, [pathname]);

  const handleSearch = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      if (query.trim()) {
        router.push(`/blog?q=${encodeURIComponent(query)}`);
      }
    },
    [query, router],
  );

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    const params = new URLSearchParams(searchParams.toString());
    if (newQuery) {
      params.set("q", newQuery);
    } else {
      params.delete("q");
    }

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const resetSearch = () => {
    router.push("/blog", { scroll: false });
  };

  return (
    <form onSubmit={handleSearch} className="group relative w-fit">
      <SearchIcon
        className={`absolute top-3 left-4 text-gray-300 transition-colors duration-200 group-focus-within:text-blue-300 ${query ? "text-blue-300" : ""}`}
        size={16}
      />

      <input
        ref={inputRef}
        type="text"
        value={query}
        placeholder="Buscar"
        onChange={handleQueryChange}
        className="body-sm placeholder:body-sm h-10 w-72 rounded-md border border-gray-400 bg-transparent pl-11 text-gray-100 transition-all duration-200 outline-none placeholder:text-gray-300 focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300"
      />

      {query && (
        <CircleX
          className="absolute top-3 right-4 text-gray-300"
          size={16}
          onClick={resetSearch}
        />
      )}
    </form>
  );
}
