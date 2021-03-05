export const getTypeOfTime = (time: string): string => {
	if (time.slice(time.length - 1).toLowerCase() == 'm') {
		return 'minutes';
	} else if (time.slice(time.length - 1).toLowerCase() == 'h') {
		return 'hours';
	} else {
		return 'day';
	}
};

export const getTime = (time: string): number => {
	return Number(time.slice(0, -1));
};
