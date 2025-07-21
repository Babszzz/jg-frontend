/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import api from "./api";

interface UseApiRequestOptions {
  url: string;
  params?: Record<string, any>;
  enabled?: boolean;
  dependencies?: any[];
}

export function useApiRequest<T = any>({
  url,
  params,
  enabled = true,
  dependencies = [],
}: UseApiRequestOptions) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(enabled);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await api.get<{ data: T }>(url, { params });
        setData(res.data.data);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, url, JSON.stringify(params), ...dependencies]);

  return { data, loading, error };
}
