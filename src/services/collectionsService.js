import APIService from "./apiService";
import { apiEndPoint } from "../config.json"


const collectionsEndPoint = `${apiEndPoint}/collections`
const getCollections = () => APIService.get(collectionsEndPoint)
const getCollectionProducts = collectionId => APIService.get(`${collectionsEndPoint}/${collectionId}/products`)


export default {
    getCollections,
    getCollectionProducts
}