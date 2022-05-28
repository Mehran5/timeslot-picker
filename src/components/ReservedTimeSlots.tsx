import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, ReservedSlots } from "./styling";

export const ReservedTimeSlots = ({ reservedSlot, slotIndex, companyIndex, removeReservedSlot }: any) => {

    return (
        <ReservedSlots>
            <Badge>{reservedSlot ? reservedSlot : 'No reserved slot'}</Badge>
            <FontAwesomeIcon icon={faTimes} onClick={() => removeReservedSlot(slotIndex, companyIndex)} />
        </ReservedSlots>
    );

}