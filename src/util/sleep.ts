
export default (ms: number) => new Promise (
	ok => setTimeout (ok, ms));
