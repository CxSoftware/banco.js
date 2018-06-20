
export default interface IBank // eslint-disable-line
{
	login (username: string, password: string) : Promise<void>;
	getAccounts () : Promise <any>; // FIXME: Add real type
	getBalance (id: string) : Promise <any>; // FIXME: Add real type
}
