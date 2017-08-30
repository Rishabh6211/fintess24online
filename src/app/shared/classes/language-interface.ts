export class LanguageInterface {

	private labels: object;
	private direction: string = 'ltr';
	
	constructor() {}

	public getLabel( keyword ) {
		
		if( keyword && keyword !== 'undefined' && keyword !== null && !Number.isInteger(keyword)
 ){
			keyword = keyword.toLowerCase().trim();
			keyword = keyword.replace(/ /g,'_');
			
			if ( this.labels.hasOwnProperty(keyword) ) {
				return this.labels[keyword];
			}else{			
				return this.sensitizeLabel(keyword);
			}
		}else{
			return keyword;
		}	
	}

	private sensitizeLabel( label ) {
		label = label.replace(/_/g,' ');
		return label.substring(0,1).toLocaleUpperCase() + label.substring(1);
	}

	public setLabels( labels ) {
		this.labels = labels;
	}

	public setDirection( direction  ) {
		this.direction = direction; 
	}

	public getDirection() {
		return this.direction;	
	}
}
