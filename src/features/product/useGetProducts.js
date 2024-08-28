import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useGetProducts = () => {

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
        const productsResponse = await axiosInstance.get("/products");
        return productsResponse;
    },
  })

    return {
        data,
        isLoading,
        refetch,
    }
}