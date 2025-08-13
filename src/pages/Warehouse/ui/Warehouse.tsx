import { useGetWarehouseByIdQuery } from "@/shared/api/inventoryApi";
import { useParams } from "react-router";

export const Warehouse = () => {
    const params = useParams()

    const { data, isLoading, isError } = useGetWarehouseByIdQuery(params.id as string, { refetchOnMountOrArgChange: true });


    return(
        <div className="w-full box-border p-8">
            {isError ? (
                <div>error</div>
            ): isLoading ? (
                <div>Loading...</div>
            ): data ? (
                <div>{data.name}</div>
            )
            : null}
        </div>
    )
}