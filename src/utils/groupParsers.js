
// Searches the group name given as a parameter in the data given as parameters, if it exists in the data, returns it as an object. 
export const getGroup=(data,groupName)=>{
    const isThere=data.some(item=>item.group===groupName) 
    if(isThere){
        const members=data.filter(member=>member.group===groupName)
				const assistant=members.find(member=>member.type=="assistant")
				const students=members.map(student=>student.name) 
        return {
            group:groupName,
            "assistant":assistant.name,
            "students": students.filter(student=>student!==assistant.name)
        }
    }
    return `There isn't any ${groupName} member in this data.`  
}

// Returns unique group names in data
export const getGroupNames=(data)=>{
    if(data.length>0){
        return [...new Set(data.map(member=>member.group))] 
    }
		else
		return 'Data is empty.'                                                       
}