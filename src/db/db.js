import { getFirestore, doc, getDocs, collection } from 'firebase/firestore'
import { app } from './config'

const db = getFirestore(app)

export const getProjects = async () => {
    const query = await getDocs(collection(db, 'projects'))
    const projects = []
    query.forEach((p) => {
        projects.push({...p.data(), id: p.id})
    })
    return projects
}