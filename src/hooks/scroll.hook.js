import { useEffect } from 'react';
import { scrollDirection } from '../animation/scroll';

export const useScrollBody = (watch) => {
	useEffect(() => {
		const app = document.getElementById('app');
		scrollDirection(app, 'top', 10, 0);
	}, [watch]);
};
