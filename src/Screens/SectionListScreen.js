import { useRoute } from "@react-navigation/native";
import SectionsList from "../Components/SectionList";
import { useEffect } from "react";

const SectionListScreen = ()=> {
    const { params } = useRoute();

    return <SectionsList data={params.data}></SectionsList>
}
export default SectionListScreen;