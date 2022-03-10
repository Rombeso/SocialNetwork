
export const updateObjectInArray = (items: Array<any>, itemsId: number, objPropName:string, newObjProps:{followed: boolean}) => {
   return items.map(u => {
    if (u[objPropName] === itemsId) {
        return {...u, ...newObjProps}
    }
        return u
    }
)
}