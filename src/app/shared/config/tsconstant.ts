'use strict';

export const SEP='/';

/*API credentials */
 export const HOST: string       = "https://fitnessapis.herokuapp.com";
//export const HOST: string       = "http://localhost:1337";
//export const CLIENT_ID: string  = '5x7EuN09HAeBn2pYJnvvq7szgJaULh14';
//export const GRANT_TYPE: string = 'password';


/* Social login  credentials */
export const GOOGLE_CLIENT_ID: string     = "964967040033-3ajshe27mbgio51mabhfho211jgklq4t.apps.googleusercontent.com";

export const FACEBOOK_CLIENT_ID: string   = "1697942893833584";
export const FACEBOOK_API_VERSION: string = "v2.8";


export const GOOGLE_DISTANCE_API_KEY: string = "AIzaSyB84_b3sz-C67ERkmEnQXAu_EglmB-AG1g";


export const MESSAGE_SHOWTIME: string = "3000";

export const COLOR_DANGER: string  = 'color-danger';
export const COLOR_SUCESS: string  = 'color-sucess';
export const COLOR_WARNING: string = 'color-warning';
export const COLOR_INFO: string    = 'color-info';


export const QUANTITY_DEFAUT_ITEMS = {
        "Grams":"Grams",
        "Kg": "Kg",
        "Quintal": "Quintal",
        "Tonnes": "Tonnes",
        "Count": "Count",
        "Dozen": "Dozen",
    };

export const TAX_RATE  = 10;
export const EFARMX_COMISSION  =  10;

export const  CROP_QUANTITIES = [	
	{
		name: '700 Kgs',
		value: 700,
		unit: 'Kgs' 
	},
	{
		name: '2.5 MT',
		value: 2500,
		unit: 'MT' 
	},
	{
		name: '3.5 MT',
		value: 3500,
		unit: 'MT' 
	},
	{
		name: '5 MT',
		value: 5000,
		unit: 'MT' 
	},
	{
		name: '7 MT',
		value: 7000,
		unit: 'MT' 
	},
	{
		name: '9 MT',
		value: 9000,
		unit: 'MT' 
	},
	{
		name: '11 MT',
		value: 11000,
		unit: 'MT' 
	},
	{
		name: '15 MT',
		value: 15000,
		unit: 'MT' 
	},
	{
		name: '19 MT',
		value: 15000,
		unit: 'MT' 
	}
];