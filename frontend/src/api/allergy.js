import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const useGetAllergyData = () => {
	return useQuery({
		queryKey: ['getAllAllergy'],
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

export const postAllergyData = async (allergy_data) => {
	const { data } = await axios.post(
		'http://localhost:8000/allergy',
		allergy_data
	);
	return data;
};

export const useUpdateAllergyData = async (allergy_data) => {
	const { data } = await axios.put(
		`http://localhost:8000/allergy/${allergy_data.id}`,
		allergy_data
	);
	return data;
};

export const useDeleteAllergyData = async (id) => {
	const { data } = await axios.delete(`http://localhost:8000/allergy/${id}`);
	return data;
};
