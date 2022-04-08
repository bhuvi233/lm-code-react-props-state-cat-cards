import { images } from '../data/catData';
import { CatImage } from './cat_image';


interface CatInfo {
    name: string;
	species: string;
	favFoods: Array<string>;
	birthYear: number;
    
}

interface CatCardProps {
    catObject : CatInfo;
    catIndex: number;
}

export const CatCard: React.FC<CatCardProps> = ({ catObject, catIndex }) => 
    
    <div className="card">
        <h3 className="card__text card__header">{catObject.name}</h3>
        <p className="card__text">Species: {catObject.species}</p>
        <p className="card__text">Favourite Food(s): {catObject.favFoods}</p>
        <p className="card__text">Birth Year: {catObject.birthYear}</p>
        <CatImage 
            image={images[catIndex].image}
            altText={images[catIndex].altText}
            licenceType={images[catIndex].licenceType}
            licenceUrl={images[catIndex].licenceUrl}
            attributionName={images[catIndex].attributionName}
            attributionUrl={images[catIndex].attributionUrl}
        />
    </div>
    