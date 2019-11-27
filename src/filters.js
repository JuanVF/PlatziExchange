import numeral from 'numeral';

export const dolarFilter = value => {
	if (!value) return '$ 0';

	return numeral(value).format('($ 0.00a)');
};

export const percentFilter = value => {
	if (!value) return '0%';

	return `${Number(value).toFixed(2)}%`;
};
