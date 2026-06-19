import { getFeatures } from "../services/catalog";
import useAsync from "./useAsync";

export default function useFeatures() {
  return useAsync(getFeatures);
}
