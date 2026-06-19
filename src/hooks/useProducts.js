import { getProducts } from "../services/catalog";
import useAsync from "./useAsync";

export default function useProducts() {
  return useAsync(getProducts);
}
