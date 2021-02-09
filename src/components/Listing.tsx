import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg } from "@ionic/react"
import React from "react"
interface ListingProps{
    address : string;
    rent : number;
    description : string;
    image : string;

}
const Listing: React.FC<ListingProps>=({address, rent, description, image})=>{
    
    return(
        <IonCard>
        <IonCardHeader>
        <IonImg src={image}/>
          <IonCardSubtitle>${rent}/mo</IonCardSubtitle>
          <IonCardTitle>{address}</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          {description}
    </IonCardContent>
      </IonCard>

    )
}
export default Listing