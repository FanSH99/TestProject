interface AddRolesData {
    roleName:string;
    roleDesc?:string
}

type RightsType ="tree" | "list";

interface SetRights{
    rids:string
}