import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const useGetAllergyData = () => {
	return useQuery({
		queryFn: async () => {
			const { data } = await axios.get('http://localhost:8000/allergy');
			return data;
		},
	});
};

export const useGetAllergyDataByID = (id) => {
	return useQuery({
		queryFn: async () => {
			const { data } = await axios.get(`http://localhost:8000/allergy/${id}`);
			return data;
		},
	});
};

export const usePostAllergyData = (allergy_data) => {
	return useQuery({
		queryFn: async () => {
			const { data } = await axios.post(
				'http://localhost:8000/allergy',
				allergy_data
			);
			return data;
		},
	});
};

export const useUpdateAllergyData = (id, allergy_data) => {
	return useQuery({
		queryFn: async () => {
			const { data } = await axios.put(
				`http://localhost:8000/allergy/${id}`,
				allergy_data
			);
			return data;
		},
	});
};

export const useDeleteAllergyData = (id) => {
	return useQuery({
		queryFn: async () => {
			const { data } = await axios.delete(
				`http://localhost:8000/allergy/${id}`
			);
			return data;
		},
	});
};
