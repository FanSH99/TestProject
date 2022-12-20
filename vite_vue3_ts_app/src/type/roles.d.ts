interface AddRolesData {
    roleName: string,
    roleDesc?: string,
}

type RightData = "tree" | "list";

interface SetRights{
    rids:string,
}