
// const LOGIN_URL = 'https://bciimg.bci.cl/sitioseguro/login/login_personas_act.html';
// const BALANCE_URL = 'https://www.bci.cl/cl/bci/aplicaciones/menu/vistas/inicio/miBanco.jsf';

import IBank from './IBank';

export default class BciPersonas implements IBank
{
	public async login (username: string, password: string) // eslint-disable-line
	{
		throw new Error ('Not implemented!');
	}

	public async getAccounts ()
	{
		throw new Error ('Not implemented!');
	}

	public async getBalance (id: string) // eslint-disable-line
	{
		throw new Error ('Not implemented!');
	}
}
