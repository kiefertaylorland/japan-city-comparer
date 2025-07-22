import { useState, useEffect, useMemo } from 'react';
import type { 
  City, 
  Category, 
  ComparisonData, 
  CategoryComparison, 
  CityComparisonData 
} from '../types';
import DataService from '../utils/DataService';

// Hook for city data
export const useCityData = (cityId: string) => {
  const [data, setData] = useState<City | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const cityData = await DataService.getCityData(cityId);
        setData(cityData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    if (cityId) {
      fetchData();
    }
  }, [cityId]);

  return { data, loading, error };
};

// Hook for comparison data
export const useComparisonData = (categoryId?: string) => {
  const [data, setData] = useState<ComparisonData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const comparisonData = await DataService.getComparisonData();
        setData(comparisonData);
      } catch (err) {
        console.error('Failed to load comparison data:', err);
        setError('Failed to load comparison data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const categoryData = useMemo(() => {
    if (!data || !categoryId) return null;
    return data.categories.find(c => c.categoryId === categoryId) || null;
  }, [data, categoryId]);

  return { data, categoryData, loading, error };
};

// Hook for all cities summary
export const useCitiesSummary = () => {
  const [data, setData] = useState<CityComparisonData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const citiesData = await DataService.getAllCitiesSummary();
        setData(citiesData);
      } catch (err) {
        console.error('Failed to load cities data:', err);
        setError('Failed to load cities data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

// Hook for category definitions
export const useCategoryDefinitions = () => {
  const [data, setData] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const categoriesData = await DataService.getCategoryDefinitions();
        setData(categoriesData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

// Hook for cities list (for navigation)
export const useCitiesList = () => {
  const [data, setData] = useState<Array<{id: string, name: string, displayName: string}>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const citiesData = await DataService.getCitiesList();
        setData(citiesData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

// Hook for specific category comparison
export const useCategoryComparison = (categoryId: string) => {
  const [data, setData] = useState<CategoryComparison | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const categoryData = await DataService.getCategoryComparison(categoryId);
        setData(categoryData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    if (categoryId) {
      fetchData();
    }
  }, [categoryId]);

  return { data, loading, error };
};